import React from "react";
import { UserPlus, BookOpen, RotateCcw } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: "Create Account",
      description: "Register as a member to access books and library services.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Borrow Books",
      description: "Search, reserve, and borrow books easily from our catalog.",
    },
    {
      icon: <RotateCcw size={32} />,
      title: "Return & Track",
      description: "Track due dates and manage your borrowing history online.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-3 text-center">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-center text-blue-600">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
