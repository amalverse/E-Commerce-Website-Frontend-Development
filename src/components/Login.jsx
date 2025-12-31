import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // field-level errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Email validation (same style as your vanilla JS regex)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., name@example.com).";
      isValid = false;
    }

    // Password validation (min 8 chars, at least 1 letter & 1 number)
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters and include letters and numbers.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    const data = { email, password };
    console.log("Login data:", data);

    // Fake success for now
    setMessage("Logged in successfully! 🎉");
  };

  return (
    <>
      <Navbar />
      <section className="h-full flex items-center justify-center mt-10 p-5">
        <div className="max-w-sm w-full shadow-2xl bg-white p-8 rounded-xl">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-500">
              Please Sign In to continue to your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-sm outline-none transition
                ${errors.email ? "border-red-400" : "border-gray-200"}
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                placeholder="Enter your password"
                className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-sm outline-none transition
                ${errors.password ? "border-red-400" : "border-gray-200"}
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100`}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-rose-600">{errors.password}</p>
              )}
            </div>

            {/* Global message */}
            {message && (
              <p
                className={`text-sm ${
                  message.toLowerCase().includes("success")
                    ? "text-green-600"
                    : "text-rose-600"
                }`}
              >
                {message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-rose-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-sm shadow-md hover:shadow-lg transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-6 text-xs text-gray-500 text-center">
            Don&apos;t have an account?
            <Link
              to="/register"
              className="text-rose-600 font-medium px-1 hover:underline"
            >
              Register
            </Link>
            here.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
