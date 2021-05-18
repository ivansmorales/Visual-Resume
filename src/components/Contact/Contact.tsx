import emailjs from 'emailjs-com';
import './styles.scss';

const Contact = () => {
  function sendEmail(e: any) {
    let service: string = String(process.env.SERVICE_ID);
    let template: string = String(process.env.TEMPLATE_ID);
    let user: string = String(process.env.USER_ID);

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
      <h1>Contact</h1>
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
