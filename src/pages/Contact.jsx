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
    <section className="bg-white py-16 pt-24 mt-10">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-center md:space-x-12 max-w-6xl">
        <div className="md:w-5/12 mb-8 md:mb-0">
          <h2 className="text-4xl flex justify-center font-extrabold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className='flex text-center md:text-left px-4 md:px-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="md:w-5/12">
          {isSubmitted && (
            <div className="max-w-md mx-auto mb-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 text-primary rounded-lg shadow-md">
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`
                  w-full px-3 py-2.5 border rounded-lg 
                  transition-all duration-300 
                  focus:outline-none 
                  ${errors.name 
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
                `}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full px-3 py-2.5 border rounded-lg 
                  transition-all duration-300 
                  focus:outline-none 
                  ${errors.email 
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
                `}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`
                  w-full px-3 py-2.5 border rounded-lg 
                  transition-all duration-300 
                  focus:outline-none 
                  ${errors.message 
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
                `}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="
                w-full py-2.5 rounded-lg 
                bg-gradient-to-r from-blue-500 to-purple-600 
                text-white font-semibold 
                hover:from-blue-600 hover:to-purple-700 
                transition-all duration-300 
                transform hover:scale-[1.02] 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-300
              "
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
