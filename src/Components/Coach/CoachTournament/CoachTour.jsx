import Header from "./Header";
import Footer from "../../Footer/Footer";
import LeftColumn from "./LeftColumn/LeftColumn";
import RightColumn from "./RightColumn/RightColumn";
import "./main.css";
const Tournament = () => {
  return (
    <>
      <Header />
      <div className="two-column-layout">
        <LeftColumn />
        <RightColumn />
      </div>
      <Footer />
    </>
  );
};
export default Tournament;
