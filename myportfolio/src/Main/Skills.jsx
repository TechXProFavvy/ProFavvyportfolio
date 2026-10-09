import "../styles/Skill.css";
import { MdCss, MdHtml, MdOutlineHtml } from "react-icons/md";
import { FaCss3, FaHtml5 } from "react-icons/fa";
export const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-section">
        <details>
          <summary>
            <FaHtml5 />
          </summary>
          <p>
            <span>HTML:</span>Craft semantic,accessible and structured web
            foundations to ensure standard complaint document architecture and
            seemless browser compatibility
          </p>
        </details>
        <details>
          <summary>
            <FaCss3 />
          </summary>
          <p>
            <span>CSS:</span>Styles Responsive,visually engaging user interfaces
            utilizing modern layout methodologies like flexbox and Grid,paired
            with fluid animations and media queries.
          </p>
        </details>
      </div>
    </div>
  );
};
