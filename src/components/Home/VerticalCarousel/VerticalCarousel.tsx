import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface VerticalCarouselProps {
  words: string[];
}

const VerticalCarousel = (props: VerticalCarouselProps) => {
  return (
    <div className="vertical__carousel">
      <Carousel
        autoPlay={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={false}
        interval={3000}
        axis="vertical"
      >
        {props.words.map((word, index) => (
          <span key={index}>
            <b>{word}</b>
          </span>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;
