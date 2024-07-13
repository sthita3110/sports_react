import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Coach/CoachTournament/main.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [selectedRole, setSelectedRole] = useState("Admin");
  const navigate = useNavigate();
  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: "", email: "", password: "" };

    // Validate username
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform sign-up logic here (e.g., send data to server)
      console.log("Form is valid. Submitting data:", formData);
      if (selectedRole === "Admin") {
        navigate("/admin");
      } else if (selectedRole === "Coach") {
        navigate("/coach");
      } else if (selectedRole === "Athlete") {
        navigate("/athlete");
      }
    } else {
      console.log("Form is not valid. Please fix errors.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="signup-form">
        <form id="loginForm" onSubmit={handleSubmit}>
          <p className="text-4xl font-bold">Create Account</p>
          <label htmlFor="username" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
            />
            <p className="error">{errors.username}</p>
          </label>

          <label htmlFor="email" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
            />
            <p className="error">{errors.email}</p>
          </label>

          <label htmlFor="password" className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
            />
            <p className="error">{errors.password}</p>
          </label>
          <div>
            <label htmlFor="role" className="label-text ">
              Select Role:
            </label>
            <select
              id="role"
              className="w-32 ml-10 mt-5  border border-gray-300 rounded-md"
              name="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Coach">Coach</option>
              <option value="Athlete">Athlete</option>
            </select>
          </div>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 mb-6 w-80 bg-cyan-600 text-white"
            type="submit"
          >
            Create Account
          </button>
          <p className="">
            Already have an account?
            <Link to={"/login"} className="text-purple-700 ml-3">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Signup;
