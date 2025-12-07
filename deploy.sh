#!/bin/bash

# Deployment script for Cloudflare Pages
# Make sure you have Wrangler CLI installed: npm install -g wrangler

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Cloudflare Pages
echo "🌐 Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name=portfolio

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

echo "✅ Deployment successful!"
echo "🎉 Your portfolio is now live!"
