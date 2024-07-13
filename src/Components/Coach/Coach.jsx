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
    <>
      <div>
        <Header />
        <p className="font-bold font-serif text-5xl p-5">
          Welcome, <span>Sai</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-3xl bg-gray-200 p-6 rounded-xl">
          UPCOMING TOURNAMENTS <span className="text-sm">see all</span>
        </p>
      </div>
      <div className="flex justify-between">
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
      </div>
      <div className="flex justify-center items-center">
        <p className="text-3xl bg-gray-200 p-6 rounded-xl">
          UPDATES <span className="text-sm">see all</span>
        </p>
      </div>
      <div className="text-center mt-3 mb-3">
        {announcements.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};
export default Coach;
