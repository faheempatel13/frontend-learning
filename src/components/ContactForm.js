import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formData.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded shadow">
      <input 
        type="text" placeholder="Name" className="w-full p-2 border"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        type="email" placeholder="Email" className="w-full p-2 border"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <textarea 
        placeholder="Message" className="w-full p-2 border"
        onChange={(e) => setFormData({...formData, message: e.target.value})}
      ></textarea>
      <button className="w-full bg-black text-white p-2 rounded">Send Message</button>
    </form>
  );
};

export default ContactForm;