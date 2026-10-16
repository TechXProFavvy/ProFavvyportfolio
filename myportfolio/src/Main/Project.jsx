import { useContext } from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
import { ProtectedRoute } from "../Auth/SecretRoute";
export const Project = () => {
  const {user} = useContext(ProtectedRoute);
  return (
    <div className="project">
      <section className="card">
        <h1>Name:NgsClassof2015 School Demo Portal</h1>
        <h3>
          Link:{" "}
          <Link to="https://greatachievers-ngs-classof2015.netlify.app">
            Website
          </Link>
        </h3>
      </section>
      <section className="card">
        <h1>Name:My Portfolio</h1>
        <h3>Link: Current</h3>
      </section>
      <section className="card">
        <h1>Name:Music Booking Website</h1>
        <h3>Link: Unavailable</h3>
      </section>
      <section className="card">
        <h1>Name:Music Booking Website</h1>
        <h3>{user}</h3>
      </section>
    </div>
  );
};
