import React, { useState } from 'react';
import { db } from '../../utils/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const SendMessageForm = ({ applicantId }) => {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await addDoc(collection(db, 'messages'), {
        applicantId,
        message,
        timestamp: new Date()
      });
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mt-6 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 border border-gray-300 rounded mb-4"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={sending}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
