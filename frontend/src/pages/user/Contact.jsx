import React from "react";
import NavBar from "../../components/user/NavBar";
import Footer from "../../components/user/Footer";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact/message", {
        email,
        message,
      });
      toast.success("Message sent");
    } catch (error) {
      console.error(error);
      toast.error("Send message failed");
    }
  };

  return (
    <div className="bg-linear-to-r from-blue-50 to-white">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-8   mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          We would love to hear from you! If you have any questions,
          suggestions, or feedback, please feel free to reach out to us.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">
            You can email us at:
            <a
              href="mailto:contact@library.com"
              className="text-blue-600 hover:underline"
            >
              publichalllabrary.com
            </a>
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-700">You can call us at: (250) 780-924-26</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Address</h2>
          <p className="text-gray-700">KK 22 Street Sontatube</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 shadow-lg rounded-lg bg-white md:w-2xl">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-gray-500 text-xl">
            Send us your message
          </h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-blue-300 rounded px-3 py-2 w-full mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="border border-blue-300 rounded px-3 py-2 w-full mt-1 focus:ring-2 ring-blue-500 outline-none"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
