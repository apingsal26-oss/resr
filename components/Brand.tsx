"use client";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark />
      <span className="text-[18px] font-medium tracking-tight text-ink">
        pulseflow
      </span>
    </span>
  );
}

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 14c0-6 4-10 9-10s9 4 9 10c0 3-2 5-5 5h-3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="19" r="2.5" fill="currentColor" />
    </svg>
  );
}
