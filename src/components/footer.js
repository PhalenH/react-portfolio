import React from "react";

export default function Footer() {
  return (
    <section id="contact">
      <div class="nav-container">
        <a href="https://github.com/PhalenH" target="_blank">
          <div class="icon-text-container">
            <i class="bi bi-github"></i>
            <p id="icon-text">Github</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/phalen-hazel/" target="_blank">
          <div class="icon-text-container">
            <i class="bi bi-linkedin"></i>
            <p id="icon-text">LinkedIn</p>
          </div>
        </a>
      </div>
      <h3 class="contact-me">
        Please reach out if you have any questions or interested in working
        together! <br />
        <br />
        <a href="mailto:pchaze@yahoo.com?subject=Portfolio" id="email-me">
          Email Me Here
        </a>
      </h3>
    </section>
  );
}
