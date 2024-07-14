import Header from "./Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import tour1 from "../../Images/tour1.jpg";
import tour2 from "../../Images/tour2.jpg";
import tour3 from "../../Images/tour3.jpg";

const Coach = () => {
  const announcements = [
    "Announcement 1",
    "Announcement 2",
    "Announcement 3",
    "Announcement 4",
    "Announcement 5",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="text-center py-10">
        <p className="font-bold font-serif text-5xl">
          Welcome, <span className="text-red-500">Participant</span>
        </p>
      </div>

      <div className="flex justify-center items-center mb-10">
        <p className="text-3xl bg-red-500 p-6 rounded-xl shadow-md">
          UPCOMING TOURNAMENTS{" "}
          <span className="text-sm text-gray-200 cursor-pointer">see all</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-around px-5">
        <Card
          name={"Click here to Register"}
          image={tour1}
          tourname={"Dojo Inhouse Tournament"}
          dos={"February 10, 2024"}
          venue={"Kenwyn Martial arts centre, South Africa"}
          reg={"Thu 8 February 2024 11.59 pm SAST"}
          address={"/coach/tournament"}
        />
        <Card
          name={"Click here to Register"}
          image={tour2}
          tourname={"Inter District Open Karate Championship"}
          dos={"February 11, 2024"}
          venue={"TDP Hall, near India Spring School, India"}
          reg={"Sat 10 February 2024 11.59 pm IST"}
          address={"/coach/tournament"}
        />
        <Card
          name={"Click here to Register"}
          image={tour3}
          tourname={"Eagles Karate Challenge"}
          dos={"February 17, 2024"}
          venue={"Tshwane Korfball Park, South Africa"}
          reg={"Thu 15 February 2024 11.59 pm SAST"}
          address={"/coach/tournament"}
        />
        <Card
          name={"Click here to Register"}
          image={tour3}
          tourname={"Eagles Karate Challenge"}
          dos={"February 17, 2024"}
          venue={"Tshwane Korfball Park, South Africa"}
          reg={"Thu 15 February 2024 11.59 pm SAST"}
          address={"/coach/tournament"}
        />
      </div>

      <div className="flex justify-center items-center mt-10">
        <p className="text-3xl bg-red-500 p-6 rounded-xl shadow-md">
          UPDATES{" "}
          <span className="text-sm text-gray-200 cursor-pointer">see all</span>
        </p>
      </div>

      <div className="text-center mt-5 mb-5">
        {announcements.map((line, index) => (
          <div key={index} className="text-xl py-2 update-item">
            {line}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Coach;
