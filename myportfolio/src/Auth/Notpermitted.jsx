import { Link } from "react-router-dom";
import "../styles/Notpermitted.css"
import { MdArrowForward, MdFace2 } from "react-icons/md";
import { FaSadCry } from "react-icons/fa";
export const Notpermitted = () => {
  return (
    <div className="notpermitted">
      <FaSadCry className="cry-icon" size={"50px"}/>
      <h1>Not permitted</h1>
      <section className="login-link">
        <Link to="/login">Go to Login <MdArrowForward/></Link>
      </section>
    </div>
  );
};
