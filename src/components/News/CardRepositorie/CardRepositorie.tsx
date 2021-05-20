import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

interface CardRepositorieProps {
  name: string;
  url: string;
  created_at: string;
  updated_at: string;
}

const CardRepositorie = (props: CardRepositorieProps) => {
  console.log(props.name);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.url}
          </Typography>
          <Typography variant="caption" gutterBottom>
            Fecha de creación:
            {' ' + new Date(props.created_at).toDateString()}
          </Typography>{' '}
          <br />
          <Typography variant="caption" gutterBottom>
            Fecha de actualización:
            {' ' + new Date(props.updated_at).toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardRepositorie;
