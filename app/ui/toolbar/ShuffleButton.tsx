import { useContext } from "react";
import { ShuffleIcon } from "./Icons";
import { CardsContext } from "~/context/CardsContext";

export default function ShuffleButton() {
  const context = useContext(CardsContext);
  const { shuffleDeck } = context!;

  return (
    <button
      onClick={shuffleDeck}
      title="Shuffle Strategies"
      className="cursor-pointer"
    >
      <ShuffleIcon className="h-8 w-8 fill-current" />
    </button>
  );
}
