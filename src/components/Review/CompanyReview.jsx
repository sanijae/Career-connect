import React, { useState } from 'react';
import fakeCompanyReviews from './fakeCompany';

const CompanyReviews = () => {
  const [companies, setCompanies] = useState(fakeCompanyReviews);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [newReview, setNewReview] = useState({ reviewer: '', rating: 0, comment: '' });

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (selectedCompany && newReview.reviewer && newReview.rating && newReview.comment) {
      const updatedCompanies = companies.map((company) =>
        company.id === selectedCompany.id
          ? { ...company, reviews: [...company.reviews, { ...newReview, id: Date.now().toString() }] }
          : company
      );
      setCompanies(updatedCompanies);
      setNewReview({ reviewer: '', rating: 0, comment: '' });
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Company Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company List */}
        <div className="col-span-1 md:col-span-1 bg-white shadow-md rounded p-4">
          <h2 className="text-2xl font-bold mb-4">Companies</h2>
          <ul className="space-y-4">
            {companies.map((company) => (
              <li
                key={company.id}
                className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectCompany(company)}
              >
                <p className="text-lg font-bold">{company.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Details and Reviews */}
        {selectedCompany && (
          <div className="col-span-1 md:col-span-2 bg-white shadow-md rounded p-4">
            <h2 className="text-2xl font-bold mb-4">{selectedCompany.name}</h2>
            <h3 className="text-xl font-bold mb-2">Reviews</h3>
            <ul className="space-y-4 mb-6">
              {selectedCompany.reviews.map((review) => (
                <li key={review.id} className="p-4 bg-gray-100 rounded">
                  <p className="text-lg font-bold">{review.reviewer}</p>
                  <p className="text-gray-700">Rating: {review.rating}</p>
                  <p className="text-gray-700">{review.comment}</p>
                </li>
              ))}
            </ul>
            <form onSubmit={handleReviewSubmit} className="mt-6">
              <h3 className="text-xl font-bold mb-2">Add a Review</h3>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                name="reviewer"
                value={newReview.reviewer}
                onChange={handleReviewChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <label className="block text-gray-700 mb-2">Rating</label>
              <select
                name="rating"
                value={newReview.rating}
                onChange={handleReviewChange}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              >
                <option value="0">Select Rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <label className="block text-gray-700 mb-2">Your Review</label>
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleReviewChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded mt-4"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyReviews;
