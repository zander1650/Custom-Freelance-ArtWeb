
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // <-- Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // <-- Replace with your EmailJS template ID
      form.current,
      'YOUR_USER_ID' // <-- Replace with your EmailJS public key
    )
      .then(() => {
        setSent(true);
      }, (err) => {
        setError('Failed to send. Please try again.');
      });
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Me</h1>
      <p>Interested in commissioning a piece or have questions about my work? I'd love to hear from you!</p>
      <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
        <input type="text" name="user_name" placeholder="YourName" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #f4e4bc' }} />
        <input type="email" name="user_email" placeholder="Your Email" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #f4e4bc' }} />
        <textarea name="message" placeholder="Your Message and Commission Details" required rows={5} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #f4e4bc' }} />
        <button type="submit" style={{ background: '#f59e0b', color: '#2c2418', border: 'none', borderRadius: '6px', padding: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Send Email</button>
        {sent && <span style={{ color: 'green' }}>Message sent! Thank you.</span>}
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </form>
      <p><strong>Tik Tok:</strong> @add</p>
      <p><strong>X:</strong> @add</p>
      <p style={{ fontSize: '0.95em', color: '#5a4a3a' }}>Please include details about your commission request, such as size, medium, subject, and budget.</p>
    </div>
  );
}

export default Contact;