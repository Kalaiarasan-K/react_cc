import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState(1000); // Sample amount for the transaction

  const handlePayment = (e) => {
    e.preventDefault();
    // Payment logic here
    alert('Payment Successful! 💳');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#f0f5f1] to-white">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-[#29c33b] mb-6">Complete Your Payment 💳</h2>

        {/* Payment Details Form */}
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9123 4567"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#29c33b] focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cardName">
              Cardholder's Name
            </label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#29c33b] focus:border-transparent"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#29c33b] focus:border-transparent"
                required
              />
            </div>

            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#29c33b] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-[#f0f5f1] p-4 rounded-md shadow-inner mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Payment Summary</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Total Amount:</span>
              <span className="text-lg font-bold text-gray-800">${amount}</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#29c33b] to-[#56eb6a] text-white py-3 px-12 rounded-full text-lg font-semibold transition-transform duration-500 transform hover:scale-105"
            >
              Pay Now 💸
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
