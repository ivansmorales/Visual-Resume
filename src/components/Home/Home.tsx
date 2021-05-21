import Grid from '@material-ui/core/Grid';
import VerticalCarousel from './VerticalCarousel/VerticalCarousel';
import React from 'react';
import './styles.scss';
import { HomeContent } from '../../content/Home/HomeContent';

interface HomeProps {
  data: typeof HomeContent;
}

const Home = (props: HomeProps) => {
  return (
    <section className="home__section" id="home">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <img alt="Programmer" src={'/images/programmer.jpg'} />
            <h1>
              Iván <span>Morales</span>
            </h1>
            <VerticalCarousel words={props.data.titles} />
            <div className="button_container">
              <button>Descarga mi CV</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Home;
