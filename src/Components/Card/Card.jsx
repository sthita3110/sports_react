import { useNavigate } from "react-router-dom";

const Card = ({ name, address, image, tourname, dos, venue, reg }) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(address);
  };

  return (
    <div className="card w-96 bg-white text-black shadow-xl m-5">
      <figure>
        <img src={image} alt={tourname} className="w-full h-48 object-cover" />
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
  );
};

export default Card;
