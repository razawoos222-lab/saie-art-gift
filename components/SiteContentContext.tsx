"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultSiteContent, normalizeSiteContent, type SiteContent } from "../lib/siteContent";

type SaveState = "idle" | "saving" | "saved" | "error";

type SiteContentContextValue = {
  content: SiteContent;
  saveState: SaveState;
  saveContent: (nextContent: SiteContent) => Promise<void>;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [saveState, setSaveState] = useState<SaveState>("idle");

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const response = await fetch("/api/site-content", { cache: "no-store" });
        const payload = (await response.json()) as { content?: SiteContent };
        if (!ignore && payload.content) setContent(normalizeSiteContent(payload.content));
      } catch {
        if (!ignore) setContent(defaultSiteContent);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      content,
      saveState,
      saveContent: async (nextContent: SiteContent) => {
        setSaveState("saving");
        const normalized = normalizeSiteContent(nextContent);
        setContent(normalized);

        try {
          const response = await fetch("/api/site-content", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(normalized),
          });

          if (!response.ok) throw new Error("save failed");
          setSaveState("saved");
        } catch {
          setSaveState("error");
        }
      },
    }),
    [content, saveState],
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) throw new Error("useSiteContent must be used within SiteContentProvider");
  return context;
}
