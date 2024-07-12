import React, { useState } from 'react';
import { db } from '../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const SubscriptionPage = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      // Simulating subscription by adding to Firestore collection
      const docRef = await addDoc(collection(db, 'subscribers'), {
        email,
        subscribedAt: new Date()
      });

      console.log('Subscription successful! Document ID:', docRef.id);
      setSubscriptionSuccess(true);
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscriptionSuccess(false);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Subscribe for Updates</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md ${subscribing ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={subscribing}
          >
            {subscribing ? 'Subscribing...' : 'Subscribe'}
          </button>
          {subscriptionSuccess && (
            <p className="mt-3 text-green-500 text-sm text-center">Subscription successful! Thank you for subscribing.</p>
          )}
          {!subscriptionSuccess && subscriptionSuccess !== null && (
            <p className="mt-3 text-red-500 text-sm text-center">Subscription failed. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubscriptionPage;
