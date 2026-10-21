import "../styles/AppHome.css";
import { Link } from "react-router-dom";
import myphoto from "../assets/myphoto.jpeg";
import Nobgmyphoto from "../assets/nobgmyphoto.png";
import {
  MdFacebook,
  MdInstallDesktop,
  MdLiveTv,
  MdMessage,
  MdWhatsapp,
  MdYoutubeSearchedFor,
} from "react-icons/md";


export const Home = () => {




  return (
    <main className="home">
      
        <section className="heading">
          <h1>PROGRAMMER FAVOUR</h1>
          <section className="intro-text">
            <p>Hi,i am Lenu Favour,</p>
            <p>A web Developer and a Data Analyst.</p>
            <p>
              I build Responsive digital experiences and use data insights to
              help business grow.
            </p>
          </section>

          <section className="intro-text brief">
            <h2> Brief About</h2>
            <p>
              I am Web Developer who builds sleek digital products, a Data
              Analyst who turns numbers into clear stories, and a Musician who
              finds harmony in both logic and art.
            </p>
          </section>
          <section className="intro-text icons">
            <h2>Contact Me</h2>
            <div className="social-icons">
              <span title="facebook">
                <a href="https://www.facebook.com/profile.php?id=61589519475662" target="_blank" 
        rel="noopener noreferrer">
                
                <MdFacebook className="social" size={"30px"} />
                </a>
              </span>
              <span title="Whatsapp">
                <a href="https://wa.me/+2349068241479"  target="_blank" 
        rel="noopener noreferrer">
                <MdWhatsapp className="social" size={"30px"} />
                </a>
              </span>
              <span title="Youtube">
                <a href="www.youtube.com/@Favourlenu" target="_blank" 
        rel="noopener noreferrer"> 
                <MdLiveTv className="social" size={"30px"} />
                </a>
              </span>
              <span title="message me">
                <Link to="/contact">
                  <MdMessage className="social" size={"27px"} />
                </Link>
              </span>
            </div>
          </section>
        </section>

        <section className="image">
          <div className="circle"></div>
          <div className="profile">
            <img src={Nobgmyphoto} alt="my image" />
          </div>
        </section>
     
    </main>
  );
};
