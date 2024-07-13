import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="bg-gray-300 text-sm event-card-admin">
        <p className="font-bold text-lg">Event No.</p>
        <Link to={"/categories"} className="text-blue-800 mr-3">
          Categories
        </Link>
        <Link to={"/categories"} className="text-blue-800">
          Competitors
        </Link>
      </div>
    </>
  );
};
export default Event;
