import { useState } from 'react';
import { validateContactForm } from '../utils/Validations';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData.name, formData.email, formData.message);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="bg-white py-16 pt-24 mt-10 flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center text-center">
        {/* Heading and description */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          {isSubmitted && (
            <div className="mb-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 text-primary rounded-lg shadow-md">
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium text-left" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-300 focus:outline-none ${
                  errors.name
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium text-left" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-300 focus:outline-none ${
                  errors.email
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium text-left" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-300 focus:outline-none ${
                  errors.message
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
