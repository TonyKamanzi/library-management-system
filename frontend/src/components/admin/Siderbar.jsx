import React from "react";
import { Link } from "react-router-dom";

export default function Siderbar({ open, setOpen }) {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`
        fixed md:static top-0 left-0 z-50
        w-64 min-h-screen bg-gray-900 text-white p-4
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0   // 👈 Always visible on desktop
      `}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Link to="/admin-dashboard" className="text-xl font-bold">
          <img src="/logo.png" alt="Logo" />
        </Link>

        {/* Close button (only visible on mobile) */}
        <button onClick={() => setOpen(false)} className="md:hidden text-white">
          ❌
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-2 my-3">
        {[
          "dashboard",
          "books",
          "users",
          "orders",
          "reports",
          "messages",
          "settings",
        ].map((item) => (
          <Link
            key={item}
            to={`/admin-${item}`}
            className="block p-2 text-gray-400 border-b border-gray-700 hover:bg-blue-50 hover:text-black"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <footer className="absolute bottom-4">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Public Hall Library
        </p>
      </footer>
    </div>
  );
}
