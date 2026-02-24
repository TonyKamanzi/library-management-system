import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FcMenu } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

export default function NavBar() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getUserData = async (path) => {
      try {
        const res = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true,
        });

        if (res.data.user) {
          setUserEmail(res.data.user.email);
        } else {
          setUserEmail("");
        }
        if (!user) {
          navigate("/");
        } else {
          navigate(path)
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
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-16">
          <Link to={"/"} className="text-2xl font-bold italic text-blue-600">
            <img src="/logo.png" alt="Library Logo" className="w-15 h-10 mr-2 inline-block" />
            City <span className="text-black">Hall</span> Library
          </Link>

          <div className="space-x-3 hidden md:flex">
            <Link
              className="text-gray-500 hover:text-blue-500 active:text-black"
              to={"/"}
            >
              Home
            </Link>
           <button onClick={() => navigate("/store")} className="text-gray-500 hover:text-blue-500 active:text-black">
              Store
            </button>
            <button onClick={() => navigate("/community")} className="text-gray-500 hover:text-blue-500 active:text-black">
              Community
            </button>
            <Link
              to={"/about"}
              className="text-gray-500 hover:text-blue-500 active:text-black"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-500 hover:text-blue-500 active:text-black"
            >
              Contact
            </Link>
          </div>
          {userEmail ? (
            <div className="flex items-center space-x-2 ml-4">
              <span className="text-gray-700 hidden md:flex">{userEmail}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600 hidden md:flex"
              >
                Logut
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="text-white bg-blue-500 p-2 rounded-md items-center hover:bg-blue-600  transition hidden md:block"
            >
              Login
            </Link>
          )}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : <FcMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white px-4 py-4 space-y-3">
          <Link className="block text-gray-500 " to={"/"}>
            Home
          </Link>
          <Link to={"/store"} className="block text-gray-500 ">
            Store
          </Link>
          <Link to={"/community"} className="block text-gray-500 ">
            Community
          </Link>
          <Link to={"/contact"} className="block text-gray-500 ">
            Contact
          </Link>
          <Link to={"/about"} className="block text-gray-500 ">
            About
          </Link>
          {userEmail ? (
            <div className="text-center">
              <span className="text-gray-700 text-center">{userEmail}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white block w-full rounded p-2 hover:bg-red-600 mt-3"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="text-white bg-blue-500 p-2 rounded-md  hover:bg-blue-600  transition block text-center"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </nav>
  );
}
