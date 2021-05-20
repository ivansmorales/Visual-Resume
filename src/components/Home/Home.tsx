import Grid from '@material-ui/core/Grid';
import VerticalCarousel from './VerticalCarousel/VerticalCarousel';
import React from 'react';
import './styles.scss';

const Home = () => {
  return (
    <section className="home__section" id="home">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <img alt="Programmer" src={'/images/programmer.jpg'} />
            <h2>
              Iván <span>Morales</span>
            </h2>
            <span>Soy &nbsp;</span>
            <VerticalCarousel />
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
