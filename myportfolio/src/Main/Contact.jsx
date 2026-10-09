import { FaBlackTie, FaEnvelope, FaFacebook, FaPaperPlane, FaPhoneAlt, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
export const Contact = () => {
  return (
    <div className="contact">
        <div className="form">
      <form>
        <section><h1>Send a message</h1></section>
        <section>
          <input type="date" name="date"  placeholder="Date"/>
        </section>
        <section>
          <input type="text" name="Contactor"  placeholder="Enter your name"/>
        </section>
        <section>
          <input type="email" name="Email"  placeholder="email@example.com"/>
        </section>
        <section>
          <input type="tel" name="phone" placeholder="Enter you phone Number"/>
        </section>
        <section>
          <textarea name="message" id="message" placeholder="Enter text here..."></textarea>
        </section>
        <section><button>Send <FaPaperPlane/></button></section>
      </form>
      </div>
    </div>
  );
};
