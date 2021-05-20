import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

interface ContactCardProps {
  icon: any;
  text: string;
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <div className="custom__card">
      <Card>
        <CardContent>
          {props.icon}
          <Typography color="textSecondary" gutterBottom>
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCard;
