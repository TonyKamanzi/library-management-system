import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Join Our Public Library Today
        </h2>

        <p className="mt-4 text-blue-100 text-lg">
          Become a member and explore thousands of books, resources, and
          community programs.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
            Create Account
          </button>

          <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-blue-500 transition duration-300">
            Explore Books
          </button>
        </div>
      </div>
    </section>
  );
}
