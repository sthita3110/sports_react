import { Link } from "react-router-dom";
import "./ath.css";
const Athlete = () => {
  return (
    <>
      <div className="ath-profile ">
        <form className="ProfileClass bg-slate-300">
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
              <div className="font-semibold ">
                <button type="save">See More</button>
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
    </>
  );
};
export default Athlete;
