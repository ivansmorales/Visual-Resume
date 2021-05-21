import './styles.scss';
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress';

const Resume = () => {
  return (
    <section className="resume__section" id="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="experience">
          <div className="section">
            <h4>Sep 2020 - Actualidad </h4>
            <h4>Desarrollador de Front-End (Pasante)</h4>
            <h4>
              <span>@Atomic Labs</span>
            </h4>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Consectetur adipisicing elit.</li>
              <li>Ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div className="section">
            <h4>May 2021 - Actualidad </h4>
            <h4>Project Manager </h4>
            <h4>
              <span>@INOWU Dev</span>
            </h4>
            <ul>
              <li>Consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        <div className="button_container">
          <a href={'../../../docs/resume.pdf'}>
            <button>Descargar CV</button>
          </a>
        </div>
        <div className="tools">
          <h3>Habilidades y Herramientas</h3>
          <div className="item">
            HTML & CSS
            <LinearProgress variant="determinate" value={85} />
          </div>
          <div className="item">
            React
            <LinearProgress variant="determinate" value={70} />
          </div>
          <div className="item">
            JavaScript
            <LinearProgress variant="determinate" value={80} />
          </div>
          <div className="item">
            Git
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
