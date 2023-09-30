# IUTCS Website

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [TODO](#todo)

## Features

- Full-stack application showcasing IUTCS.
- Client-side built with React, TypeScript, and Vite.
- Server-side built with TypeScript and Express.
- Separated client and server folders for easy development and deployment.
- Utilizes Tailwind CSS for styling.

## Folder Structure

The project is organized into two main folders:

- `client/`: Contains the client-side React application.
  - `src/`: Client-side source code.
    - `pages/`: React components for different pages.
    - `components/`: Reusable React components.
    - `hooks/`: Custom React hooks.
    - `contexts/`: React context providers.
    - `main.tsx`: Main entry point for the client-side app.
    - `index.css`: Global CSS styles.

- `server/`: Contains the server-side TypeScript Express application.
  - `src/`: Server-side source code.
    - `routes/`: Express route handlers.
    - `models/`: MongoDB models.
    - `controllers/`: Request handlers.
    - `index.ts`: Entry point for the server.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB running locally or accessible.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Khandakar227/IUTCS-Website.git
   cd IUTCS-Website


## TODO

- Overflow on activities page on mobile (due to animations)
- Executive page
- Blogs with mardown files
- Admin panel
- Admin Panel api
- Registration page for Intra and Inter IUT Programming Contest (optional: All other contests)