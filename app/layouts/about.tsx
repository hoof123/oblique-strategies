import { Outlet } from "react-router";
import Toolbar from "~/ui/toolbar/Toolbar";

import type { Route } from "./+types/main";

export default function LayoutAbout({}: Route.ComponentProps) {
  return (
    <>
      <Toolbar />
      <div className="flex min-h-screen w-screen items-start justify-center p-8">
        <Outlet />
      </div>
    </>
  );
}
