import { useState } from "react";
import { randomColor } from "~/utils";

export default function CardsSkeleton() {
  const [color] = useState(randomColor());

  return (
    <div className="h-68 w-48 max-w-full sm:w-80 md:h-96 md:w-132 md:max-w-xl">
      <div
        style={color}
        className="flex h-full w-full flex-col items-center justify-center rounded-card p-8 md:p-16"
      >
        <p className="text-center text-base sm:text-lg md:text-2xl">
          Loading Strategies...
        </p>
      </div>
    </div>
  );
}
