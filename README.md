# Portfolio Website

This is a portfolio website built with React, Vite, and Express.js. It was originally deployed on Replit but has been migrated to Vercel for improved performance and reliability.

## Deployment to Vercel

This project is configured to be deployed on Vercel. Follow these steps to deploy:

### Prerequisites

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI (optional): `npm install -g vercel`

### Deployment Steps

#### Option 1: Using Vercel Dashboard (Recommended)

1. Push your code to a GitHub repository
2. Log in to your Vercel account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the project settings
6. Click "Deploy"

#### Option 2: Using Vercel CLI

1. Open a terminal in the project root directory
2. Run `vercel login` and follow the prompts
3. Run `vercel` to deploy
4. Follow the CLI prompts to configure your project

### Configuration Files

The project includes the following configuration files for Vercel deployment:

- `vercel.json`: Configures the build process and routing for Vercel
- Updated `package.json`: Includes Vercel-compatible build scripts and dependencies

### Environment Variables

If you need to set environment variables for your deployment, you can do so in the Vercel dashboard under your project settings.

## Local Development

To run the project locally:

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser to `http://localhost:5000`

## Build

To build the project:

```
npm run build
```

This will create a production-ready build in the `dist` directory.

## Project Structure

- `client/`: Frontend React application
- `server/`: Backend Express.js server
- `shared/`: Shared code between frontend and backend
- `dist/`: Build output directory