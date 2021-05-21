import ContactCard from './ContactCard/ContactCard';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './styles.scss';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <section className="contact__section" id="contact">
      <h1 className="header">Contact</h1>
      <div className="cards">
        <ContactCard icon={<PhoneIcon color="primary" />} text={'5527239028'} />
        <ContactCard
          icon={<MailIcon color="primary" />}
          text={'ivann_mg@hotmail.com'}
        />
        <ContactCard
          icon={<LocationOnIcon color="primary" />}
          text={'Ciudad de México'}
        />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
