import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function TournamentCreateform() {
  const navigate = useNavigate();
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentID, setTournamentID] = useState("");
  const [tournamentDate, setTournamentDate] = useState("");
  const [tournamentVenue, setTournamentVenue] = useState("");
  const [registrationStart, setregistrationStart] = useState("");
  const [registrationEnd, setregistrationEnd] = useState("");
  const [hName, sethName] = useState("");
  const [hEmail, sethEmail] = useState("");
  const [hMobile, sethMobile] = useState("");
  const handleCreate = () => {
    if (tournamentName.length === 0) {
      alert("Invalid form,tournament name can not be empty");
      return;
    }
    if (tournamentID.length === 0) {
      alert("Invalid Form, Tournament ID can not be empty");
      return;
    }
    if (tournamentVenue.length === 0) {
      alert("Invalid Form,Tournament Venue can not be empty");
      return;
    }
    if (tournamentDate.length === 0) {
      alert("Invalid Form,Tournament Date can not be empty");
      return;
    }
    if (registrationStart.length === 0) {
      alert("Invalid Form,Tournament  start date can not be empty");
      return;
    }
    if (registrationEnd.length === 0) {
      alert("Invalid Form,Tournament End date can not be empty");
      return;
    }
    if (hName.length === 0) {
      alert("Invalid Form,name can not be empty");
      return;
    }
    if (hEmail.length === 0) {
      alert("Invalid Form,email can not be empty");
      return;
    }
    if (hMobile.length === 0) {
      alert("Invalid Form,mobile number can not be empty");
      return;
    }
    navigate("/admin");
  };

  return (
    <>
      <nav className="bg-red-900 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="m12.5 12l-.45 9.05q-.025.4-.312.675T10.95 22q-.4 0-.687-.275t-.313-.675L9.5 13l-3.175-1.825l-.35 1.3L7.5 15.15q.2.35.088.75t-.463.6q-.35.2-.75.1t-.6-.45l-1.75-3.025q-.1-.175-.125-.375t.025-.4L5 8.45l5.75-3.3L8.7 3.1q-.275-.275-.288-.687T8.7 1.7q.275-.275.7-.275t.7.275l2.975 2.95q.35.35.288.838t-.488.737L10.4 7.65l1.2 1.05l7.5-6.125q.275-.25.663-.212t.687.387q.225.275.213.625T20.4 4zM5 7q-.825 0-1.412-.587T3 5q0-.825.588-1.412T5 3q.825 0 1.413.588T7 5q0 .825-.587 1.413T5 7"
                ></path>
              </svg>
              <h1 className="text-3xl font-bold text-white">Martial Tour</h1>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                to="/admin"
                className="btn btn-ghost text-lg text-white hover:text-gray-300 focus:outline-none"
              >
                Dashboard
              </Link>
              <button className="btn btn-ghost text-lg text-white hover:text-gray-300 focus:outline-none">
                Settings
              </button>
              <Link
                to="/login"
                className="btn btn-ghost text-lg text-white hover:text-gray-300 focus:outline-none"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-center h-full items-center bg-gray-800">
        <h1 className="font-bold text-4xl p-10 text-white">
          CREATE TOURNAMENT
        </h1>
        <form className="max-w-4xl mx-auto rounded-lg bg-slate-300 p-10 mb-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="tournament-name"
              >
                Tournament Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="tournament-name"
                type="text"
                placeholder=""
                onChange={(e) => setTournamentName(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="tournament-id"
              >
                Tournament ID
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="tournament-id"
                type="text"
                placeholder=""
                onChange={(e) => setTournamentID(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="doe"
              >
                Date Of Event
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="doe"
                type="date"
                placeholder=""
                onChange={(e) => setTournamentDate(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="venue"
              >
                Venue
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="venue"
                type="text"
                placeholder=""
                onChange={(e) => setTournamentVenue(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="rsd"
              >
                Registration Start date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="rsd"
                type="date"
                placeholder=""
                onChange={(e) => setregistrationStart(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="red"
              >
                Registration End date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="red"
                type="date"
                placeholder=""
                onChange={(e) => setregistrationEnd(e.target.value)}
              />
            </div>
          </div>
          <h1 className="font-bold p-1 mb-4">Single Point of Contact</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="hname"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="hname"
                type="text"
                placeholder=""
                onChange={(e) => sethName(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="hemail"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="hemail"
                type="email"
                placeholder=""
                onChange={(e) => sethEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="ph-number"
              >
                Mobile number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="ph-number"
                type="text"
                placeholder=""
                onChange={(e) => sethMobile(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 mb-6 w-56 bg-cyan-600 hover:bg-cyan-700 text-white ml-auto"
            onClick={handleCreate}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
