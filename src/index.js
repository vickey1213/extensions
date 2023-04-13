import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  const openLinkedIn = () => {
    const nameElem = document.querySelector(".pv-top-card-section__name");
    const emailElem = document.querySelector(
      ".pv-contact-info__contact-type.ci-email .pv-contact-info__contact-link"
    );
    const bioElem = document.querySelector(
      ".pv-about-section .pv-about__summary-text"
    );

    if (nameElem && emailElem && bioElem) {
      const name = nameElem.innerText;
      const email = emailElem.innerText;
      const bio = bioElem.innerText;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("bio", bio);

      alert("Information collected successfully!");
    } else {
      console.error("One or more required elements not found.");
    }
  };

  // Add an event listener to the window object that listens for the load event
  // and then runs the openLinkedIn function.
  window.addEventListener("load", openLinkedIn);

  return (
    <div>
      <button>Open LinkedIn</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
