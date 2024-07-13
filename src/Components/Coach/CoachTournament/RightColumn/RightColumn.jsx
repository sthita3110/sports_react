import "./right.css";
import Event from "../LeftColumn/Event";
const RightColumn = () => {
  const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="right-column-coach ">
        <div className="info-coach">
          <p className="font-bold font-serif text-xl">General Information</p>
          <p className="mt-3">
            Dear Colleagues, <br />I hope you are all keeping well.
            <br /> Attached please find the updated invitation for the Boland
            Dragons Karate League as well as the Indemnity Form. Once all the
            entries have been received, a detailed events program will be made
            available.
            <br /> Also attached is the worksheet for competitor entries as well
            as the worksheet (please note the tabs at the bottom of the first
            page) for referees, jury table judges, and coaches. The closing date
            for all entries, orders and payments is the 20Feb 2024. I request
            that all federation and dojo-heads adhere to this deadline.
            <br /> Kindly read through the invitation and distribute to your
            affiliates.
            <br /> Thank you.
            <br /> Kind regards
          </p>
        </div>
        <div>
          <button className="btn-dwld-coach" onClick={onButtonClick}>
            Download Tournament_Guidelines
          </button>
        </div>
        <div className="flex">
          <Event eventName={"Kata"} />
          <Event eventName={"Kumite"} />
        </div>
        <div className="venue">
          <p className="font-bold text-xl">Venue</p>
          <p>map</p>
        </div>
      </div>
    </>
  );
};
export default RightColumn;
