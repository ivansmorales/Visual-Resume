import React from 'react';
import { AboutContent } from '../../content/About/AboutContent';
import VerticalCarousel from '../Home/VerticalCarousel/VerticalCarousel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aperiam
          earum delectus placeat iste, adipisci voluptatibus debitis repellendus
          neque! Dicta modi, dignissimos hic velit repellendus temporibus
          aliquid perferendis est officia.
        </p>
        <div className="my-info">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead></TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Edad</TableCell>
                  <TableCell align="right">{props.data.age}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Teléfono</TableCell>
                  <TableCell align="right">{props.data.phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Linkedin</TableCell>
                  <TableCell align="right">{props.data.linkedin}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
