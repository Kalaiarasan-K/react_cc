import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faHandshake, faChartLine, faCreditCard, faShieldAlt, faMobileAlt, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const ExploreProducts = () => {
  const productCategories = [
    { icon: faPiggyBank, title: 'Bank Accounts', description: 'Explore a variety of bank accounts, from savings to current accounts, tailored to your needs.' },
    { icon: faHandshake, title: 'Loans', description: 'Get personal, home, car, or education loans with flexible interest rates and repayment options.' },
    { icon: faChartLine, title: 'Investments', description: 'Maximize your savings with fixed deposits, mutual funds, and more.' },
    { icon: faCreditCard, title: 'Credit Cards', description: 'Choose from a wide range of credit cards with unique rewards and benefits.' },
    { icon: faShieldAlt, title: 'Insurance', description: 'Protect your future with our comprehensive life, health, and vehicle insurance plans.' },
    { icon: faMobileAlt, title: 'Digital Banking', description: 'Manage your finances anytime, anywhere with our advanced digital banking solutions.' },
  ];

  const featuredProducts = [
    { title: 'Premium Savings Account', description: 'Earn higher interest rates with premium savings accounts that offer exclusive benefits.' },
    { title: 'Personal Loan', description: 'Get instant approval on personal loans with low-interest rates and flexible tenure.' },
    { title: 'Gold Credit Card', description: 'Enjoy exclusive rewards, cashback, and benefits with our premium Gold Credit Card.' },
    { title: 'Car Insurance', description: 'Protect your vehicle with comprehensive car insurance plans and cashless claims.' },
  ];

  const customerReviews = [
    {
      name: 'John Doe',
      review: 'I opened a savings account, and the service was top-notch! The staff was friendly, and the process was seamless.',
      product: 'Savings Account'
    },
    {
      name: 'Jane Smith',
      review: 'I applied for a personal loan online, and it was approved within minutes. Highly recommend their hassle-free service!',
      product: 'Personal Loan'
    },
    {
      name: 'Robert Brown',
      review: 'Their credit cards offer amazing rewards and cashback options. I’ve saved so much by using their Gold Credit Card!',
      product: 'Gold Credit Card'
    }
  ];

  return (
    <div className="container mx-auto my-12 px-4">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#29c33b] to-[#56eb6a] py-12 rounded-2xl text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Explore Our Financial Products</h1>
        <p className="text-lg text-white">Discover the perfect financial solution tailored to meet your needs.</p>
      </section>

      {/* Product Categories */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center text-[#29c33b] mb-12">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FontAwesomeIcon icon={category.icon} className="text-[#29c33b] text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gradient-to-b from-white to-[#f0f5f1] py-12 rounded-2xl shadow-inner">
        <h2 className="text-4xl font-bold text-center text-[#29c33b] mb-12">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:bg-[#f0f5f1]" style={{ width: '280px' }}>
              <FontAwesomeIcon icon={faStar} className="text-[#29c33b] text-3xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-center text-[#29c33b] mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerReviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-[#29c33b] text-3xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{review.name}</h3>
              <p className="text-gray-600 mb-2">"{review.review}"</p>
              <p className="text-gray-500 italic">Product: {review.product}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#29c33b] text-white text-center py-12 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Join us today and experience the best in banking services.</p>
        <button className="bg-white text-[#29c33b] py-3 px-12 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl">
          Apply Now 📝
        </button>
      </section>
    </div>
  );
};

export default ExploreProducts;
