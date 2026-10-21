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
import { toast } from "react-toastify";
export const Contact = () => {
  const [loading, setLoading] = useState(false);
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

  const postForm = async (e) => {
    e.preventDefault();
    toast.info("Coming Soon")
    // if (!formDetails.date_appoint || !formDetails.phone || !formDetails.email)
    //   return toast.error("Please complete the form");
    // try {
    //   let res = await fetch("http://localhost:7900/message", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formDetails),
    //   });

    //   if (!res.ok) return toast.error("Try again");

    //   toast.success("Message sent successfully!");
    //   let data = await res.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error(`Fetch Failed ${error}`);
    // }
  };

  return (
    <div className="contact">
      <div className="form">
        <form className="myContactForm">
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
            <button onClick={postForm}>
              Send <FaPaperPlane />
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
