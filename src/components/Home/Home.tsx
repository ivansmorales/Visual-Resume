import Grid from '@material-ui/core/Grid';

import './styles.scss';

const Home = () => {
  return (
    <div className="home__section" id="home">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>
              Vanessa <span>Guerrero</span>
            </h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
