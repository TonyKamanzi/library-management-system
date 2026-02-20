import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  const latestBooks = [
    { src: "/books/rich_dad.jpg" },
    { src: "/books/don_quixote.jpg" },
    { src: "/books/atomic_habits.jpg" },
    { src: "/books/1984.jpg" },
    { src: "/books/the_alchemist.jpg" },
  ];

  return (
    <section className="bg-linear-to-r from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT SIDE - TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to City Hall Library
            </h1>

            <p className="text-gray-600 text-lg">
              Discover thousands of books, digital resources, and community
              knowledge all in one place.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md">
                Explore Books
              </button>

              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition duration-300">
                Join Community
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - SWIPER */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
              New Uploads
            </h2>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1} // ✅ Mobile first
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
            >
              {latestBooks.map((book, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="w-40 h-56 sm:w-36 sm:h-52 md:w-40 md:h-56 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white">
                      <img
                        src={book.src}
                        alt="Book cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
