import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

export default function AdminNavbar() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
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
          navigate(path);
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
      if (res.data.message) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("Logout Error:", error);
      toast.error("Logout Failed");
    }
  };
  return (
    <div className="shadow-2xl h-14 top-0 left-0 right-0">
      <nav className="md:float-right flex ">
        {userEmail ? (
          <div className="flex items-center space-x-2 ml-4">
            <span className="text-gray-700  md:flex">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600  md:flex"
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
      </nav>
    </div>
  );
}
