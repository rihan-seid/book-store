"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
  );

  

  // Book covers mapping
  const bookCovers = {
    "Romance": "https://images.pexels.com/photos/265045/pexels-photo-265045.jpeg",
    "Science": "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg",
    "Medicine": "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    "Business": "https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg",
    "History": "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg",
    "Religion": "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg",
    "Computers": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    "Science Fiction": "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg",
    "Self-Help": "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    "Fiction": "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    "Technology": "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    "Mathematics": "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    "EVERYTHING IS TUBERCULOSIS": "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg",
    "JOHN GREEN": "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
  };

  const handleCategoryClick = (category) => {
    setCurrentImage(bookCovers[category] || bookCovers["Romance"]);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const featuredBooks = [
    {
      id: 1,
      title: "DEVILS the JOB",
      author: "ABERCROMBLE",
      price: "$12.99",
      image: "https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg"
    },
    {
      id: 2,
      title: "DIFFERENT KIND OF SOUVES",
      author: "PACINDA ARDENN",
      price: "$14.99",
      image: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg"
    },
    {
      id: 3,
      title: "We Solve Murders",
      author: "RICHARD OSMAN",
      price: "$10.99",
      image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
    },
    {
      id: 4,
      title: "ONYX STORM",
      author: "REBECCA YARROS",
      price: "$13.99",
      image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg"
    },
    {
      id: 5,
      title: "THE COURAGE TO BE DISLIKED",
      author: "ICHIRO KISHIMI",
      price: "$9.99",
      image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg"
    },
    {
      id: 6,
      title: "Mickey7",
      author: "EDWARD ASHTON",
      price: "$12.60",
      image: "https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg"
    },
    {
      id: 7,
      title: "The Nightingale",
      author: "Kristin Hannah",
      price: "$12.59",
      image: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg"
    },
    {
      id: 8,
      title: "Conclave",
      author: "Robert Harris",
      price: "$11.44",
      image: "https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg"
    },
    {
      id: 9,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "$12.59",
      image: "https://www.gutenberg.org/cache/epub/147/pg147.cover.medium.jpg"
    },
    {
      id: 10,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      price: "$12.72",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/The_Iron_Heel_by_Jack_London_1908.jpg"
    }
  ];

  const movieTieIns = [
    {
      id: 1,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: '$14.99',
      image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg',
    },
    {
      id: 2,
      title: 'Mickey7',
      author: 'Edward Ashton',
      price: '$12.60',
      image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg',
    },
    {
      id: 3,
      title: 'The Nightingale',
      author: 'Kristin Hannah',
      price: '$12.59',
      image: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg',
    },
    {
      id: 4,
      title: 'The Salt Path',
      author: 'Raynor Winn',
      price: '$11.44',
      image: 'https://images.pexels.com/photos/159711/pexels-photo-159711.jpeg',
    },
    {
      id: 5,
      title: 'Conclave',
      author: 'Robert Harris',
      price: '$10.99',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    },
    {
      id: 6,
      title: "Anything For You",
      author: "Sophie McKenzie",
      price: "$6.99",
      image: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg"
    },
    {
      id: 7,
      title: "Here One Moment",
      author: "Liane Moriarty",
      price: "$12.72",
      image: "https://images.pexels.com/photos/265045/pexels-photo-265045.jpeg"
    },
    {
      id: 8,
      title: "The Mother's Secret",
      author: "Kathryn Croft",
      price: "$5.99",
      image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg"
    },
    {
      id: 9,
      title: "The Peacock and the Sparrow",
      author: "I. S. Berry",
      price: "$11.49",
      image: "https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg"
    },
    {
      id: 10,
      title: "The Russian",
      author: "Ben Coes",
      price: "$5.99",
      image: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg"
    }
  ];

  const bookBlogs = [
    {
      id: 1,
      title: "Read More, Learn More",
      author: "Daily Literacy",
      price: "Free",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Quiet Places to Read",
      author: "Page Journey",
      price: "Free",
      image: "https://images.unsplash.com/photo-1602524817045-e79f8d10d86b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Books that Changed Lives",
      author: "Inspire Reads",
      price: "Free",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Reading as Ritual",
      author: "Mindful Books",
      price: "Free",
      image: "https://images.unsplash.com/photo-1610878180933-0073d6b4cde7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Favorite Fictional Worlds",
      author: "Fantasy Talk",
      price: "Free",
      image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const thrillers = [
    {
      id: 1,
      title: "Anything For You",
      author: "Sophie McKenzie",
      price: "$6.99",
      image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg"
    },
    {
      id: 2,
      title: "Here One Moment",
      author: "Liane Moriarty",
      price: "$12.72",
      image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
    },
    {
      id: 3,
      title: "The Mother's Secret",
      author: "Kathryn Croft",
      price: "$5.99",
      image: "https://images.pexels.com/photos/159711/pexels-photo-159711.jpeg"
    },
    {
      id: 4,
      title: "The Peacock and the Sparrow",
      author: "I. S. Berry",
      price: "$11.49",
      image: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg"
    },
    {
      id: 5,
      title: "The Russian",
      author: "Ben Coes",
      price: "$5.99",
      image: "https://images.pexels.com/photos/265045/pexels-photo-265045.jpeg"
    }
  ];

  // Category data
  const popularCategories = ['Body, Mind & Spirit', 'Business', 'Computers', 'Health & Fitness', 'History', 'Religion', 'Science'];

  const fictionCategories = [
    'Children\'s Fiction', 'Comics & Graphic Novels', 'Crime', 'Fantasy',
    'General Fiction', 'Literary', 'Romance', 'Science Fiction', 'Thrillers',
    'Young Adult Fiction'
  ];

  const nonFictionCategories = [
    'Archaeology', 'Architecture', 'Art', 'Biography', 'Business',
    'Children\'s Nonfiction', 'Cooking', 'Crafts & Hobbies', 'Design', 'Drama',
    'Education', 'Relationships', 'Folklore & Mythology', 'Foreign Language',
    'Games & Activities', 'Gardening', 'Health & Fitness', 'House & Home',
    'Humor', 'Language Arts', 'Law', 'Literary Collections', 'Literary Criticism',
    'True Crime', 'Young Adult Nonfiction'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Main Container */}


      {/* Amazing Book Display */}
  <div className="container mx-auto px-4 py-8">
        <div className="w-full ">
    <div class="text-center mb-8">
      <span class="text-5xl md:text-6xl font-extrabold text-[#2b5c91] font-serif drop-shadow-md">
        <span class="text-green-600">Book</span>Store
        <span class="text-green-600">.com</span>
      </span>
    </div>


    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl flex flex-col md:flex-row items-center overflow-hidden shadow-lg p-4 md:p-0">

        <div class="bg-white p-6 rounded-lg border border-gray-200 text-center md:text-left flex-shrink-0 mb-4 md:mb-0 md:mr-6 shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 class="text-xl md:text-2xl font-bold mb-3 text-blue-800">New to eBooks.com?</h2>
        <p class="text-blue-600 hover:underline cursor-pointer font-semibold">Learn more</p>
      </div>

       <div class="w-full p-4 md:p-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search by title, author, subject or ISBN"
          class="flex-grow w-full rounded-full px-6 py-3 md:py-4 bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-transparent transition-all duration-300 text-base md:text-lg shadow-sm"
        />
        <button class="bg-[#0d4b8c] text-white font-semibold px-8 py-3 md:py-4 rounded-full hover:bg-[#093869] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 text-base md:text-lg shadow-lg">
          GO
        </button>
      </div>
    </div>
  </div>
</div>





      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4 space-y-8">
          {/* <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">New to eBooks.com?</h2>
            <p className="text-blue-600 hover:underline cursor-pointer">Learn more</p>
          </div> */}

          <div className="h-px bg-gray-200"></div>

          {/* Newsletter Signup */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Sign up for our newsletter</h2>
            <p className="text-gray-600 mb-4">Specials, new title alerts and more!</p>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold w-full">
              Sign Up
            </button>
          </div>

          {/* Popular Categories */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            {/* Popular Categories */}
            <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
            <ul className="space-y-2 mb-6">
              {popularCategories.map((category) => (
                <li key={category} className="text-blue-600 hover:underline cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-300 my-4"></div>

            {/* Fiction */}
            <h3 className="font-bold text-lg mb-4">Fiction</h3>
            <ul className="space-y-2 mb-6">
              {fictionCategories.map((category) => (
                <li key={category} className="text-blue-600 hover:underline cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>


            <div className="border-t border-gray-300 my-4"></div>

            {/* Non-Fiction */}
            <h3 className="font-bold text-lg mb-4">Non-Fiction</h3>
            <ul className="space-y-2">
              {nonFictionCategories.map((category) => (
                <li key={category} className="text-blue-600 hover:underline cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Search */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-2">Search by title, author, subject or ISBN</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-8">
          {/* Featured Titles */}
       <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Featured Titles</h2>
      <div className="flex space-x-4">
        <div className="text-blue-600 hover:underline cursor-pointer">Just Arrived</div>
        <div className="text-blue-600 hover:underline cursor-pointer">Bestsellers</div>
      </div>
    </div>

    <Swiper
      modules={[FreeMode, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      freeMode={true}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      className="featured-swiper"
    >
      {featuredBooks.map((book) => (
        <SwiperSlide key={book.id}>
          <motion.div 
            className="cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ duration: 0. }}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover object-center rounded-t-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/400x600/cccccc/333333?text=No+Cover`;
                }}
              />
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-sm line-clamp-2">{book.title}</h3>
              <p className="text-gray-600 text-xs">{book.author}</p>
              <p className="text-blue-600 font-bold text-sm">{book.price}</p>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

          {/* Interactive Book Display */}
          <div className="flex flex-col md:flex-row gap-0 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Left Side - Dynamic Book Image */}
            <div className="w-full md:w-1/4 h-80">
              <img
                src={currentImage}
                alt="Selected book cover"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-3/4 p-4">
              <p className="text-gray-600 text-sm mb-4">A single book can change your life</p>

              <div className="mb-3">
                <h2 className="text-md font-semibold mb-1">Best sellers in...</h2>
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full px-2 py-1 border border-gray-200 rounded text-sm
                            focus:outline-none focus:ring-1 focus:ring-blue-300
                            text-gray-800 bg-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                <div className="space-y-1">
                  {["Romance", "Science", "Medicine", "Business", "History", "Religion"].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className="w-full text-left px-2 py-1 hover:bg-lime-400 rounded transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="space-y-1">
                  {["Computers", "Science Fiction", "Self-Help", "Fiction", "Technology", "Mathematics"].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className="w-full text-left px-2 py-1 hover:bg-lime-400 rounded transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <div
                    className="group relative h-16 overflow-hidden rounded cursor-pointer"
                    onClick={() => handleCategoryClick("EVERYTHING IS TUBERCULOSIS")}
                  >
                    <img
                      src={bookCovers["EVERYTHING IS TUBERCULOSIS"]}
                      alt="Everything is Tuberculosis book cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <span className="text-white text-xs font-bold italic px-2 text-center">
                        EVERYTHING IS TUBERCULOSIS
                      </span>
                    </div>
                  </div>

                  <div className="h-4"></div>
                  <div className="h-4"></div>
                  <div className="h-4"></div>

                  <div
                    className="group relative h-16 overflow-hidden rounded cursor-pointer"
                    onClick={() => handleCategoryClick("JOHN GREEN")}
                  >
                    <img
                      src={bookCovers["JOHN GREEN"]}
                      alt="John Green book cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <span className="text-white text-xs font-bold italic px-2 text-center">
                        JOHN GREEN
                      </span>
                    </div>
                  </div>

                  <div className="h-4"></div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-2">
                <p className="text-xs font-medium">ICHIRO KISHIMI and FUMITAKE KOGA</p>
              </div>
            </div>
          </div>

          {/* Movie Tie-Ins */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Movie Tie-Ins</h2>
            <Swiper
              modules={[FreeMode, Pagination]}
              spaceBetween={16}
              freeMode={true}
              grabCursor={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {movieTieIns.map((book) => (
                <SwiperSlide key={book.id}>
                  <div className="bg-white rounded shadow-sm p-2 cursor-pointer hover:shadow-md transition">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="mt-2">
                      <h3 className="font-semibold text-sm line-clamp-2">{book.title}</h3>
                      <p className="text-gray-600 text-xs">{book.author}</p>
                      <p className="text-blue-600 font-bold text-sm">{book.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thrillers To Tingle Your Spine */}
          <div className="bg-gray-50 p-4 gap-4 rounded-lg border border-gray-200">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">Thrillers To Tingle Your Spine</h2>
              <div className="mt-2 border-b border-dashed border-gray-300 w-full"></div>
            </div>

            <Slider {...sliderSettings}>
              {thrillers.map((book) => (
                <div key={book.id} className="px-2">
                  <div className="cursor-pointer group">
                    <div className="mb-4 overflow-hidden rounded-lg shadow-sm">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-1 px-1">
                      <h3 className="font-bold text-sm text-gray-900 line-clamp-1">{book.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-1">{book.author}</p>
                      <p className={`text-sm font-bold ${book.price === 'US$1.99' ? 'text-green-600' : 'text-blue-600'}`}>
                        {book.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="flex justify-between mt-4">
              <button className="slider-prev p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="slider-next p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="relative bg-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2">📚 Blog of books</h2>
            <p className="text-base text-indigo-500"></p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            grabCursor
            loop
            speed={600}
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 2.5,
              slideShadows: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            pagination={{
              clickable: true,
              el: ".movie-pagination",
              bulletClass: "movie-bullet",
              bulletActiveClass: "movie-bullet-active",
            }}
            navigation={{
              nextEl: ".movie-button-next",
              prevEl: ".movie-button-prev",
            }}
            className="swiper-container"
          >
            {bookBlogs.map((book) => (
              <SwiperSlide key={book.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <p className="text-indigo-600 font-bold mt-2">{book.price}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center mt-8">
            <button className="movie-button-prev w-10 h-10 bg-white border shadow rounded-full flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="movie-pagination flex gap-2" />
            <button className="movie-button-next w-10 h-10 bg-white border shadow rounded-full flex items-center justify-center ml-4">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <style jsx global>{`
        .swiper-container {
          padding-bottom: 3rem;
        }
        .movie-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .movie-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(99, 102, 241, 0.3);
          border-radius: 9999px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .movie-bullet-active {
          width: 28px;
          background-color: #6366f1;
        }
      `}</style>
      </section>
      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 text-gray-600 text-sm flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/et.png"
              alt="Ethiopia Flag"
              className="w-5 h-4 object-cover"
            />
            <span>Ethiopia (USD)</span>
          </div>

          <span className="hidden md:inline-block">|</span>

          <div className="flex flex-wrap items-center gap-2 justify-center">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>●</span>
            <a href="#" className="hover:underline">Copyright</a>
            <span>●</span>
            <a href="#" className="hover:underline">Terms of Use & Licenses</a>
            <span>●</span>
            <a href="#" className="hover:underline">Affiliates</a>
            <span>●</span>
            <a href="#" className="hover:underline">Authors</a>
            <span>●</span>
            <a href="#" className="hover:underline">Publishers</a>
          </div>

          <span className="hidden md:inline-block">|</span>

          <div>
            <p>6,505,829 members ● 2,733,931 ebooks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;