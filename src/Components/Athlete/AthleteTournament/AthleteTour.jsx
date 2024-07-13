import Header_ath from "../Header_ath";
import Footer from "../../Footer/Footer";
import RightColumn from "../../Coach/CoachTournament/RightColumn/RightColumn";
import LeftColumn from "../../Coach/CoachTournament/LeftColumn/LeftColumn";
// import "./main.css";
import { Link } from "react-router-dom";
const AthleteTour = () => {
  return (
    <>
      <Header_ath></Header_ath>
      <div className="two-column-layout">
        <LeftColumn />
        <RightColumn />
      </div>
      <Footer />
      {/* <div className="mt-5 border w-20 rounded-lg bg-black">
                <Link to={"/athlete"} className="px-5 py-1 text-white">
                  Back
                </Link>
              </div> */}
    </>
  );
};
export default AthleteTour;