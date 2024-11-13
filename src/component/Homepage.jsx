import React, { useState } from 'react';
import { BsBank, BsWhatsapp } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { VscBell } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger menu icons
import credit from '../image/credit_card.jpeg';
import income from '../image/income.jpg';
import edu from '../image/education.jpg';
import minimum from '../image/minimum.jpeg';
import car from '../image/car.jpeg';
import account from '../image/bank_account.jpg';
import { Link, useNavigate } from 'react-router-dom';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', query);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cardData = [
    { image: credit, title: "💳 Security tips for Credit Cards" },
    { image: income, title: "💰 Use FD for monthly income" },
    { image: edu, title: "📚 Repay education loan easily" },
    { image: minimum, title: "💳 Credit Card & Minimum Payment" },
    { image: car, title: "🚗 Get the best car loans" },
    { image: account, title: "🏦 Open a digital account" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* Top Navigation Bar */}
        <div className="bg-gradient-to-r from-[#29c33b] to-[#56eb6a] py-2 px-4 flex justify-between items-center text-white text-sm">
          {/* Left Side Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Personal</a>
            <select name="" id="" className="bg-transparent hover:underline rounded-full px-2 py-1">
              <option value="option1">Business</option>
              <option value="option2">Normal</option>
              <option value="option3">Corporate</option>
            </select>
            <a href="#" className="hover:underline">Priority</a>
            <a href="#" className="hover:underline">Burgundy</a>
            <a href="#" className="hover:underline">NRI</a>
            <a href="#" className="hover:underline" onClick={() => scrollToSection('about')}>About Us</a> {/* New "About Us" link */}
            <a href="#" className="hover:underline" onClick={() => scrollToSection('contact')}>Support</a>
          </div>


          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <select name="" id="" className="bg-transparent rounded-md px-2 py-1">
                <option value="option1">English 🇬🇧</option>
                <option value="option2">Tamil 🇮🇳</option>
                <option value="option3">Hindi 🇮🇳</option>
              </select>
            </div>
            {/* Icons for WhatsApp, Location, and Notification */}
            <span className="text-white cursor-pointer">
              <BsWhatsapp />
            </span>
            <span className="text-white cursor-pointer">
              <SlLocationPin />
            </span>
            <span className="relative cursor-pointer">
              <VscBell />
              <span className="absolute bottom-2 left-2 bg-red-500 text-white rounded-full text-xs px-1">3</span>
            </span>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white py-4 shadow-lg flex justify-between items-center px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BsBank className="text-[#29c33b]" size={30} />
            <span className="text-[#40ea54] font-extrabold text-3xl tracking-wide">LAISH BANK</span>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden relative">
            <button onClick={toggleMenu}>
              {menuOpen ? <FiX size={30} className="text-[#29c33b]" /> : <FiMenu size={30} className="text-[#29c33b]" />}
            </button>

            {/* Dropdown Menu (positioned below hamburger icon) */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#f0f5f1] hover:text-[#29c33b] font-semibold">Explore Products 🏦</a>
                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#f0f5f1] hover:text-[#29c33b] font-semibold">Grab Deals 🎁</a>
                <a href=""><Link to="/payment" className="block px-4 py-2 text-gray-900 hover:bg-[#f0f5f1] hover:text-[#29c33b] font-semibold">Make Payments 💸</Link></a>                
                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#f0f5f1] hover:text-[#29c33b] font-semibold">Bank Smart 💳</a>
                <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#f0f5f1] hover:text-[#29c33b] font-semibold">Apply Now 📝</a>
              </div>
            )}
          </div>

          {/* Navigation Links (hidden on small screens) */}
          <div className={`hidden sm:flex flex-wrap justify-center space-x-4 sm:space-x-8`}>
            <Link to="/explore" className="block px-4 py-2 text-gray-900 pt-0 hover:text-[#29c33b] font-semibold">Explore Products 🏦</Link>
            <Link to="/deals" className="block px-4 py-2 text-gray-900 pt-0 hover:text-[#29c33b] font-semibold">Grab Deals 🎁</Link>
            <Link to="/payment" className="block px-4 py-2 text-gray-900 pt-0 hover:text-[#29c33b] font-semibold">Make Payments 💸</Link>
            <a href="#" className="text-gray-900 hover:text-[#29c33b] pt-0 font-semibold">Bank Smart 💳</a>
            <a href="#" className="text-gray-900 hover:text-[#29c33b] font-semibold">Apply Now 📝</a>
          </div>
        </div>
      </header>
      npm audit
      <main className="mt-36 px-4 sm:px-8">
        {/* Search Component */}
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl flex items-center border-2 rounded-full shadow-xl bg-white transition-all duration-500 focus-within:ring-4 focus-within:ring-[#29c33b]">
            <span className="pl-4 text-gray-500">🔍</span>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search for products, services, and more..."
              className="w-full px-4 py-3 text-gray-700 bg-white rounded-l-full focus:outline-none focus:ring-none"
            />
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-[#29c33b] to-[#56eb6a] text-white px-6 py-3 rounded-r-full transition-transform hover:scale-105 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>

        {/* Card Grid Component */}
        <div className="bg-gradient-to-b from-white to-[#f0f5f1] py-12 rounded-3xl shadow-inner">
          <h2 className="text-5xl font-bold text-center text-[#29c33b] mb-12">Unlearn, Learn & Relearn 🔄</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:translate-y-[-10px] hover:bg-[#f0f5f1]"
                style={{ width: '280px' }}
              >
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-[#29c33b] to-[#56eb6a] text-white py-3 px-12 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl">
              View All 📜
            </button>
          </div>
        </div>
      </main>

      {/* About Us Section */}
<section id='about' className="py-16 bg-gradient-to-b from-[#f0f5f1] to-white rounded-2xl shadow-inner">
  <div className="container mx-auto px-6 sm:px-12 text-center">
    <h2 className="text-4xl font-bold text-[#29c33b] mb-6">About Laish Bank 💼</h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      Laish Bank is a forward-thinking financial institution committed to providing innovative and reliable banking solutions to individuals, businesses, and corporations. 
      We believe in the power of banking to unlock opportunities for all and strive to create a world where financial services are accessible, transparent, and empowering for everyone. 
      Our mission is to redefine banking through technology, customer-centricity, and trust.
    </p>
    <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
      From personal savings to corporate loans, we offer a wide range of financial products designed to cater to the diverse needs of our customers. 
      Whether you're planning for your future or managing daily finances, we’re here to help you succeed with banking that grows with you.
    </p>
    <div className="mt-12">
      <button className="bg-gradient-to-r from-[#29c33b] to-[#56eb6a] text-white py-3 px-12 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl">
        Learn More 📘
      </button>
    </div>
  </div>
</section>


      {/* Contact Information */}
      <footer>
        <section id='contact' className="bg-gradient-to-r from-[#2e2f2e] to-[#3b3b3b] text-gray-200 py-12 rounded-t-3xl">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-8">Contact Us 📞</h2>
            <div className="flex flex-col md:flex-row justify-around">
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold">Customer Support 🤝</h3>
                <p className="mt-2">Helpline: 1800-123-456</p>
                <p>Email: support@laishbank.com</p>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold">Corporate Office 🏢</h3>
                <p className="mt-2">123 Bank Street, Financial City</p>
                <p>New York, NY 10001</p>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold">Branch Locator 📍</h3>
                <p className="mt-2">Find a branch near you</p>
                <button className="bg-white text-[#29c33b] py-2 px-6 rounded-full text-md font-semibold transition-all duration-500 transform hover:scale-110 hover:bg-[#29c33b] hover:text-white">
                  Locate 🚀
                </button>
              </div>
            </div>
            <p className="mt-12 text-sm">© 2024 Laish Bank. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Homepage;
