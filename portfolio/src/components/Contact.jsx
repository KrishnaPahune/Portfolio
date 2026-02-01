import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';
function Contact() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
<section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Feel free to reach out for opportunities, collaborations, or just to connect!
            </p>
            <div className="contact-links">
              <a
                href="mailto:krishna.pahune@example.com"
                className="contact-link"
              >
                <Mail size={20} />
                krishna.pahune@example.com
              </a>
              <a
                href="https://linkedin.com/in/krishnapahune"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin size={20} />
                linkedin.com/in/krishnapahune
              </a>
              <a
                href="https://github.com/krishnapahune"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github size={20} />
                github.com/krishnapahune
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="form-textarea"
              />
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
