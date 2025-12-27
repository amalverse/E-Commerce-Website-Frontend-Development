import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
const Register = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Validation Logic
  const validateForm = () => {
    let isValid = true;
    let newErrors = { username: "", email: "", password: "" };

    // username validation
    if (username.trim().length < 2) {
      newErrors.username = "Username must be at least 2 characters long.";
      isValid = false;
    }

    // email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., name@example.com).";
      isValid = false;
    }

    // password validation
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters and include both letters and numbers.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    const data = {
      username,
      email,
      password,
    };

    console.log("REGISTER DATA:", data);

    setMessage("Account created successfully! 🎉");
  };

  return (
    <>
      <Navbar />
      <section className="h-full flex items-center justify-center mt-10 p-5">
        <div className="max-w-sm w-full shadow-2xl bg-white p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-center pt-2">
            Please Register
          </h2>

          <form
            onSubmit={handleRegister}
            className="space-y-5 max-w-sm mx-auto pt-6"
          >
            {/* Username */}
            <div>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrors((prev) => ({ ...prev, username: "" }));
                }}
                placeholder="Username"
                className={`w-full bg-slate-100 border px-5 py-3 rounded 
                ${errors.username ? "border-red-400" : "border-gray-200"}`}
              />
              {errors.username && (
                <p className="text-rose-600 text-xs pt-1">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="Email Address"
                className={`w-full bg-slate-100 border px-5 py-3 rounded 
                ${errors.email ? "border-red-400" : "border-gray-200"}`}
              />
              {errors.email && (
                <p className="text-rose-600 text-xs pt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                placeholder="Password"
                className={`w-full bg-slate-100 border px-5 py-3 rounded 
                ${errors.password ? "border-red-400" : "border-gray-200"}`}
              />
              {errors.password && (
                <p className="text-rose-600 text-xs pt-1">{errors.password}</p>
              )}
            </div>

            {/* Success Message */}
            {message && (
              <p className="text-green-600 text-sm text-center">{message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-rose-600 text-white hover:bg-red-700 font-medium py-3 rounded-md transition shadow-md"
            >
              Register
            </button>
          </form>

          <p className="my-5 italic text-sm text-center">
            Have an account?
            <Link to="/login" className="text-rose-600 px-1 hover:underline">
              Sign In
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
