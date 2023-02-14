import React, { useState } from 'react';
import Formstyle from './formstyle.css';

// Import a helper function that will check if the email is valid

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [myname, setMyname] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change via destructuring the event (html object)
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, myname, and message

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setMyname(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }

  };

const handleFormBlur = (event) => {
    const { target } = event;
    if (target.value == "") {
      setErrorMessage(
        `${target.name} is required!`
      );
      return;
    }
}

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

// First we check to see if the email is not valid or if my name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !myname) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is long enough. If so, we set an error message regarding the password.
    }
    if (message.length < 2) {
      setErrorMessage(
        `Your message must have at least 2 characters.`
      );
      return;
    }

    // If successful, we want to clear out the input after submission.
    setMyname('');
    setMessage('');
    setEmail('');
    alert(`${myname}, your message has been submitted!`);
  };

  return (
    <div className="reactab">
      <h2>Contact Form</h2><hr/>      <form className="form">
        <input
          value={myname}
          name="name"
          onChange={handleInputChange}
          onBlur={handleFormBlur}
          type="name"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleFormBlur}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleFormBlur}
          type="text"
          placeholder="message"
        />
        <br/><br/>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
