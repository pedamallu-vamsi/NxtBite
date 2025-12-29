import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  };

  return (
    <div className="section-contact-section">
      <div className="content contact-content">
        <h2>Contact Us</h2>
        <p>
          Have a question or need assistance? Fill out the form below and our
          team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Query"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Query</button>
        </form>

        <p className="status">{status}</p>
      </div>
    </div>
  );
};

export default ContactForm;
