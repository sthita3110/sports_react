import { Link } from "react-router-dom";
import Navbar_ath from "./Navbar_ath";

const Seemore = () => {
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
              <div className="flex flex-col mb-3">
                <div className="flex items-center">
                <div>
                  <label htmlFor="coach" className="font-bold">
                    Coach :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">Mr XYZ ABC</p>
                </div>
                </div>
                <div className="flex items-center">
                <div>
                  <label htmlFor="experience" className="font-bold">
                    Experience :
                  </label>
                </div>
                <div className="ml-2">
                  <p className="p-2 rounded-lg">3-4</p>
                </div>
                </div>
              </div>
              <div class="flex flex-col ...">
              <div>
                <label htmlFor="achievements" className="font-bold">Achievements :</label>
              <div>
              <textarea placeholder="Secured titles in prestigious tournaments such as the UFC (Ultimate Fighting Championship) for MMA fighters, or the World Judo Championships for judokas."
               className="textarea textarea-bordered textarea-sm w-full max-w-xs mt-3 font-semibold" ></textarea>
              {/* md */}
              <textarea placeholder="Achieved a prestigious title like Grandmaster in some martial arts systems" 
              className="textarea textarea-bordered textarea-sm w-full max-w-xs font-semibold" ></textarea>
              {/* lg */}
              <textarea placeholder="Contributing to the martial arts community through coaching, mentoring, or charitable work and by establishing schools or programs to teach and promote martial arts" 
                className="textarea textarea-bordered textarea-sm w-full max-w-xs font-semibold" ></textarea>
              </div>
              </div>
              </div>
              
              <div className="mt-5 border w-20 rounded-lg bg-black">
                <Link to={"/athlete"} className="px-5 py-1 text-white">
                close
                </Link>
              </div>
            </div>
          </div>
        </form>
        </div>
        
      </div>
    
      {/* <p className="text-right mr-10 font-bold">
        <Link to={"/athlete"}>Back</Link>
      </p> */}
      
    </>
  );
};
export default Seemore;