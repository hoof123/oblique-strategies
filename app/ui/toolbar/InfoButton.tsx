import { Link } from "react-router";
import { InfoIcon } from "./Icons";

export default function InfoButton() {
  return (
    <Link
      to="/about"
      title="About Oblique Strategies"
      className="cursor-pointer"
    >
      <InfoIcon className="h-8 w-8 fill-current" />
    </Link>
  );
}
