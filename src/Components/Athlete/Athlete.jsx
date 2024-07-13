import { Link } from "react-router-dom";
import "./ath.css";
import Card from "../Card/Card";
import tour1  from "../../Images/tour1.jpg";
import tour2 from "../../Images/tour2.jpg";
import tour3 from "../../Images/tour3.jpg";
import Navbar_ath from "./Navbar_ath";
import Footer from "../Footer/Footer";
const Athlete = () => {
  return (
    <>
    <Navbar_ath></Navbar_ath>
    
    <div className="ath-profile ">
        <div className="ml-40">
        <form className="ProfileClass bg-slate-300 pt-2 pb-5 rounded-md">
          <div className="profile-head">
            <h1 className="heading font-extrabold text-3xl text-center pb-8">
              Profile Information
            </h1>
          </div>

          <div className="flex justify-evenly">
            <div className="border border-stone-600 rounded-lg px-5 ">
              <div className="mt-5 mb-6 px-20 py-20 bg-slate-500 h-16 ">
                <p>IMAGE</p>
              </div>
            </div>
            <div className="flex-col ml-10">
              <div className="flex items-center">
                <div>
                  <label htmlFor="username" className="font-bold mr-3">
                    Name :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">John Cena</p>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <label htmlFor="mail" className="font-bold mr-3">
                    Email :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">abc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <label htmlFor="age" className="font-bold mr-6">
                    Age :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">20</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <label htmlFor="gender" className="font-bold">
                    Gender :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">Male</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <label htmlFor="height" className="font-bold">
                    Height :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">5' 4 </p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <label htmlFor="gender" className="font-bold">
                    Weight:
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">50kg</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div>
                  <label htmlFor="coach" className="font-bold">
                    Coach :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">Mr XYZ ABC</p>
                </div>
              </div>
              <div className="font-semibold">
                <Link to={"/athlete/seemore"} >
                <p className=" underline underline-offset-1">See More</p>
                </Link>
              </div>
              <div className="mt-5 border w-20 rounded-lg bg-black">
                <Link to={"/athlete/form"} className="px-5 py-1 text-white">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </form>
        </div>
        <div className="flex justify-center items-center">
        <p className="text-3xl bg-gray-200 p-6 rounded-xl mt-5">
          UPCOMING TOURNAMENTS <span className="text-sm">see all</span>
        </p>
      </div>
      <div className="flex justify-between ml-16">
        <Card name={"More Details"} image={tour1} tourname={"Dojo Inhouse Tournament"} dos={"February 10, 2024"} venue={"Kenwyn Martial arts centre, South Africa"} reg={"Thu 8 February 2024 11.59 pm SAST"} address={"/athlete/athletetour"} />
        <Card name={"More Details"} image={tour2}
          tourname={"Inter District Open Karate Championship"}
          dos={"February 11, 2024"}
          venue={"TDP Hall, near India Spring School, India"}
          reg={"Sat 10 February 2024 11.59 pm IST"}
          address={"/athlete/athletetour"} />
        <Card name={"More Details"} image={tour3}
          tourname={"Eagles Karate Challenge"}
          dos={"February 17, 2024"}
          venue={"Tshwane Korfball Park, South Africa"}
          reg={"Thu 15 February 2024 11.59 pm SAST"} address={"/athlete/athletetour"} />
      </div>
      </div>
    
      {/* <p className="text-right mr-10 font-bold">
        <Link to={"/athlete"}>Back</Link>
      </p> */}
      <Footer/>
    </>
  );
};
export default Athlete;

