import { useNavigate } from "react-router-dom";
const Card = ({ name, address, image, tourname, dos, venue, reg }) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(address);
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img src={image}></img>
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title font-serif text-2xl">{tourname}</h2>

          <p>{dos}</p>
          <p>{venue}</p>
          <p className="font-semibold">Reg. Deadline: </p>
          <p>{reg}</p>
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
export default Card;
