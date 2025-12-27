import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", body: "" };

    // Name validation (min 2 chars)
    if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., name@example.com).";
      isValid = false;
    }

    // Subject validation (min 3 chars)
    if (subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
      isValid = false;
    }

    // Message validation (min 10 chars)
    if (body.trim().length < 10) {
      newErrors.body =
        "Message should be at least 10 characters so we can understand your query.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    const data = {
      name,
      email,
      subject,
      message: body,
    };

    console.log("CONTACT FORM DATA:", data);

    setMessage("Thank you for reaching out! We’ll get back to you soon. ✨");

    // Optional: clear form
    setName("");
    setEmail("");
    setSubject("");
    setBody("");
  };

  return (
    <section className="h-screen flex items-center justify-center overflow-auto">
      <div className="w-full max-w-lg bg-white shadow-2xl p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-500">
            Have a question, feedback, or just want to say hi? Fill out the form
            below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleContactSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-sm outline-none transition
                ${errors.name ? "border-red-400" : "border-gray-200"}
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
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

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setErrors((prev) => ({ ...prev, subject: "" }));
              }}
              placeholder="How can we help you?"
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-sm outline-none transition
                ${errors.subject ? "border-red-400" : "border-gray-200"}
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-600">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                setErrors((prev) => ({ ...prev, body: "" }));
              }}
              placeholder="Write your message here..."
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 border text-sm outline-none resize-none transition
                ${errors.body ? "border-red-400" : "border-gray-200"}
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100`}
            />
            {errors.body && (
              <p className="mt-1 text-xs text-rose-600">{errors.body}</p>
            )}
          </div>

          {/* Global Message */}
          {message && (
            <p className="text-center text-sm text-green-600">{message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-rose-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-sm shadow-md hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
