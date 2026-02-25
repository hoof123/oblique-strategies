import { useContext } from "react";
import { RandomIcon } from "./Icons";
import { CardsContext } from "~/context/CardsContext";

export default function RandomButton() {
  const context = useContext(CardsContext);
  const { goToRandom } = context!;

  return (
    <button
      onClick={goToRandom}
      title="Pick a random strategy"
      className="cursor-pointer"
    >
      <RandomIcon className="h-8 w-8 fill-current" />
    </button>
  );
}
