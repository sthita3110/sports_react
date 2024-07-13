import "./left.css";
import { Link } from "react-router-dom";
const LeftColumn = () => {
  return (
    <>
      <div className="left-column-coach flex flex-col justify-around">
        <div>
          <button className="btn-left-coach btn-register">
            <Link to={"/coach/tournament/register"}>Register Here</Link>
          </button>
          <button className="btn-left-coach">View Participant List</button>
        </div>
        <div className="details-coach">
          <p className="font-bold font-serif text-xl mb-3">Details</p>
          <hr></hr>
          <p className="mb-3">
            Registration deadline: Sat 10 February 2024 11.59 pm IST
          </p>
          <hr></hr>
          <p>
            Entry fees: <br />
            First category: ₹1,000 <br />
            Additional categories: ₹1,000 each
          </p>
          <hr></hr>
        </div>
        <div className="details-coach">
          <p className="font-bold font-serif text-xl">Hosted by: </p>
          <p>SENSEI MAHESH BABU</p>
          <p>Martial Arts Organisation</p>
          <p>baludojo@gmail.com</p>
          <p> 8142541065</p>
        </div>
      </div>
    </>
  );
};
export default LeftColumn;
