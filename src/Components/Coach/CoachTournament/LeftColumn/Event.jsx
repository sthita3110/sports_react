import { Link } from "react-router-dom";

const Event = ({ eventName }) => {
  return (
    <>
      <div className="bg-gray-300 event-card">
        <p className="font-bold text-lg">{eventName}</p>
        <div className="flex justify-between items-center">
          <Link to={"/categories"} className="text-blue-800">
            Categories
          </Link>
          <svg
            className="w-6 h-6 text-black-500 cursor-pointer hover:text-black-300 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Event;

// import { Link } from "react-router-dom";

// const Event = ({ eventName }) => {
//   return (
//     <div className="bg-gray-500 rounded-lg p-4 shadow-md text-white">
//       <p className="font-bold text-xl mb-2">{eventName}</p>
//       <div className="flex justify-between items-center">
//         <Link
//           to={"/categories"}
//           className="text-blue-500 hover:text-blue-300 transition-colors duration-300"
//         >
//           Categories
//         </Link>
//         <svg
//           className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-300 transition-colors duration-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 5l7 7-7 7"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Event;
