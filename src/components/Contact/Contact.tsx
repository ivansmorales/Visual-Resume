import emailjs from 'emailjs-com';
import ContactCard from './ContactCard/ContactCard';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './styles.scss';

const Contact = () => {
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
    <section className="contact__section" id="contact">
      <div className="container">
        <h1>Contact</h1>
      </div>
      <div className="cards">
        <ContactCard icon={<PhoneIcon />} text={'5527239028'} />
        <ContactCard icon={<MailIcon />} text={'ivann_mg@hotmail.com'} />
        <ContactCard icon={<LocationOnIcon />} text={'Ciudad de México'} />
      </div>
      <h2>¿Te gustaría tener este resume?</h2>
      <h3>¡Escribe tu correo y te mandaré información sobre el costo!</h3>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Email</label>
        <input type="email" name="email" />
        <input type="submit" value="Send" />
      </form>{' '}
    </section>
  );
};

export default Contact;
