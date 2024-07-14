import { useNavigate } from "react-router-dom";
import { useState } from "react";
const TourCard = ({ name, address, image, tourname, dos, venue, reg }) => {
  const navigate = useNavigate();
  const [isArchived, setIsArchived] = useState(false);

  const handleButton = () => {
    navigate(address);
  };
  const handleArchive = () => {
    setIsArchived(true);
  };
  if (isArchived) {
    return null;
  }
  return (
    <>
      <div className="card w-96 shadow-xl m-5 bg-white text-black ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            :
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={handleArchive} disabled={isArchived}>
                Archive
              </button>
            </li>
            <li>
              <button>Withdraw</button>
            </li>
          </ul>
        </div>

        <figure>
          <img
            src={image}
            alt={tourname}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title font-serif text-2xl text-red-500">
            {tourname}
          </h2>
          <p className="text-gray-700">{dos}</p>
          <p className="text-gray-700">{venue}</p>
          <p className="font-semibold text-gray-800">Reg. Deadline:</p>
          <p className="text-gray-700">{reg}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary" onClick={handleButton}>
              {name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TourCard;
