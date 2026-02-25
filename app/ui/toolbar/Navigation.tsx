import { useContext } from "react";
import { ArrowLeft, ArrowRight } from "./Icons";
import { CardsContext } from "~/context/CardsContext";

export default function Navigation() {
  const context = useContext(CardsContext);
  const { goToNext, goToPrevious } = context!;

  return (
    <div className="flex gap-8">
      <button
        onClick={goToPrevious}
        title="Pick a random strategy"
        className="cursor-pointer"
      >
        <ArrowLeft className="h-8 w-8 fill-current" />
      </button>
      <button
        onClick={goToNext}
        title="Pick a random strategy"
        className="cursor-pointer"
      >
        <ArrowRight className="h-8 w-8 fill-current" />
      </button>
    </div>
  );
}
