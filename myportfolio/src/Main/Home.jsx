import "../styles/AppHome.css";
import myphoto from "../assets/myphoto.jpeg";
import Nobgmyphoto from "../assets/nobgmyphoto.png";
import {MdFacebook, MdInstallDesktop, MdLiveTv, MdWhatsapp, MdYoutubeSearchedFor} from "react-icons/md"
export const Home = () => {
  return (
    <main className="home">
      <section className="heading">
        <h1>PROGRAMMER FAVOUR</h1>
        <section className="intro-text">
          <p>Hi,i am Lenu Favour,</p>
          <p>A web Developer and a Data Analyst.</p>
          <p>
            I build Responsive digital experiences and use data insights to help
            business grow.
          </p>
        </section>
        
        <section className="intro-text brief">
          <h2> Brief About</h2>
          <p>
            I am Web Developer who builds sleek digital products, a Data Analyst
            who turns numbers into clear stories, and a Musician who finds
            harmony in both logic and art.
          </p>
        </section>
        <section className="intro-text icons">
          <h2>Contact Me</h2>
          <div className="social-icons">
          <span><MdFacebook className="social" size={"30px"}/></span>
          <span><MdWhatsapp className="social" size={"30px"}/></span>
          <span><MdLiveTv className="social" size={"30px"}/></span>
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
