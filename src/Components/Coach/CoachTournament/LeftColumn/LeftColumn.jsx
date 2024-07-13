import "./left.css";
import { Link } from "react-router-dom";

const LeftColumn = () => {
  return (
    <>
      <div className="left-column-coach flex flex-col justify-around p-5 bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="mb-5">
          <button className="btn-left-coach btn-register bg-red-600 text-white font-bold py-2 px-4 rounded mb-3 hover:bg-red-700">
            <Link to={"/coach/tournament/register"} className="text-white">
              Register Here
            </Link>
          </button>
          <button className="btn-left-coach bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
            View Participant List
          </button>
        </div>
        <div className="details-coach bg-gray-700 p-4 rounded mb-5">
          <p className="font-bold font-serif text-xl mb-3">Details</p>
          <hr className="border-gray-500 mb-3" />
          <p className="mb-3">
            Registration deadline: Sat 10 February 2024 11.59 pm IST
          </p>
          <hr className="border-gray-500 mb-3" />
          <p>
            Entry fees: <br />
            First category: ₹1,000 <br />
            Additional categories: ₹1,000 each
          </p>
          <hr className="border-gray-500" />
        </div>
        <div className="details-coach bg-gray-700 p-4 rounded">
          <p className="font-bold font-serif text-xl mb-3">Hosted By</p>
          <p>SENSEI MAHESH BABU</p>
          <p>Martial Arts Organisation</p>
          <p>baludojo@gmail.com</p>
          <p>8142541065</p>
        </div>
      </div>
    </>
  );
};

export default LeftColumn;
