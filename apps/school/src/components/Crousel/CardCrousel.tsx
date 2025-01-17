import React, {
  useEffect,

  createContext,
  
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
 
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: Card[];
  initialScroll?: number;
}

type Card = {
  value: number;
  description: string;
  icon: React.ReactNode;
  image: string;
  name:string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const CardCrousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div 
        
        className="relative bg-background"
      >
        <div
          className="flex overflow-x-scroll overscroll-x-auto py-5 md:py-10 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]"
              >
                <Card card={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10 ">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const duration = 2000;
    const increment = endValue / (duration / 100);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(counter);
        setCount(endValue);
      } else {
        setCount(Math.floor(start));
      }
    }, 100);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}</span>;
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={index}
      layoutId={layout ? `card-${card.description}` : undefined}
      className={`bg-transparent border-[0.5px] border-gray-100 h-80 w-56 md:h-[17vw] md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-300 ${hovered ? 'opacity-100 scale-105' : 'opacity-0 bg-black/50'}`} style={{ backgroundImage: `url(${card.image})` }}></div>


      <motion.div className="flex flex-col items-center  z-20 h-full w-full relative">
        <motion.div className="flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" 
        animate={{ opacity: hovered ? 0 : 1 }}>
        {card.icon}
        <motion.div
          className="text-white text-xl md:text-3xl font-semibold max-w-xs text-center mt-2"
          animate={{ opacity: hovered ? 0 : 1 }}
        >
          <CountUp end={card.value} />+
          <div className="text-white text-2xl font-medium font-sans">{card.name}</div>
        </motion.div>
        </motion.div>
     
        
        <motion.div
          className=" flex text-white text-sm md:text-base font-light font-mono bg-black/35  w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8"
          animate={{ opacity: hovered ? 1 : 0 }}
        >
          {card.description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};