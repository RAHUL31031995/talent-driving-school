# 🚗 Talent Motor Driving School Website - SETUP GUIDE

## ✅ What's Been Created

Your professional driving school website is ready! Here's what you have:

### 📁 Project Structure
```
talent-driving-school/
├── public/
│   ├── index.html          # Main website
│   ├── css/
│   │   └── style.css       # Professional styling
│   └── js/
│       └── script.js       # Form handling & interactivity
├── server.js               # Express server
├── package.json            # Dependencies
├── .env.example            # Environment template
├── README.md               # Full documentation
├── render.json             # Render deployment config
└── .gitignore              # Git ignore file
```

---

## 🎨 Website Features

✅ **Responsive Design** - Works on all devices  
✅ **Professional UI** - Modern soothing colors & animations  
✅ **Contact Form** - Submits to Gmail & WhatsApp  
✅ **Service Showcase** - Automatic, Manual, Intensive courses  
✅ **Coverage Areas** - All South Delhi regions listed  
✅ **Mobile Menu** - Hamburger menu for mobile users  
✅ **Fast Loading** - Optimized and lightweight  

---

## 🚀 Next Steps

### Step 1: Setup Environment (5 minutes)

1. **Navigate to project folder**:
```bash
cd /Users/rahulroy/Documents/IndiaMartScrapper/talent-driving-school
```

2. **Install dependencies**:
```bash
npm install
```

3. **Create `.env` file**:
```bash
cp .env.example .env
```

4. **Edit `.env` with Gmail settings**:
```
PORT=3000
EMAIL_USER=rajkhan999045@gmail.com
EMAIL_PASSWORD=YOUR_GMAIL_APP_PASSWORD
WHATSAPP_NUMBER=8595773287
```

### Step 2: Get Gmail App Password (5 minutes)

1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" if not done
3. Find "App passwords" section
4. Select "Mail" and "Windows Computer" (or your OS)
5. Google will generate a 16-character password
6. Copy and paste it in `.env` as `EMAIL_PASSWORD`

### Step 3: Test Locally (2 minutes)

```bash
npm start
```

Open: http://localhost:3000

Test the form:
- Fill in details
- Click "Submit Inquiry"
- Check your email inbox
- WhatsApp should open automatically

### Step 4: Deploy to Render (10 minutes)

**Option A: Using Render Dashboard**

1. Go to: https://render.com (Sign up if needed)
2. Click "New" → "Web Service"
3. Paste GitHub URL (after you push to GitHub)
4. Fill in:
   - Name: `talent-motor-driving-school`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add Environment Variables:
   - `EMAIL_USER`: rajkhan999045@gmail.com
   - `EMAIL_PASSWORD`: Your Gmail App Password
   - `WHATSAPP_NUMBER`: 8595773287
6. Click "Deploy"

**Option B: First Push to GitHub**

```bash
cd /Users/rahulroy/Documents/IndiaMartScrapper/talent-driving-school
git init
git add .
git commit -m "Initial commit: Talent Motor Driving School website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/talent-driving-school.git
git push -u origin main
```

Then connect your GitHub repo to Render.

---

## 📝 Customization Tips

### Change Colors
Edit `public/css/style.css` (lines 1-9):
```css
--primary-color: #1e40af;    /* Blue - Change to your brand color */
--accent-color: #f59e0b;     /* Orange - Change to your brand color */
```

### Update Contact Info
In `public/index.html`, find and update:
- Phone numbers (lines 223-225)
- Email address (line 227)
- WhatsApp number (line 229)
- Service hours (line 234-235)

### Add More Service Areas
In `public/index.html` (lines 188-203), add more area badges:
```html
<div class="area-badge">Your Area Name</div>
```

### Change Images
Replace image URLs in `public/index.html` with your own:
```html
<img src="https://your-image-url.com/photo.jpg" alt="Description">
```

---

## 📞 Quick Reference

**Email Setup**: Nodemailer (Gmail SMTP)  
**Form Submission**: Sends email + Opens WhatsApp  
**Hosting**: Render.com (free tier)  
**Domain**: Later move to your custom domain  

---

## ⚠️ Important Notes

✅ **Never commit `.env` file to GitHub** (it's in .gitignore)  
✅ **Keep Gmail App Password secret**  
✅ **Test form locally before deploying**  
✅ **Check spam folder for test emails**  
✅ **Mobile users can't open WhatsApp via web - they'll get the link**  

---

## 🆘 Troubleshooting

### "Cannot find module 'express'"
```bash
npm install
```

### Form not sending emails
1. Check `.env` file has correct credentials
2. Verify Gmail App Password (not regular password)
3. Check 2-Step Verification is enabled on Google Account

### Render deployment fails
1. Check if `npm install` completes locally
2. Ensure all environment variables are set
3. Check Render logs for errors

### Website looks broken on mobile
1. Ensure CSS file is loading (`public/css/style.css`)
2. Check browser console for errors (F12)
3. Clear browser cache and refresh

---

## 🎯 What to Show Your Client

1. **Local Demo**: Run `npm start` and open `http://localhost:3000`
2. **Render URL**: Share the live link after deployment
3. **Future Custom Domain**: Upgrade Render to paid plan and add custom domain

---

## 📚 Additional Resources

- [Express.js Docs](https://expressjs.com/)
- [Render.com Deploy Docs](https://render.com/docs)
- [Gmail SMTP Setup](https://support.google.com/accounts/answer/185833)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**🎉 You're all set! The website is production-ready!**

For questions or issues, check the README.md file in the project folder.
