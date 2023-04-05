import { FC, useState } from "react";
import Slider from "react-slick";
import { FoxCard } from "../FoxCard/FoxCard";

import { cardFoxData } from "../../FoxCardData";
import "../FoxCard/FoxCard.css";

export const FoxCarousel: FC<{ isFoxCardsActive: boolean }> = ({
  isFoxCardsActive,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const cards = cardFoxData.map((cardFox, index) => {
    return index === activeCardIndex ? (
      <FoxCard
        key={index}
        cardFox={cardFox}
        index={index}
        isActive={true}
        isFoxCardsActive={isFoxCardsActive}
      />
    ) : (
      <FoxCard
        key={index}
        cardFox={cardFox}
        index={index}
        isActive={false}
        isFoxCardsActive={isFoxCardsActive}
      />
    );
  });

  let settings = {
    className: "center",
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    beforeChange: (current: number, next: number) => setActiveCardIndex(next),
  };

  return (
    <div className="sceneCarousel">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            className={
              index === activeCardIndex ? "carouselCard active" : "carouselCard"
            }
            key={index}
          >
            {card}
          </div>
        ))}
      </Slider>
    </div>
  );
};
