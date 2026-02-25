import { Link } from "react-router";
import { HomeIcon } from "./Icons";

export default function HomeButton() {
  return (
    <Link to="/" title="About Oblique Strategies" className="cursor-pointer">
      <HomeIcon className="h-8 w-8 fill-current" />
    </Link>
  );
}
