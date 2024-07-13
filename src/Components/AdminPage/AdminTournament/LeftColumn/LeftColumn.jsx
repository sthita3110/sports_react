import { useNavigate } from "react-router-dom";
import "./left.css";

const LeftColumn = () => {
  const navigate = useNavigate();
  const tournamentUpdate = () => {
    navigate("/admin/tournament/form");
  };
  return (
    <>
      <div className="left-column-admin flex flex-col justify-around">
        <div className="details-admin">
          <p className="font-bold font-serif text-xl">Hosted by: </p>
          <p>Sthitapragyan Rout</p>
          <p>Martial Arts Organisation</p>
        </div>
        <div>
          {/* <button className="btn-left-admin bg-black">
            <Link to={""}>register</Link>
          </button>
          <button className="btn-left-admin bg-black">
            View Participant List
          </button> */}
          <hr></hr>
          <p className="flex justify-between my-3">
            Visibility: Private{" "}
            <button className="btn-admin-func">Publish</button>
          </p>
          <hr></hr>
          <p className="flex justify-between my-3">
            Registration: Closed{" "}
            <button className="btn-admin-func">Open</button>
          </p>
        </div>
        <div className="details-admin">
          <p className="font-bold font-serif text-xl">Details</p>
          <p>
            Entry fees: <br />
            First category: ₹1,000 <br />
            Additional categories: ₹1,000 each
          </p>
        </div>
        <button className="btn-left-admin bg-red-600">Cancel Tournament</button>
        <button
          className="btn-left-admin bg-cyan-500 hover:bg-cyan-600 ..."
          onClick={tournamentUpdate}
        >
          Update Tournament
        </button>
        {/* <div className="details-admin">
          <p className="font-bold font-serif text-xl">Hosted by: </p>
          <p>Sthitapragyan Rout</p>
          <p>Martial Arts Organisation</p>
        </div> */}
      </div>
    </>
  );
};
export default LeftColumn;
