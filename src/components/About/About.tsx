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
      <div className="container">
        <h1>
          Sobre <span>mí</span>
        </h1>
        <div className="description">
          <h4>Hola! Soy {props.data.homeData.name} y soy&nbsp;</h4>
          <VerticalCarousel words={props.data.homeData.titles} />
        </div>
        <p>{props.data.paragraph}</p>
      </div>
    </section>
  );
};

export default About;
