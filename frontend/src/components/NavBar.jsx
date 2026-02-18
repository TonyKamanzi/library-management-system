import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function NavBar() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true,
        });

        if (res.data.user) {
          setUserEmail(res.data.user.email);
        } else {
          setUserEmail("");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
        setUserEmail("");
      }
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      });

      // Assuming backend just returns a message
      if (res.data.message) {
        toast.success(res.data.message);
        setUserEmail(""); // remove email from state
        navigate("/login");
      }
    } catch (error) {
      console.log("Logout error:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          {/* Login / User Info */}
          {userEmail ? (
            <div className="flex gap-2 items-center">
              <p className="px-4 font-bold">{userEmail}</p>
              <button
                onClick={handleLogout}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
