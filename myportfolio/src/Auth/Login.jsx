import { useContext, useState } from "react";
import "../styles/Login.css";
import { FaArrowAltCircleRight, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdPassword } from "react-icons/md";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./SecretRoute";

export const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(ProtectedRoute);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [logger, setLogger] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUser = (e) => {
    e.preventDefault();

    if (
      userDetails.username !== "favour" ||
      userDetails.password !== "13254685"
    )
      return toast.error("invalid credential");
    toast.success("Successfully Logged in");
    setUser("favour");
    navigate("/notification");
  };
  return (
    <div className="login-form">
      <form className="login-field">
        <h1>Welcome!</h1>
        <section className="form-field">
          <div className="input">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              maxLength={6}
              value={userDetails.username}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your key"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
          <section className="input">
            <button onClick={handleUser}>
              login <FaArrowAltCircleRight />
            </button>
          </section>
        </section>
      </form>
    </div>
  );
};
