import { useState, useContext } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardsContext } from "~/context/CardsContext";
import "swiper/css";
import "swiper/css/effect-cards";
import CardsSkeleton from "~/ui/skeletons/CardsSkeleton";
import { randomColor } from "~/utils";

import type { Swiper as SwiperType } from "swiper";
import type { Strategy } from "~/types";

export default function Cards() {
  const context = useContext(CardsContext);
  const { shuffled, initialSlide, swiperRef } = context!;

  if (!shuffled.length) return <CardsSkeleton />;

  return (
    <CardSwiper
      shuffled={shuffled}
      initialSlide={initialSlide}
      swiperRef={swiperRef}
    />
  );
}

function CardSwiper({
  shuffled,
  initialSlide,
  swiperRef,
}: {
  shuffled: Strategy[];
  initialSlide: number;
  swiperRef: React.RefObject<SwiperType | null>;
}) {
  const [colours] = useState(() => shuffled.map(() => randomColor()));

  return (
    <Swiper
      className="h-96 w-48 max-w-full sm:w-80 md:h-96 md:w-full md:max-w-xl"
      modules={[EffectCards]}
      effect="cards"
      spaceBetween={0}
      slidesPerView={1}
      initialSlide={initialSlide}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {shuffled.map((strategy) => (
        <SwiperSlide key={strategy.id} className="h-full w-full rounded-card">
          <div
            style={colours[strategy.id]}
            className="flex h-full w-full flex-col items-center justify-center rounded-card p-8 md:p-16"
          >
            <p className="text-center text-base sm:text-lg md:text-2xl">
              {strategy.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
