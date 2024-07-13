import { Link } from "react-router-dom";

const Event = ({ eventName }) => {
  return (
    <>
      <div className="bg-gray-300 event-card">
        <p className="font-bold text-lg">{eventName}</p>
        <Link to={"/categories"} className="text-blue-800">
          Categories
        </Link>
      </div>
    </>
  );
};
export default Event;
