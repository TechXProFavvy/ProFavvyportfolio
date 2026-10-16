import {
  FaBlackTie,
  FaEnvelope,
  FaFacebook,
  FaPaperPlane,
  FaPhoneAlt,
  FaSeedling,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { useState } from "react";
export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    date_appoint: "",
    Contactor: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const cur_Year = new Date().getFullYear();
  const cur_Month = new Date().getMonth();
  const cur_Day = new Date().getDay();
  let combineDate = `${cur_Year}-0${cur_Month}-0${cur_Day}`;

  return (
    <div className="contact">
      <div className="form">
        <form>
          <section>
            <h1>Send a message</h1>
          </section>
          <section>
            <input
              type="date"
              name="date_appoint"
              placeholder="Date"
              value={formDetails.date_appoint}
              onChange={handleChange}
            />
          </section>
          <section>
            <input
              type="text"
              name="Contactor"
              placeholder="Enter your name"
              value={formDetails.Contactor}
              onChange={handleChange}
            />
          </section>
          <section>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formDetails.email}
              onChange={handleChange}
            />
          </section>
          <section>
            <input
              type="tel"
              name="phone"
              placeholder="Enter you phone Number"
              value={formDetails.phone}
              onChange={handleChange}
            />
          </section>
          <section>
            <textarea
              name="message"
              id="message"
              placeholder="Enter text here..."
              value={formDetails.message}
              onChange={handleChange}
            ></textarea>
          </section>
          <section>
            <button
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("Messages", JSON.stringify(formDetails));
              }}
            >
              Send <FaPaperPlane />
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
