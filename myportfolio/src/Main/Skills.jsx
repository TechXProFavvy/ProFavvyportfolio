import "../styles/Skill.css";
import { MdCss, MdHtml, MdOutlineHtml } from "react-icons/md";
import {
  FaCss3,
  FaFileExcel,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
export const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-section">
        <section>
          <summary>
            <FaHtml5 />
          </summary>
          <p>
            <span>HTML:</span>Craft semantic,accessible and structured web
            foundations to ensure standard complaint document architecture and
            seemless browser compatibility
          </p>
        </section>
        <section>
          <summary>
            <FaCss3 />
          </summary>
          <p>
            <span>CSS:</span>Styles Responsive,visually engaging user interfaces
            utilizing modern layout methodologies like flexbox and Grid,paired
            with fluid animations and media queries.
          </p>
        </section>

        <section>
          <summary>
            <FaJs />
          </summary>
          <p>
            <span>JavaScript:</span>Implementing dynamic web functionality and
            asynchronous client-side logic using modern ES6+ paradigms,Event
            handling and DOM manipulation.
          </p>
        </section>

        <section>
          <summary>
            <FaReact />
          </summary>
          <p>
            <span>React:</span>Build scalable,High performance single-Page
            Applications (SPAs) by managing state efficiently and enginering
            reusable,component-driven architecture.
          </p>
        </section>
        <section>
          <summary>
            <FaNode />
          </summary>
          <p>
            <span>Nodejs:</span>Engineer fast,scalable server-side environments
            utilizing an event-driven non-blocking I/O model to power efficient
            backend flow.
          </p>
        </section>

        <section>
          <summary>
            <FaNodeJs />
          </summary>
          <p>
            <span>ExpressJs:</span>Design robust RESTful APIs and middleware
            architectures to facilitate seemless routing and clean data flow
            between server and client applications.
          </p>
        </section>
        <section>
          <summary>
            <FaFileExcel />
          </summary>
          <p>
            <span>Excel:</span>Perform advance data modeling,complex formular
            execution,andn macro automation to clean datasets,build financial
            models and generate business insights.
          </p>
        </section>

        <section>
          <summary>
            <FaPython />
          </summary>
          <p>
            <span>Python for Analysis:</span>Conduct end-end data pipelines
            using libraries like Pandas,Numpy,and Matplotlib to
            extract,Manipulate,and visualize complex datasets for actionable
            analysis.
          </p>
        </section>
        <section>
          <summary>
            <FaGitAlt />
          </summary>
          <p>
            <span>Basic Git:</span>For staging,commiting and pushing files
            efficiently to GitHub.
          </p>
        </section>
      </div>
    </div>
  );
};
