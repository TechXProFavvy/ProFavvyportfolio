import { FaArrowsSpin, FaSpinner } from "react-icons/fa6";
import "./Spinnerpage.css"
import { MdLocalDining, MdPushPin } from "react-icons/md";
export const Loading = () => {
  return (
    <div className="spinnerPage">
      
      <FaSpinner size={"50px"} className="rotate"/>
      <div className="loader">Loadinig...</div>
    </div>
  );
};
