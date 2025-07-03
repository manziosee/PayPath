"use client";

import { cn } from "@/lib/utils";

interface PayPathLogoProps {
  className?: string;
}

export function PayPathLogo({ className }: PayPathLogoProps) {
  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer ring with gradient */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        
        {/* Inner geometric pattern */}
        <path
          d="M12 16L20 12L28 16L24 24L16 24Z"
          fill="url(#gradient2)"
          className="drop-shadow-sm"
        />
        
        {/* Central diamond */}
        <path
          d="M16 20L20 16L24 20L20 24Z"
          fill="currentColor"
          className="opacity-90"
        />
        
        {/* Connecting lines */}
        <line
          x1="12"
          y1="16"
          x2="16"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-70"
        />
        <line
          x1="24"
          y1="20"
          x2="28"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-70"
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}