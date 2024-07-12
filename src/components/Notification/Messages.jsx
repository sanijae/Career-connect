import React, { useState } from 'react';
import fakeMessages from './fakeMessage';

const Messages = () => {
  const [messages, setMessages] = useState(fakeMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (selectedMessage && reply) {
      const updatedMessages = messages.map((message) =>
        message.id === selectedMessage.id
          ? { ...message, replies: [...message.replies, reply] }
          : message
      );
      setMessages(updatedMessages);
      setReply("");
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="col-span-1 md:col-span-1 bg-white shadow-md rounded p-4">
          <h2 className="text-2xl font-bold mb-4">Inbox</h2>
          <ul className="space-y-4">
            {messages.map((message) => (
              <li
                key={message.id}
                className="p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectMessage(message)}
              >
                <p className="text-lg font-bold">{message.subject}</p>
                <p className="text-gray-700">{message.sender}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Message Details and Reply */}
        {selectedMessage && (
          <div className="col-span-1 md:col-span-2 bg-white shadow-md rounded p-4">
            <h2 className="text-2xl font-bold mb-4">{selectedMessage.subject}</h2>
            <p className="text-gray-700 mb-4">
              <strong>From:</strong> {selectedMessage.sender}
            </p>
            <p className="text-gray-700 mb-4">{selectedMessage.body}</p>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Replies</h3>
              <ul className="space-y-4">
                {selectedMessage.replies.map((reply, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded">
                    {reply}
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleReplySubmit} className="mt-6">
              <label className="block text-gray-700 mb-2">Your Reply</label>
              <textarea
                value={reply}
                onChange={handleReplyChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-4 rounded mt-4"
              >
                Send Reply
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
