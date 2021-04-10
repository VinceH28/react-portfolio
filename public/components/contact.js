import React from "react";
import ContactImage from "../../images/Contact.png"
import { createGlobalStyle } from 'styled-components';

let contactExtra = [
  {
    alt: "Let's Connect Image",
    src: ContactImage,
  },
]

function ContactAdditional(){
    return(
      <div
      className="contact card col shadow-lg p-3 mb-5 bg-white rounded alert"
      id="contact"
    >
      <div className="card-content">
        <h4> Contact </h4>
        <hr />
        <a
          href="https://github.com/VinceH28"
          rel="noreferrer"
          target="_blank"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="tel: Available Upone Request">
          <ion-icon name="display-text"></ion-icon>
        </a>
        <a href="mailto:jvincehartdev@gmail.com">VinceHartdev@gmail.com</a>
      </div>
    </div>
    )
}
export default ContactAdditional;