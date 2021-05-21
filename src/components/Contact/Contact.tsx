import ContactCard from './ContactCard/ContactCard';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactForm from './ContactForm/ContactForm';
import './styles.scss';
import { ContactContent } from '../../content/Contact/ContactContent';

interface ContactProps {
  data: typeof ContactContent;
}

const Contact = (props: ContactProps) => {
  return (
    <section className="contact__section" id="contact">
      <h1 className="header">Contáctame</h1>
      <div className="cards">
        {props.data.phone && (
          <ContactCard
            icon={<PhoneIcon color="primary" />}
            text={props.data.phone}
          />
        )}
        <ContactCard
          icon={<MailIcon color="primary" />}
          text={props.data.email}
        />
        {props.data.location && (
          <ContactCard
            icon={<LocationOnIcon color="primary" />}
            text={props.data.location}
          />
        )}
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
