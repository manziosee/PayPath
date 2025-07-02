import React from 'react';
import { cn } from '@/lib/utils';

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
        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="currentColor"
          className="text-blue-600"
        />
        
        {/* Path design - representing the payment flow */}
        <path
          d="M12 15 L28 15 Q30 15 30 17 L30 23 Q30 25 28 25 L20 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Arrow pointing forward */}
        <path
          d="M24 21 L28 25 L24 29"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Dollar sign */}
        <circle
          cx="15"
          cy="20"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M15 17 L15 23 M13 18 Q15 17 17 18 Q15 20 13 21"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}