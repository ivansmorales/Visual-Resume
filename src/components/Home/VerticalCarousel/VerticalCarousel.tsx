import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const VerticalCarousel = () => {
  let data = ['Ingeniero', 'Estudiante', 'Desarrollador web'];

  return (
    <div>
      <Carousel
        autoPlay={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={false}
        interval={5000}
        axis="vertical"
      >
        {data.map((word, index) => (
          <span key={index}>
            <b>{word}</b>
          </span>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;
