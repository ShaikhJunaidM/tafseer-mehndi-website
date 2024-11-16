import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_jocd0ec";
    const templateId = "template_i6gqoz4";
    const publicKey = "qa37ZzYmv3MaOsQjV";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tafseer Mehndi Artist",
      message: message,
    };

    const showCustomAlert = (message) => {
      // Set the alert message dynamically
      document.getElementById("alertMessage").innerText = message;

      // Display the custom alert
      document.getElementById("customAlert").style.display = "flex";

      // Close the alert when the user clicks the "OK" button
      document.getElementById("closeAlertBtn").onclick = () => {
        document.getElementById("customAlert").style.display = "none";
      };
    };

    if (!name || !email || !message) {
      showCustomAlert(
        "Please ensure to fill all the fields before sending the email."
      );
    } else {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((res) => {
          console.log("Email sent successfully", res);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.log("Error sending email", err);
        });
    }
  };

  return (
    <>
      <div className="container ">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="contact-heading">Get in touch</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              cols={30}
              rows={10}
              placeholder="Please feel free to reach out , if you'd like to discuss any thing related to work or just want to share your experience"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Send Email</button>
          </form>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.68691388439768!2d72.91841165882076!3d19.064149927713608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c615bcba8757%3A0xde15f097e1a20d01!2sSHREEPAL%20MEDICAL%20AND%20GENERAL%20STORES!5e0!3m2!1sen!2sin!4v1731572705378!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* custom alert */}
      <div id="customAlert" className="custom-alert">
        <div className="alert-content">
          <p id="alertMessage"></p>
          <button id="closeAlertBtn">OK</button>
        </div>
      </div>
    </>
  );
};
