"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { useMemo } from "react";

interface StaticGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  color?: string;
  className?: string;
  maxOpacity?: number;
}

export const StaticGrid: React.FC<StaticGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  color = "#60A5FA",
  className,
  maxOpacity = 0.5,
  ...props
}) => {
  const memoizedColor = useMemo(() => {
    if (color.startsWith("#")) {
      const hex = color.slice(1);
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    }

    return color;
  }, [color]);

  const gridData = useMemo(() => {
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1920;
    const screenHeight =
      typeof window !== "undefined" ? window.innerHeight : 1080;

    const cols = Math.floor(screenWidth / (squareSize + gridGap));
    const rows = Math.floor(screenHeight / (squareSize + gridGap));

    const squares = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        squares.push({
          id: `${i}-${j}`,
          opacity: Math.random() * maxOpacity,
          x: i,
          y: j,
        });
      }
    }
    return { squares, cols, rows };
  }, [squareSize, gridGap, maxOpacity]);

  return (
    <div
      className={cn(
        "h-full w-full relative overflow-hidden",
        className,
        gridData.squares.length > 0 ? "opacity-100" : "opacity-0"
      )}
      style={{
        transition: "opacity 0.3s ease-in-out",
      }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridData.cols}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${gridData.rows}, ${squareSize}px)`,
          gap: `${gridGap}px`,
          width: "100%",
          height: "100%",
        }}
      >
        {gridData.squares.map((square) => (
          <div
            key={square.id}
            className="pointer-events-none"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              backgroundColor: `rgba(${memoizedColor}, ${square.opacity})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
