import Header from "./Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Shared/Input";
import Footer from "../Footer/Footer";
import "./CoachTournament/main.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    clubName: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditButton = () => {
    setIsEditMode(true);
    setIsSubmitted(false);
  };

  const handleLogin = () => {
    setIsEditMode(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <p className="text-right mr-10 font-bold">
        <Link to={"/coach"}>Back</Link>
      </p>
      <div className="bg-red-700 p-5 m-10 flex flex-col justify-center items-center">
        <p className="font-bold text-2xl mt-1 mb-3 text-white">
          My Personal Details...
        </p>
      </div>

      {isSubmitted ? (
        <div className="flex justify-center items-center p-5 m-10 border main-data-coach-profile">
          <div className="about-data">
            <div className="flex">
              <p className="mr-3 font-semibold font-serif">Name:</p>
              <span className="text-blue-700 font-mono">{formData.name}</span>
            </div>
            <div className="flex">
              <p className="mr-3 font-semibold font-serif">Email:</p>
              <span className="text-blue-700 font-mono">{formData.email}</span>
            </div>
            <div className="flex">
              <p className="mr-3 font-semibold font-serif">Contact:</p>
              <span className="text-blue-700 font-mono">
                {formData.contact}
              </span>
            </div>
            <div className="flex">
              <p className="mr-3 font-semibold font-serif">Club Name:</p>
              <span className="text-blue-700 font-mono">
                {formData.clubName}
              </span>
            </div>
            <button
              type="button"
              className="p-3 m-2 bg-gray-500 rounded-xl text-white"
              onClick={handleEditButton}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        isEditMode && (
          <form onSubmit={handleLogin} className="coach-form">
            <div className="coach-profile-form">
              <div className="w-80">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Type here"
                  label="Name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 w-80">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Type here"
                  label="Email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 w-80">
                <Input
                  type="number"
                  name="contact"
                  value={formData.contact}
                  placeholder="Type here"
                  label="Contact"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4 w-80">
                <Input
                  type="text"
                  name="clubName"
                  value={formData.clubName}
                  placeholder="Type here"
                  label="Club Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="p-3 mt-5 w-80 bg-green-500 rounded-xl text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        )
      )}
      <Footer />
    </>
  );
};

export default Profile;
