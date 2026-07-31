"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { PageShell } from "../../../components/PageShell";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: form.get("id"),
        password: form.get("password"),
      }),
    });

    setLoading(false);
    if (!response.ok) {
      setError("아이디 또는 비밀번호를 확인해 주세요.");
      return;
    }

    const returnTo = searchParams.get("return_to") || "/admin";
    window.location.href = returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/admin";
  }

  return (
    <PageShell>
      <main className="container admin-login-page">
        <section className="form-section admin-login-card">
          <p className="eyebrow">SAIE admin</p>
          <h1 className="section-title">관리자 로그인</h1>
          <form className="inquiry-form" onSubmit={submit}>
            <div className="field">
              <label htmlFor="id">아이디</label>
              <input id="id" name="id" autoComplete="username" required />
            </div>
            <div className="field">
              <label htmlFor="password">비밀번호</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required />
            </div>
            <button className="button" type="submit" disabled={loading}>
              {loading ? "확인 중" : "로그인"}
            </button>
            {error && <p className="error-text">{error}</p>}
          </form>
        </section>
      </main>
    </PageShell>
  );
}
