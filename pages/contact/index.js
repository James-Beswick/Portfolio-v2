import ContactForm from '../../components/contact-form/ContactForm';
import classes from './index.module.css';

const ContactPage = () => {
  const postEnteredDetailsHandler = async enteredDetails => {
    try {
      const res = await fetch(
        'https://portfolio-contact-1c027-default-rtdb.europe-west1.firebasedatabase.app/contacts.json',
        {
          method: 'POST',
          body: JSON.stringify(enteredDetails),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!res.ok) {
        throw new Error('POST request failed.');
      }

      alert('Thanks for getting in touch!');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={classes.fragment}>
      <div className={classes.title}>
        <h1>Contact Form</h1>
      </div>
      <p className={classes.pTag}>
        If you would like to get in contact with me, please fill out the form
        below and I will respond ASAP. Otherwise, you can get in touch via
        LinkedIn, the link to which can be found on the navbar.
      </p>
      <div className={classes.contactForm}>
        <ContactForm enteredDetails={postEnteredDetailsHandler} />
      </div>
    </div>
  );
};

ContactPage.layout = 'L1';

export default ContactPage;
