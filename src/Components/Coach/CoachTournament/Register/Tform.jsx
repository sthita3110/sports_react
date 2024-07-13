import Search from "../../../../Shared/Search";
import Footer from "../../../Footer/Footer";
import logoTour from "../../../../Images/logoTour.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Newform from "./Newform";
import "./form.css";

const Tform = () => {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };
  return (
    <>
      <Navbar />
      <p className="text-right mr-10 font-bold">
        <Link to={"/coach/tournament"}>Back</Link>
      </p>
      <div className="mt-1 ml-10 mr-10">
        <div className="text-white bg-teal-700 font-mono pl-10 pr-10 pt-14 pb-14 flex justify-around items-center rounded-md">
          <div>
            <img src={logoTour} className=" w-28 h-28" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p
              className="font-bold
           text-3xl"
            >
              T101
            </p>
            <p
              className="font-bold
           text-3xl"
            >
              Inter District Open Karate Championship
            </p>
            <p className="font-thin text-lg">February 11, 2024</p>
            <p className="font-thin text-lg">
              TDP Hall, near India Spring School, India
            </p>
          </div>
        </div>
      </div>
      <div className="tform-body">
        <p className="font-bold text-2xl">New Registration!!!</p>

        <div className="p-4 form-reg">
          <Newform />
        </div>
        <div className="divider">OR</div>

        <div className="flex flex-col justify-center items-center mt-5 mb-5">
          <div>
            <p className="text-xl ml-5">Candidate ID: </p>
            <Search onSearch={handleSearch} />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="p-3 m-2 bg-green-500 rounded-xl text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Tform;
