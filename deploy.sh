#!/bin/bash

# Talent Motor Driving School - GitHub Push Helper Script
# This script will push your code to GitHub

echo "🚀 Talent Motor Driving School - GitHub Deployment"
echo "=================================================="
echo ""
echo "STEP 1: Create GitHub Repository"
echo "================================"
echo ""
echo "1. Go to: https://github.com/new"
echo "2. Fill in these details:"
echo "   - Repository name: talent-driving-school"
echo "   - Description: Professional website for Talent Motor Driving School"
echo "   - Visibility: PUBLIC"
echo "3. Click 'Create repository'"
echo "4. Copy the HTTPS URL (looks like: https://github.com/YOUR_USERNAME/talent-driving-school.git)"
echo ""
echo "🔗 After creating the repo, come back and paste the URL here:"
echo ""

# Prompt for GitHub URL
read -p "Enter your GitHub repository URL: " github_url

if [ -z "$github_url" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

echo ""
echo "✅ Got it! Pushing your code to GitHub..."
echo ""

# Change to project directory
cd /Users/rahulroy/Documents/IndiaMartScrapper/talent-driving-school

# Add remote
git remote add origin "$github_url"

# Set main branch
git branch -M main

# Push to GitHub
echo "🔐 You may be prompted for authentication:"
echo "   • Use your GitHub username or email"
echo "   • For password, use a Personal Access Token from: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your code has been pushed to GitHub!"
    echo ""
    echo "📍 Your repository is at: $github_url"
    echo ""
    echo "NEXT STEP: Deploy on Render"
    echo "=============================="
    echo ""
    echo "1. Go to: https://render.com"
    echo "2. Sign up/Login (use GitHub for easier setup)"
    echo "3. Click 'New' → 'Web Service'"
    echo "4. Select your 'talent-driving-school' repository"
    echo "5. Fill in:"
    echo "   - Name: talent-motor-driving-school"
    echo "   - Build Command: npm install"
    echo "   - Start Command: node server.js"
    echo ""
    echo "6. Add Environment Variables:"
    echo "   EMAIL_USER=rajkhan999045@gmail.com"
    echo "   EMAIL_PASSWORD=your_gmail_app_password"
    echo "   WHATSAPP_NUMBER=8595773287"
    echo ""
    echo "7. Click 'Create Web Service'"
    echo ""
    echo "⏱️  Wait 2-3 minutes for deployment..."
    echo ""
    echo "✨ Your website will be live at:"
    echo "   https://talent-motor-driving-school.onrender.com"
else
    echo ""
    echo "❌ Push failed. Check your GitHub URL and try again."
    echo ""
    echo "💡 Need help?"
    echo "   - Verify the URL is correct"
    echo "   - Make sure you're using a Personal Access Token (not password)"
    echo "   - Token should have 'repo' scope"
fi
