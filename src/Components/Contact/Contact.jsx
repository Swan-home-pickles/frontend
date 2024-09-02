import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.css";
import { MdTimer } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phonenum, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    Phonenum: "",
    subject: "",
    message: "",
  });

  const validateFields = () => {
    const newErrors = {
      name: "",
      email: "",
      Phonenum: "",
      subject: "",
      message: "",
    };

    if (!name) newErrors.name = "Please fill in your name.";
    if (!email) newErrors.email = "Please fill in your email.";
    if (!Phonenum) newErrors.Phonenum = "Please fill in your phone number.";
    if (!subject) newErrors.subject = "Please fill in the subject.";
    if (!message) newErrors.message = "Please fill in your message.";

    setErrors(newErrors);

    // Check if any errors exist
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return; // Stop the form submission if there are validation errors
    }

    try {
      const response = await fetch("http://localhost:8080/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          Phonenum,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (data.whatsapp_url) {
        window.location.href = data.whatsapp_url; // Redirect to WhatsApp
      }
    } catch (error) {
      console.log("Please submit your answer", error);
    }
  };
  return (
    <>
      <div>
        <div className="contact-head">
          <h4>Contact us</h4>
        </div>
        <div className="locatcards">
          <div className="loc-card">
            <FaLocationDot id="loc-icon" />
            <address>
              <h5> Administrative Office </h5>
              <h6>Vijayawada </h6>
              Lotus land mark,
              <br />2 town Kaleswara market,
              <br /> AP 520003 ,+91 –9705050055
            </address>
          </div>
          <div className="loc-card">
            <FaLocationDot id="loc-icon" />
            <address>
              <h5>Administrative Office</h5>
              <h6>Hyderabad </h6>Madhura Nagar <br />
              Phase 1 Hyderabad, <br />
              TS 500038 ,+91 –9705050055
            </address>
          </div>
          <div className="loc-card">
            <MdTimer id="loc-icon" />
            <address>
              <h5> Opening Hours</h5>
              Online Ordering : 24×7
              <br />
              Customer Support : 24 hrs
              <br /> (Except 10:00 PM to 6:00 AM)
              <br /> Sunday is a Holiday
            </address>
          </div>
        </div>
        <div className="contact-map">
          <div className="cont-details">
            <h4>Have a Question?</h4>
            <h5>Your email address will not be published.</h5>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder=" Name"
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <input
                  type="text"
                  id="phoneNum"
                  value={Phonenum}
                  placeholder=" Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.Phonenum && (
                  <span className="error">{errors.Phonenum}</span>
                )}

                <input
                  type="text"
                  id="subject"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && (
                  <span className="error">{errors.subject}</span>
                )}

                <textarea
                  name="textarea"
                  id="textarea"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="con-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.820669766232!2d80.63470998295634!3d16.521928725518205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5578d74f1a5%3A0x4aebd27bd8c53cf!2s23-26-16A%2C%20Sumanamvari%20St%2C%20Lakshmi%20Nagar%2C%20Satyaranayana%20Puram%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520011!5e1!3m2!1sen!2sin!4v1724340665794!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
