import React, { useState } from "react";
import "../../styles/contact.css";

export default function Contact() {
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
      const isValid = validateEmail(inputValue);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
        setEmail(inputValue);
      }
    } else if (inputType === "name") {
      if (!inputValue.length) {
        setName(inputValue);
        setErrorMessage(`${inputType} is required.`);
      } else {
        setErrorMessage("");
        setName(inputValue);
      }
    } else if (inputType === "message") {
      if (!inputValue.length) {
        setMessage(inputValue);
        setErrorMessage(`${inputType} is required.`);
      } else {
        setErrorMessage("");
        setMessage(inputValue);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // clear out the input after a successful submission.
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-me-container">
      <h2>Contact Me</h2>
      <form className="form">
        <div className="input-container">
          <label htmlFor="nameInput">Name:</label>
          <br></br>
          <input
            id="nameInput"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your name"
          />
          <br></br>
        </div>
        <div className="input-container">
          <label htmlFor="emailInput">Email address:</label>
          <br></br>
          <input
            id="emailInput"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your email"
          />
          <br></br>
        </div>
        <div className="input-container">
          <label htmlFor="messageInput">Message:</label>
          <br></br>
          <textarea
            id="messageInput"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Say hello!"
          ></textarea>
          <br></br>
        </div>
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
