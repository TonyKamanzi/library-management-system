import React from "react";
import Siderbar from "../../components/admin/Siderbar";
import AdminNavbar from "../../components/admin/AdminNavbar";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Siderbar open={isOpen} setOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Mobile Toggle Button (hidden on desktop) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          ☰
        </button>

        <AdminNavbar />
      </div>
    </div>
  );
}
