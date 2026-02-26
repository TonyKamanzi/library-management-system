import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/contact/all-message",
        );
        setMessages(res.data);
      } catch (error) {
        console.error("Fetching messages failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p className="text-center my-4">Loading messages...</p>;
  }

  return (
    <div className="mx-auto max-w-7xl m-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-semibold text-gray-500 my-4">
        Contact Messages Page
      </h1>
      <p className="text-center text-gray-500">
        View all contact messages here from users and customers.
      </p>
      <div className="flex justify-end my-2">
        <Link to={"/admin-dashboard"} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-500 flex items-center gap-1">
          <FaArrowLeft/>
          Back to Dashboard</Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Message
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center px-4 py-2">
                  No messages found
                </td>
              </tr>
            ) : (
              messages.map((msg, index) => (
                <tr key={msg._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {msg.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {msg.message}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={async () => {
                        try {
                          const res = await axios.delete(
                            `http://localhost:5000/contact/delete-message/${msg._id}`,
                          );
                          console.log(res.data.message);
                          setMessages(
                            messages.filter((m) => m._id !== msg._id),
                          );
                          toast.error("Message deleted");
                        } catch (error) {
                          console.error(error?.data?.message || error.message);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
