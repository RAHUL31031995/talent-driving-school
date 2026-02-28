const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'html');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Form submission endpoint
app.post('/api/submit-form', async (req, res) => {
  const { name, mobile, email, location, carModel, course, message } = req.body;

  // Validate inputs
  if (!name || !mobile) {
    return res.status(400).json({ error: 'Name and mobile are required' });
  }

  try {
    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name} - Talent Motor Driving School`,
      html: `
        <h2>New Driving School Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Location:</strong> ${location || 'Not specified'}</p>
        <p><strong>Car Model:</strong> ${carModel || 'Not specified'}</p>
        <p><strong>Course:</strong> ${course || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
        <hr>
        <p>Reply via WhatsApp: <strong>${mobile}</strong></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // WhatsApp message (user will need to open WhatsApp manually)
    const whatsappMessage = encodeURIComponent(
      `Hello Talent Motor Driving School,\n\nI am interested in your driving courses.\n\nName: ${name}\nMobile: ${mobile}\nCourse: ${course || 'Not specified'}\n\nPlease get back to me.`
    );
    const whatsappLink = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    res.json({
      success: true,
      message: 'Thank you! We will contact you soon.',
      whatsappLink: whatsappLink,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to submit form. Please try again.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Talent Motor Driving School website running on port ${PORT}`);
  console.log(`📍 Visit http://localhost:${PORT}`);
});
