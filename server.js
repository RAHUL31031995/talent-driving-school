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
    // Create WhatsApp message with form details
    const whatsappMessage = encodeURIComponent(
      `🚗 *New Inquiry from Talent Motor Driving School Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Mobile:* ${mobile}\n` +
      `*Email:* ${email || 'Not provided'}\n` +
      `*Location:* ${location || 'Not specified'}\n` +
      `*Car Model:* ${carModel || 'Not specified'}\n` +
      `*Course:* ${course || 'Not specified'}\n` +
      `*Message:* ${message || 'No additional message'}\n\n` +
      `Please respond to this inquiry.`
    );
    
    const whatsappLink = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Success response with WhatsApp link
    res.json({
      success: true,
      message: 'Thank you! Opening WhatsApp to send your inquiry...',
      whatsappLink: whatsappLink,
    });

    // Log the inquiry (optional - for records)
    console.log(`✅ New Inquiry: ${name} (${mobile}) - Course: ${course}`);
    
  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).json({ error: 'Failed to process inquiry. Please try again.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Talent Motor Driving School website running on port ${PORT}`);
  console.log(`📍 Visit http://localhost:${PORT}`);
});
