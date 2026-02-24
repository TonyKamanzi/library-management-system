import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        <Link to={"/"} className="text-2xl font-bold text-blue-500 flex items-center">
          <img src="/logo.png" alt="City Hall Library logo" className="w-12 h-12 mb-2 object-contain" />
          City <span className="text-gray-500"> Hall</span> Library
        </Link>
        <p className="text-gray-600">
          City Hall Library is committed to providing accessible knowledge and
          resources to the community.
        </p>
        <nav className="flex flex-col">
          <Link className="underline text-blue-600" to="/about">
            About Us
          </Link>
          <Link className="underline text-blue-600" to="/contact">
            Contact
          </Link>
          <Link className="underline text-blue-600" to="/community">
            Community
          </Link>
          <Link className="underline text-blue-600" to={"/store"}>
            Store
          </Link>
        </nav>
        <div className="flex flex-col text-gray-600">
          <p>Follow us on social media:</p>
          <a
            className="text-blue-500 underline"
            href="https://www.facebook.com/CityHallLibrary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="text-blue-500 underline"
            href="https://www.twitter.com/CityHallLibrary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="text-blue-500 underline"
            href="https://www.instagram.com/CityHallLibrary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="text-gray-500">
          <p>Contact information:</p>
          <p>KK 22 STREET SONATUBE</p>
          <p>Phone: (250) 780-924-26</p>
          <p>Email: cityyhalllibrary@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
