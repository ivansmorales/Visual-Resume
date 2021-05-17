import Grid from '@material-ui/core/Grid';
import VerticalCarousel from './VerticalCarousel/VerticalCarousel';
import React from 'react';
import './styles.scss';

const Home = () => {
  return (
    <div className="home__section" id="home">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <img alt="Programmer" src={'/images/programmer.jpg'} />
            <h2>
              Iván <span>Morales</span>
            </h2>
            <VerticalCarousel />
            <button>Descarga mi CV</button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
