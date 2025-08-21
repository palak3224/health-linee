
import React, {  useEffect } from 'react';
import { X } from 'lucide-react';

const ContactPopup = ({ isOpen, onClose, onSuccess }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      timestamp: Date.now()
    };
    
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    onSuccess();
  };

    useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      const { timestamp } = JSON.parse(savedData);
      const twoHours = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
      if (Date.now() - timestamp < twoHours) {
        onClose();
      } else {
        localStorage.removeItem('contactFormData');
      }
    }
  }, [isOpen, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📧</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
          <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Tell us more about your inquiry..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          We'll get back to you within 24 hours
        </p>
      </div>
    </div>
  );
};

export default ContactPopup;