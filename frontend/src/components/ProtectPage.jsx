import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectPage = ({ children }) => {
  const [isThereUser, setIsthereUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/user", {
          withCredentials: true,
        });
        if (!res.data.user) {
          navigate("/login");
          isThereUser(false);
        }
        setIsthereUser(true);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  return <div>{isThereUser ? { children } : <div>Loading...</div>}</div>;
};
