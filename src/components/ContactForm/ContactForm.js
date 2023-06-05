import React, { useState } from "react";
import "./ContactForm.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reportData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    emailjs
      .send(
        "service_30vlew1",
        "template_0dhie28",
        reportData,
        "zpSHvjTBMVSz2KXGr"
      )
      .then(
        (response) => {
          // Display success message
          Swal.fire("Success!", "Your message has been sent.", "success");

          // Clear form inputs
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
        },
        (error) => {
          // Display error message
          Swal.fire("Error!", "Failed to send message.", "error");

          console.log(error);
        }
      );
  };

  return (
    <div className="contact-wrap-container">
      <div className="container">
        <div className="contacct-info-wrapper">
          <div className="contact-info-container">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <FaWhatsapp
                  style={{
                    fontSize: "40px",
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                />{" "}
                +96176485271
              </li>
              <li>
                <FaInstagram
                  style={{
                    fontSize: "40px",
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                />{" "}
                @jana_tartousy
              </li>
              <li>
                <FaFacebook
                  style={{
                    fontSize: "40px",
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                />{" "}
                Jana Tartousy
              </li>
              <li>
                <MdEmail
                  style={{
                    fontSize: "40px",
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                />{" "}
                tartousyjana@gmail.com
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="contact-form-wrapper">
          <div className="contact-form-container">
            <h2>Any questions or remarks? Just write us a Message!</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
