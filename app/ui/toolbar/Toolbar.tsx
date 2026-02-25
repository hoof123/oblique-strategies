import { useLocation } from "react-router";
import HomeIcon from "./HomeButton";
import InfoButton from "./InfoButton";
import Navigation from "./Navigation";
import RandomButton from "./RandomButton";
import ShuffleButton from "./ShuffleButton";
import ThemeSwitcher from "./ThemeSwticher";

export default function Toolbar() {
  const pathname = useLocation().pathname;
  const isHome = pathname === "/";

  return (
    <div className="fixed right-0 bottom-0 left-0 flex w-full flex-wrap items-center justify-center gap-8 p-4 backdrop-blur-[2px]">
      {!isHome ? <HomeIcon /> : <InfoButton />}
      <ThemeSwitcher />
      {!isHome ? null : <ShuffleButton />}
      {!isHome ? null : <RandomButton />}
      {!isHome ? null : <Navigation />}
    </div>
  );
}
