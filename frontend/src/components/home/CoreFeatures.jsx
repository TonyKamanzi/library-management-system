import React from "react";
import { BookOpen, Search, Users, BarChart3 } from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Smart Book Management",
      description:
        "Organize, update, and manage thousands of books efficiently within the system.",
    },
    {
      icon: <Search size={32} />,
      title: "Advanced Search",
      description:
        "Quickly find books by title, author, category, or publication year.",
    },
    {
      icon: <Users size={32} />,
      title: "Member Accounts",
      description:
        "Users can track borrowing history, due dates, and manage their profiles.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Admin Dashboard",
      description:
        "Monitor borrowing activity, manage members, and generate reports easily.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Core Features
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage and explore a modern public library.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
