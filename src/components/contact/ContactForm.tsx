import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useFormValidation } from '../../hooks/useFormValidation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const { errors, validateForm } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm(formData)) {
      setIsSending(true);

      try {
        const response = await emailjs.send(
          'service_6hs79yi', // Replace with your EmailJS Service ID
          'template_hzxs0l3', // Replace with your EmailJS Template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          't3_tDagBXz-pBmMkJ' // Replace with your EmailJS User ID
        );

        if (response.status === 200) {
          alert('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Failed to send email:', response);
          alert('Something went wrong. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                 transition-colors flex items-center justify-center"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : <>
          <Send size={20} className="mr-2" />
          Send Message
        </>}
      </button>
    </form>
  );
};

export default ContactForm;
