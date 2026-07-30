"use client";

import { useEffect, useState } from "react";
import {
  hasMoaInviteData,
  inviteToQuery,
  MOA_INVITE_STORAGE_KEY,
  pickMoaInviteFromSearch,
  type MoaInviteData,
  withInviteQuery,
} from "../lib/moaInvite";

function readStoredInvite(): MoaInviteData {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(MOA_INVITE_STORAGE_KEY) ?? "{}") as MoaInviteData;
  } catch {
    window.sessionStorage.removeItem(MOA_INVITE_STORAGE_KEY);
    return {};
  }
}

function readCurrentInvite(): MoaInviteData {
  if (typeof window === "undefined") return {};
  return pickMoaInviteFromSearch(new URLSearchParams(window.location.search));
}

export function useMoaInvite() {
  const [invite] = useState<MoaInviteData>(() => {
    const stored = readStoredInvite();
    const current = readCurrentInvite();
    return hasMoaInviteData(current) ? { ...stored, ...current } : stored;
  });

  useEffect(() => {
    if (hasMoaInviteData(invite)) {
      window.sessionStorage.setItem(MOA_INVITE_STORAGE_KEY, JSON.stringify(invite));
    }
  }, [invite]);

  return {
    invite,
    hasInvite: hasMoaInviteData(invite),
    query: inviteToQuery(invite),
    withInvite: (path: string) => withInviteQuery(path, invite),
  };
}
