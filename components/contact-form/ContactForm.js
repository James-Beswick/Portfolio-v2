import useContactForm from '../../hooks/use-contact-form';

import classes from './ContactForm.module.css';

const validateEmail = enteredEmail => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(enteredEmail);
};

const validatePhoneNumber = enteredPhoneNumber => {
  // eslint-disable-next-line
  const re = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  return re.test(enteredPhoneNumber);
};

const ContactForm = props => {
  const {
    enteredValue: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: firstNameReset,
  } = useContactForm(val => val.trim() !== '');

  const {
    enteredValue: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useContactForm(val => val.trim() !== '');

  const {
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useContactForm(val => validateEmail(val));

  const {
    enteredValue: enteredPhoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueBlurHandler: phoneNumberBlurHandler,
    valueChangeHandler: phoneNumberChangeHandler,
    reset: phoneNumberReset,
  } = useContactForm(val => validatePhoneNumber(val));

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneNumberIsValid
  ) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : classes['form-control'];

  const lastNameClasses = lastNameHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : classes['form-control'];

  const emailClasses = emailHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : classes['form-control'];

  const phoneNumberClasses = phoneNumberHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : classes['form-control'];

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.enteredDetails({
      id: Math.random(),
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phoneNumber: enteredPhoneNumber,
    });

    firstNameReset();
    lastNameReset();
    emailReset();
    phoneNumberReset();
  };

  const cancelFormHandler = () => {
    firstNameReset();
    lastNameReset();
    emailReset();
    phoneNumberReset();
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={firstNameClasses}>
        <label>First Name</label>
        <input
          type="text"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameHasError && (
          <p className={classes.errorText}>Please enter a valid first name.</p>
        )}
      </div>
      <div className={lastNameClasses}>
        <label>Last Name</label>
        <input
          type="text"
          value={enteredLastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameHasError && (
          <p className={classes.errorText}>Please enter a valid last name.</p>
        )}
      </div>
      <div className={emailClasses}>
        <label>Email</label>
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={classes.errorText}>Please enter a valid email.</p>
        )}
      </div>
      <div className={phoneNumberClasses}>
        <label>Phone Number</label>
        <input
          type="text"
          value={enteredPhoneNumber}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
        />
        {phoneNumberHasError && (
          <p className={classes.errorText}>
            Please enter a valid phone number.
          </p>
        )}
      </div>
      <div className={classes['form-actions']}>
        <button type="button" onClick={cancelFormHandler}>
          Clear
        </button>
        <button
          className={classes.submit}
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
