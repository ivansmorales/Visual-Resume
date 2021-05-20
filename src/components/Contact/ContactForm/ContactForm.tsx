import React from 'react';
import emailjs from 'emailjs-com';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ContactForm = () => {
  function sendEmail(e: any) {
    let service: string = String(process.env.REACT_APP_SERVICE_ID);
    let template: string = String(process.env.REACT_APP_TEMPLATE_ID);
    let user: string = String(process.env.REACT_APP_USER_ID);

    e.preventDefault();
    emailjs.sendForm(service, template, e.target, user).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className="form__container">
      <Card>
        <CardContent>
          <h4>¿Te gustaría tener tu propio CV Digital?</h4>
          <h4>Déjame tu correo acá abajo </h4> <br />
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="email" name="email" /> <br />
            <button type="submit">¡Mandame la info!</button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
