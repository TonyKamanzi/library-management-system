import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";

export default function Statistics() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex justify-between items-center gap-8 grid grid-cols-2 md:grid-cols-4  py-12">
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center gap-2 md:w-lg hover:shadow-lg transition duration-300 cursor-pointer">
            <MdLibraryBooks size={40} color="#4CAF50" />
            <p className="text-center text-gray-500">25, 0000+ Books</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center gap-2 md:w-lg hover:shadow-lg transition duration-300 cursor-pointer">
            <BiBookReader size={40} color="#FF9800" />
            <p className="text-center text-gray-500">500+ E-books</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center gap-2 md:w-lg hover:shadow-lg transition duration-300 cursor-pointer">
            <FaUsers size={40} color="#2196F3" />
            <p className="text-center text-gray-500">10, 000+ Members</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md flex flex-col items-center gap-2 md:w-lg hover:shadow-lg transition duration-300 cursor-pointer">
            <GiTrophyCup size={40} color="#FFC107" />
            <p className="text-center text-gray-500">100+ Events</p>
          </div>
        </div>
      </div>
    </section>
  );
}
