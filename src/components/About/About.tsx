import React from 'react';
import { AboutContent } from '../../content/About/AboutContent';
import VerticalCarousel from '../Home/VerticalCarousel/VerticalCarousel';

import './styles.scss';

interface AboutProps {
  data: typeof AboutContent;
}

const About = (props: AboutProps) => {
  return (
    <section className="about__section" id="about">
      <h1>
        Sobre <span>mí</span>
      </h1>
      <div className="welcome">
        Hola! Soy {props.data.homeData.name} y
        <VerticalCarousel words={props.data.homeData.titles} />
      </div>
      <p>{props.data.paragraph}</p>
    </section>
  );
};

export default About;
