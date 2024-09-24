"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ScaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScaryButton({ children }: ScaryButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Button
      variant="outline"
      className={`
          relative overflow-hidden bg-black text-red-600 border-2 border-red-800
          hover:bg-red-900 hover:text-white transition-all  duration-300
          font-['Creepster',_cursive] text-xl py-5 px-6 shadow-lg 
          ${isHovering ? "animate-pulse" : ""}
        `}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`
            absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-300
            ${isHovering ? "opacity-50" : ""}
          `}
      />
      {isHovering && (
        <>
          <span className="absolute top-0 left-1/4 transform -translate-x-1/2 text-xl animate-drip">
            🩸
          </span>
          <span className="absolute top-0 right-1/4 transform translate-x-1/2 text-xl animate-drip-delayed">
            🩸
          </span>
        </>
      )}
    </Button>
  );
}
