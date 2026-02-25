import Cards from "~/ui/Cards";

import type { Route } from "./+types/home";

export default function Home({}: Route.ComponentProps) {
  return (
    <>
      <title>Oblique Strategies</title>
      <meta name="description" content="Over One Hundred Worthwhile Dilemmas" />
      <main className="container flex h-full flex-col items-center justify-center gap-8">
        <section>
          <h1 className="text-center">Oblique Strategies</h1>
          <h2 className="text-center">Over One Hundred Worthwhile Dilemmas</h2>
        </section>
        <section className="my-auto -translate-y-24">
          <Cards />
        </section>
      </main>
    </>
  );
}
