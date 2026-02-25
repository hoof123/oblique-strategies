import { Outlet } from "react-router";
import { CardsProvider } from "~/context/CardsContext";
import obliqueStrategies from "~/data/oblique-strategies.json";
import Toolbar from "~/ui/toolbar/Toolbar";

import type { Route } from "./+types/main";
import type { Strategy } from "~/types";

export async function loader({}: Route.LoaderArgs) {
  return {
    obliqueStrategies: obliqueStrategies as Strategy[],
  };
}

export default function LayoutMain({ loaderData }: Route.ComponentProps) {
  const { obliqueStrategies } = loaderData;
  return (
    <>
      <CardsProvider strategies={obliqueStrategies}>
        <Toolbar />
        <div className="flex h-screen w-screen items-start justify-center p-8">
          <Outlet />
        </div>
      </CardsProvider>
    </>
  );
}
