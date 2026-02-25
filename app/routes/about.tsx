import { Link } from "react-router";

import type { Route } from "./+types/about";

export default function About({}: Route.ComponentProps) {
  return (
    <>
      <title>About | Oblique Strategies</title>
      <meta name="description" content="Over One Hundred Worthwhile Dilemmas" />
      <main className="container flex h-fit flex-col items-center justify-start gap-8 pb-16">
        <section>
          <h1 className="text-center">About</h1>
        </section>
        <img
          src="/oblique-strategies-box.jpg"
          className="mx-auto w-full rounded-card contain-layout md:max-w-1/2 lg:max-w-1/3"
        ></img>
        <div className="max-w-full space-y-8 md:max-w-3/4 lg:max-w-1/2">
          <section className="space-y-8">
            <h2>Overview</h2>
            <p className="text-base">
              Oblique Strategies is a deck of cards, about 7x9 cm in size,
              supplied in a small black box labelled{" "}
              <strong>"OBLIQUE STRATEGIES".</strong> The cards themselves are
              black on one side, white on the other, and have obscure, cryptic
              aphorisms printed on the front in small letters.
            </p>
            <p className="text-base">
              They are intended as a creative tool for musicians and were
              developed by legendary producer <strong>Brian Eno</strong> and
              artist <strong>Peter Schmidt</strong>- the pair originally both
              came up with the same idea independently in 1975, and joined
              forces to make it a reality.
            </p>
            <p>
              <Link to="https://productionadvice.co.uk/oblique-strategies/">
                <cite>
                  <strong>
                    Ian Shepherd. (2009, April 29th). Brian Eno's Oblique
                    Strategies - the Ultimate Music Production Tool. Production
                    Advice.
                  </strong>
                </cite>
              </Link>
            </p>
            <blockquote
              cite="https://productionadvice.co.uk/oblique-strategies/"
              className="p-8 md:p-16"
            >
              <p>
                "The Oblique Strategies evolved from me being in a number of
                working situations when the panic of the situation -
                particularly in studios - tended to make me quickly forget that
                there were others ways of working and that there were tangential
                ways of attacking problems that were in many senses more
                interesting than the direct head-on approach. If you're in a
                panic, you tend to take the head-on approach because it seems to
                be the one that's going to yield the best results Of course,
                that often isn't the case - it's just the most obvious and -
                apparently - reliable method. The function of the Oblique
                Strategies was, initially, to serve as a series of prompts which
                said, "Don't forget that you could adopt *this* attitude," or
                "Don't forget you could adopt *that* attitude."
              </p>
              <p>
                <cite>
                  <strong>Brian Eno</strong>
                </cite>
              </p>
            </blockquote>
          </section>
          <section className="space-y-8">
            <h2>Design</h2>
            <p>
              Each card contains a gnomic suggestion, aphorism or remark which
              can be used to break a deadlock or dilemma situation. A few are
              specific to music composition; others are more general. For
              example:
            </p>
            <ul role="list">
              <li>Use an old idea.</li>
              <li>State the problem in words as clearly as possible.</li>
              <li>Only one element of each kind.</li>
              <li>What would your closest friend do?</li>
              <li>What to increase? What to reduce?</li>
              <li>Are there sections? Consider transitions.</li>
              <li>Try faking it!</li>
              <li>Honour thy error as a hidden intention.</li>
              <li>Ask your body.</li>
              <li>Work at a different speed.</li>
            </ul>
            <p>
              <strong>From the introduction to the 2001 edition: </strong>
            </p>
            <p>
              These cards evolved from separate observations of the principles
              underlying what we were doing. Sometimes they were recognised in
              retrospect (intellect catching up with intuition), sometimes they
              were identified as they were happening, sometimes they were
              formulated. They can be used as a pack, or by drawing a single
              card from the shuffled pack when a dilemma occurs in a working
              situation. In this case the card is trusted even if its
              appropriateness is quite unclear...
            </p>
            <Link to="https://en.wikipedia.org/wiki/Oblique_Strategies">
              <cite>
                <strong>Wikipedia. (2026, Jan 27th). Oblique Strategies</strong>
              </cite>
            </Link>
          </section>
          <section className="space-y-8">
            <h2>Further Reading</h2>
            <ul role="list" className="list-inside list-disc md:list-outside">
              <li>
                <Link to="https://peterschmidtweb.blogspot.com/2010/03/thoughts-behind-thoughts.html">
                  Peter Schmidt. (2010, Mar 9). The Thoughts Behding the
                  Thoughts.
                </Link>
              </li>
              <li>
                <Link to="https://web.archive.org/web/20240708195829/http://www.rtqe.net/ObliqueStrategies/OSintro.html">
                  Gregory Taylor. (1997). A Primer On Oblique Strategizing
                </Link>
              </li>
              <li>
                Sheppard, David (2009). On Some Faraway Beach: The Life and
                Times of Brian Eno. Chicago Review Press. ISBN
                978-1-55652-942-9.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
