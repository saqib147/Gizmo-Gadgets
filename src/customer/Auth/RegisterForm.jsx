// Make this form resposive```javascript
// Make this form responsive

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";
import { store } from "../../State/store";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateForm = () => {
      const newErrors = {};
      if (!userData.firstName) newErrors.firstName = "First name is required";
      if (!userData.lastName) newErrors.lastName = "Last name is required";
      if (!userData.email) newErrors.email = "Email is required";
      if (!userData.password) newErrors.password = "Password is required";
      if (userData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters long";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    if (validateForm()) {
      dispatch(register(userData));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Already have an account? </p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;

// import { Button } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";
// import { getUser, register } from "../../State/Auth/Action";
// import { store } from "../../State/store";

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { auth } = useSelector((store) => store);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUser(jwt));
//     }
//   }, [jwt, auth.jwt]);

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     const validateForm = () => {
//       const newErrors = {};
//       if (!userData.firstName) newErrors.firstName = "First name is required";
//       if (!userData.lastName) newErrors.lastName = "Last name is required";
//       if (!userData.email) newErrors.email = "Email is required";
//       if (!userData.password) newErrors.password = "Password is required";
//       if (userData.password.length < 8)
//         newErrors.password = "Password must be at least 8 characters long";

//       setErrors(newErrors);
//       return Object.keys(newErrors).length === 0;
//     };

//     if (validateForm()) {
//       dispatch(register(userData));
//       // console.log("userData: ", userData);
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="firstName"
//           >
//             First Name:
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
//               errors.firstName ? "border-red-500" : ""
//             }`}
//           />
//           {errors.firstName && (
//             <p className="text-red-500 text-sm">{errors.firstName}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="lastName"
//           >
//             Last Name:
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
//               errors.lastName ? "border-red-500" : ""
//             }`}
//           />
//           {errors.lastName && (
//             <p className="text-red-500 text-sm">{errors.lastName}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="email"
//           >
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
//               errors.email ? "border-red-500" : ""
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         <div className="mb-6">
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="password"
//           >
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 ${
//               errors.password ? "border-red-500" : ""
//             }`}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Register
//         </button>
//       </form>
//       <div className="flex justify-center flex-col items-center">
//         <div className="py-3 flex items-center">
//           <p>Already have an account? </p>
//           <Button
//             onClick={() => navigate("/login")}
//             className="ml-5"
//             size="small"
//           >
//             login
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default RegisterForm;
