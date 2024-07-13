import { Link } from "react-router-dom";
import Navbar_ath from "./Navbar_ath";

const Header_ath = () => {
  return (
    <>
      <Navbar_ath/>
      <p className="text-right mr-10 font-bold">
        <Link to={"/athlete"}>Back</Link>
      </p>
      <div className="mt-1 ml-10 mr-10">
        <div className="text-white bg-teal-700 pl-10 pr-10 pt-14 pb-14 flex flex-col justify-center items-center rounded-md">
          <p
            className="font-bold font-serif
           text-3xl"
          >
            ABC TOURNAMENT
          </p>
          <p className="font-serif font-semibold text-xl">30.01.2024</p>
          <p className="font-serif font-semibold text-xl">venue</p>
        </div>
      </div>
    </>
  );
};
export default Header_ath;