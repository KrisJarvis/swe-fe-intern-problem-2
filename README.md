# SafeDep Frontend Intern Task

Hi there! 👋

This is my solution for the SafeDep Frontend Engineering Internship problem. It's a Next.js application designed to analyze open source packages with a focused, premium UI.

I built this with **Next.js 16** and **Tailwind CSS**. I spent a good amount of time refining the design—switching to the **Mona Sans** font and nailing the specific teal branding to match the "rich aesthetics" requirement.

## Getting Started

The project is located in the `safedep-app` folder. Here is how you can get it running locally:

### 1. Install Dependencies

First, move into the app directory and install the packages:

```bash
cd safedep-app
npm install
```

### 2. Run the App

Start the development server:

```bash
npm run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

## How to Use It

You can navigate around the app, but the main feature is the package details view. Try these URLs to see it in action:

- **React**: [http://localhost:3000/p/npm/react/18.2.0](http://localhost:3000/p/npm/react/18.2.0)
- **Express**: [http://localhost:3000/p/npm/express/4.17.1](http://localhost:3000/p/npm/express/4.17.1)

If you don't have API keys set up, don't worry—I've set it up to fall back to mock data automatically so you can still click around and review the UI.

## Project Structure

- `app/`: Contains the Next.js App Router pages.
- `components/`: All the UI blocks. I've separated them into generic UI parts (buttons, badges) and specific package view components.
- `lib/api.ts`: Handles the data fetching. It tries to hit the real SafeDep API via ConnectRPC, but gracefully catches errors to serve the mock JSON if you don't have credentials.

Let me know if you have any questions!
