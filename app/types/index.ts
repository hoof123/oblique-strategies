import { Swiper as SwiperType } from "swiper";

export type Strategy = {
  id: number;
  text: string;
};

export type CardsContextType = {
  shuffled: Strategy[];
  initialSlide: number;
  swiperRef: React.RefObject<SwiperType | null>;
  goToRandom: () => void;
  goToNext: () => void;
  goToPrevious: () => void;
  shuffleDeck: () => void;
};
