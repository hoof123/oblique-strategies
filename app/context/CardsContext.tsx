import { createContext, useEffect, useRef, useState } from "react";
import { shuffleArray } from "~/utils";

import type { Swiper as SwiperType } from "swiper";
import type { Strategy } from "~/types";
import type { CardsContextType } from "~/types";

export const CardsContext = createContext<CardsContextType | null>(null);

export function CardsProvider({
  children,
  strategies,
}: {
  children: React.ReactNode;
  strategies: Strategy[];
}) {
  const [shuffled, setShuffled] = useState<Strategy[]>([]);
  const [initialSlide, setInitialSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const slideDeck = useRef<number[]>([]);

  useEffect(() => {
    const shuffledStrategies = shuffleArray(strategies);
    const initialSlideIndex = Math.floor(
      Math.random() * shuffledStrategies.length,
    );

    setShuffled(shuffledStrategies);
    setInitialSlide(initialSlideIndex);
    slideDeck.current = shuffledStrategies
      .map((_, i) => i)
      .filter((i) => i !== initialSlideIndex);
  }, [strategies]);

  const goToRandom = () => {
    if (slideDeck.current.length === 0) {
      slideDeck.current = shuffled.map((_, i) => i);
    }
    const randomIndex = Math.floor(Math.random() * slideDeck.current.length);
    const slideIndex = slideDeck.current[randomIndex];
    slideDeck.current.splice(randomIndex, 1);
    swiperRef.current?.slideTo(slideIndex);
  };

  const goToNext = () => {
    swiperRef.current?.slideNext();
  };

  const goToPrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const shuffleDeck = () => {
    const reshuffled = shuffleArray(shuffled);
    const newInitialSlide = Math.floor(Math.random() * reshuffled.length);
    setShuffled(reshuffled);
    setInitialSlide(newInitialSlide);
    slideDeck.current = reshuffled
      .map((_, i) => i)
      .filter((i) => i !== newInitialSlide);
    swiperRef.current?.slideTo(newInitialSlide);
  };

  return (
    <CardsContext
      value={{
        shuffled,
        initialSlide,
        swiperRef,
        goToRandom,
        goToNext,
        goToPrevious,
        shuffleDeck,
      }}
    >
      {children}
    </CardsContext>
  );
}
