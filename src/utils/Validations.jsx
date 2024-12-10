export const validateContactForm = (name, email, message) => {
    const errors = {};
  
    if (!name.trim()) {
      errors.name = "Name is required";
    }
  
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
  
    if (!message.trim()) {
      errors.message = "Message is required";
    }
  
    return errors;
  };
  