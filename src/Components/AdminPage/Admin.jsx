import { useNavigate, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import tour1 from "../../Images/tour1.jpg";
import tour2 from "../../Images/tour2.jpg";
import tour3 from "../../Images/tour3.jpg";
import TourCard from "./AdminTournament/TournamentCard/TourCard";

const Admin = () => {
  const navigate = useNavigate();
  const handleTournament = () => {
    navigate("/admin/tournament/form");
  };
  return (
    <>
      <nav className="bg-red-900 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="m12.5 12l-.45 9.05q-.025.4-.312.675T10.95 22q-.4 0-.687-.275t-.313-.675L9.5 13l-3.175-1.825l-.35 1.3L7.5 15.15q.2.35.088.75t-.463.6q-.35.2-.75.1t-.6-.45l-1.75-3.025q-.1-.175-.125-.375t.025-.4L5 8.45l5.75-3.3L8.7 3.1q-.275-.275-.288-.687T8.7 1.7q.275-.275.7-.275t.7.275l2.975 2.95q.35.35.288.838t-.488.737L10.4 7.65l1.2 1.05l7.5-6.125q.275-.25.663-.212t.687.387q.225.275.213.625T20.4 4zM5 7q-.825 0-1.412-.587T3 5q0-.825.588-1.412T5 3q.825 0 1.413.588T7 5q0 .825-.587 1.413T5 7"
                ></path>
              </svg>
              <a href="/" className="btn btn-ghost">
                <h1 className="text-3xl font-bold text-white">Martial Tour</h1>
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                to="/admin"
                className="btn btn-ghost text-lg text-white hover:text-gray-300 focus:outline-none"
              >
                Dashboard
              </Link>
              <button className="btn btn-ghost text-lg text-white hover:text-gray-300 focus:outline-none">
                Settings
              </button>
              <Link
                to="/login"
                className="btn btn-ghost text-lg text-white hover:text-gray-300 focus:outline-none"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gray-900 py-12 mb-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome, Admin</h1>
          <p className="text-lg text-gray-300">Admin Dashboard</p>
        </div>
      </header>

      <main>
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold shadow-md bg-gray-200 p-6 rounded-xl text-gray-800">
            UPCOMING EVENTS{" "}
            <span className="text-sm  text-gray-600 mt-2 cursor-pointer hover:text-gray-900">
              see all
            </span>
          </p>
        </div>

        <div className="flex justify-between">
          <TourCard
            name={"More Details"}
            image={tour1}
            tourname={"Dojo Inhouse Tournament"}
            dos={"February 10, 2024"}
            venue={"Kenwyn Martial arts centre, South Africa"}
            reg={"Thu 8 February 2024 11.59 pm SAST"}
            address={"/admin/tournament"}
          />
          <TourCard
            name={"More Details"}
            image={tour2}
            tourname={"Inter District Open Karate Championship"}
            dos={"February 11, 2024"}
            venue={"TDP Hall, near India Spring School, India"}
            reg={"Sat 10 February 2024 11.59 pm IST"}
            address={"/admin/tournament"}
          />
          <TourCard
            name={"More Details"}
            image={tour3}
            tourname={"Eagles Karate Challenge"}
            dos={"February 17, 2024"}
            venue={"Tshwane Korfball Park, South Africa"}
            reg={"Thu 15 February 2024 11.59 pm SAST"}
            address={"/admin/tournament"}
          />
        </div>
        <div className="flex justify-center items-center my-10">
          <button
            className="text-3xl font-bold bg-gray-800 text-white p-6 rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleTournament}
          >
            CREATE TOURNAMENT <span className="text-red-700">(+)</span>
          </button>
        </div>
      </main>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};
export default Admin;
