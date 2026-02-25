import { useState } from "react";
import { randomColor } from "~/utils";

export default function CardsSkeleton() {
  const [color] = useState(randomColor());

  return (
    <div className="h-full w-full">
      <div
        style={color}
        className="flex h-full w-full flex-col items-center justify-center rounded-card p-16"
      >
        <p className="text-center text-2xl">Loading Strategies...</p>
      </div>
    </div>
  );
}
