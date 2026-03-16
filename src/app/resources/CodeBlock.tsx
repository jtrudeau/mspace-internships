"use client";

import { useEffect, useRef, useState } from "react";

function fallbackCopy(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "true");
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        fallbackCopy(code);
      }

      setCopied(true);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      fallbackCopy(code);
      setCopied(true);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    }
  }

  return (
    <div className="code-block mt-4 border-2 border-[var(--ink)] bg-[#fffdf7]">
      <div className="flex items-center justify-end border-b-2 border-[var(--ink)] bg-[var(--sand)] px-3 py-2">
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-secondary px-3 py-2 text-[0.68rem]"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-[var(--ink)]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
