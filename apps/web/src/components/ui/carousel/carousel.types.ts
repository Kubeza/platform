import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CarouselContextValue {
  currentIndex: number;
  setCurrentIndex: (
    index: number,
  ) => void;
  totalItems: number;
}

export interface CarouselProviderProps {
  children: ReactNode;
  totalItems: number;
  defaultIndex?: number;
}

export interface CarouselProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CarouselContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CarouselItemProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CarouselPreviousProps
  extends HTMLAttributes<HTMLButtonElement> {}

export interface CarouselNextProps
  extends HTMLAttributes<HTMLButtonElement> {}