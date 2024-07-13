import "./right.css";
import Event from "../LeftColumn/Event";
import { useState } from "react";
const RightColumn = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    console.log("PDF file submitted");
  };
  const [isEditing, setIsEditing] = useState(false);
  const [generalInfo, setGeneralInfo] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    setGeneralInfo(event.target.value);
  };

  const handleSaveClick = () => {
    // Save the updated information to your server or local storage
    // Here you would replace the placeholder comment with your actual saving logic
    console.log("Saving:", generalInfo);
    setIsEditing(!isEditing);
  };
  return (
    <>
      <div className="right-column-admin ">
        {/* <div className="info-coach">
          <p className="font-bold font-serif text-xl">
            General Information
            <span className="text-sm font-mono font-normal ml-2 text-blue-600">
              Edit
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
            ultricies felis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent pellentesque dolor sed ipsum convallis, id
            convallis risus finibus. Duis eget mauris eu nisi blandit ornare nec
            et elit. Vivamus ornare posuere odio vestibulum gravida. Donec eros.
          </p>
        </div> */}
        <div className="info-admin">
          <p className="font-bold font-serif text-xl">
            General Information
            {!isEditing && (
              <span
                className="text-sm ml-2 text-blue-900 font-normal font-mono cursor-pointer"
                id="edit-button"
                onClick={handleEditClick}
              >
                Edit
              </span>
            )}
          </p>
          {isEditing ? (
            <>
              <textarea
                id="general-info-input"
                cols={50}
                rows={4}
                value={generalInfo}
                onChange={handleInputChange}
              />
              <button
                onClick={handleSaveClick}
                className="button bg-green-500 text-white  p-2 ml-2 rounded-xl"
              >
                Save
              </button>
            </>
          ) : (
            <p id="general-info">{generalInfo}</p>
          )}
        </div>

        <div className="info-admin">
          <label htmlFor="fileInput" className="mr-3 font-semibold">
            Upload a PDF:
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
          />
          <button
            className="ml-5 p-2 rounded-xl bg-blue-600 text-white"
            onClick={handleSubmit}
            disabled={!selectedFile}
          >
            Submit PDF
          </button>
        </div>
        <div className="flex">
          <p className="text-xl font-bold ml-5">Events: </p>
          <p
            className="text-md ml-10 text-blue-900 font-semibold cursor-pointer"
            id="edit-button"
          >
            New Event
          </p>
          <p
            className="text-md ml-5 text-blue-900 font-semibold cursor-pointer"
            id="edit-button"
          >
            Import Event
          </p>
          <p
            className="text-md ml-5 text-blue-900 font-semibold cursor-pointer"
            id="edit-button"
          >
            Event Settings
          </p>
        </div>
        <div className="flex">
          <Event />
          <Event />
          <Event />
        </div>
        <div className="venue-admin">
          <p className="font-bold text-xl">
            Venue{" "}
            <span
              className="text-sm ml-2 text-blue-900 font-semibold cursor-pointer"
              id="edit-button"
            >
              Edit venue
            </span>
          </p>
          <p>map</p>
        </div>
      </div>
    </>
  );
};
export default RightColumn;
