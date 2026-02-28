# Talent Motor Driving School Website

A professional, modern website for Talent Motor Driving School in South Delhi. Built with Node.js, Express, and responsive design.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Professional Layout**: Modern soothing UI with smooth animations
- **Contact Form**: Submit inquiries via email and WhatsApp
- **Service Showcase**: Display courses (Automatic, Manual, Intensive)
- **Coverage Areas**: Show all service areas in South Delhi
- **Mobile Optimized**: Mobile-first approach with hamburger menu
- **Fast Loading**: Lightweight and optimized for speed

## 📋 Sections

1. **Navigation Bar** - Sticky header with smooth scrolling
2. **Hero Section** - Eye-catching banner with call-to-action
3. **About Us** - Business introduction with key highlights
4. **Services** - Course offerings and features
5. **Why Choose Us** - 6 key reasons to select Talent School
6. **Coverage Areas** - Map of service regions in South Delhi
7. **Contact Section** - Email/WhatsApp inquiry form
8. **Footer** - Business info and copyright

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Email Service**: Nodemailer (Gmail SMTP)
- **Hosting**: Render.com (Free tier)
- **Icons**: FontAwesome 6
- **Images**: Unsplash (Open source)

## ⚙️ Installation & Setup

### Local Development

1. **Clone and navigate to directory**:
```bash
cd talent-driving-school
```

2. **Install dependencies**:
```bash
npm install
```

3. **Create `.env` file** (copy from `.env.example`):
```bash
cp .env.example .env
```

4. **Configure environment variables** in `.env`:
```
PORT=3000
EMAIL_USER=rajkhan999045@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
WHATSAPP_NUMBER=8595773287
```

### Getting Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Create an "App Password" for Gmail
4. Use this 16-character password in `.env`

### Run Locally

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## 🚀 Deployment on Render.com

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/talent-driving-school.git
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Fill in details:
   - **Name**: talent-motor-driving-school
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`

5. Add Environment Variables:
   - `EMAIL_USER`: rajkhan999045@gmail.com
   - `EMAIL_PASSWORD`: Your Gmail App Password
   - `WHATSAPP_NUMBER`: 8595773287

6. Click "Deploy"

Your website will be live at: `https://talent-motor-driving-school.onrender.com`

## 📧 Form Submission

When users submit the form:
1. Email is sent to the school's inbox with all details
2. A success notification appears
3. WhatsApp link opens automatically (on mobile/desktop with WhatsApp)
4. Form resets for next submission

## 🎨 Customization

### Colors
Edit the CSS variables in `public/css/style.css`:
```css
:root {
    --primary-color: #1e40af;      /* Blue */
    --accent-color: #f59e0b;       /* Orange */
    --secondary-color: #0f172a;    /* Dark */
}
```

### Contact Info
Update in both `public/index.html` and `server.js`:
- Phone numbers
- Email address
- WhatsApp number
- Service areas
- Business hours

### Content
Edit text, images, and descriptions directly in `public/index.html`

## 📱 Mobile Responsiveness

The website is fully responsive:
- Desktop: Multi-column layouts
- Tablet: Adjusted spacing and sizing
- Mobile: Single column, hamburger menu, touch-friendly buttons

## 🔒 Security Notes

- Never commit `.env` file to GitHub
- Use app-specific passwords for Gmail
- Consider adding rate limiting for form submissions
- Validate all inputs on both client and server

## 📞 Contact Information

**Talent Motor Driving School**
- Phone: +91-9891897624
- WhatsApp: +91-8595773287
- Email: rajkhan999045@gmail.com
- Location: South Delhi, India
- Hours: 6:00 AM - 8:00 PM (Daily)

## 📄 License

MIT License - Feel free to use and modify

## 🎯 Future Enhancements

- [ ] Add student testimonials section
- [ ] Integrate payment gateway
- [ ] Add online booking/scheduling system
- [ ] Certificate certifications section
- [ ] Blog for driving tips
- [ ] Photo gallery of vehicles
- [ ] Map integration for location
- [ ] SMS notifications
- [ ] Admin dashboard
- [ ] Student portal

## 📞 Support

For questions or issues, contact the development team or create an issue in the repository.

---

**Created with ❤️ for Talent Motor Driving School**
