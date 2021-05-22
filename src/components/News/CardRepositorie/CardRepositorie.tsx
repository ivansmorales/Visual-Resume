import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

interface CardRepositorieProps {
  name: string;
  url: string;
  created_at?: string;
  updated_at?: string;
  num?: string;
}

const CardRepositorie = (props: CardRepositorieProps) => {
  return (
    <div>
      <Card>
        <CardContent>
          <h5>{props.name}</h5>
          <h6>Url: {props.url}</h6>
          <Typography variant="subtitle2" gutterBottom></Typography>
          {props.created_at && (
            <Typography variant="caption" gutterBottom>
              Fecha de creación:
              {' ' + new Date(props.created_at).toDateString()} <br />
            </Typography>
          )}

          {props.updated_at && (
            <Typography variant="caption" gutterBottom>
              Fecha de actualización:
              {' ' + new Date(props.updated_at).toDateString()}
            </Typography>
          )}

          {props.num && (
            <Typography variant="caption" gutterBottom>
              Número de commits:
              {' ' + props.num}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardRepositorie;
