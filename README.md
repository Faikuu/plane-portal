# Next.js Makeplane API Integration

This is a simple Next.js application that connects to the Makeplane API. The app features a form that collects data from users and sends it to a Next.js server, which then makes a POST request to a configurable endpoint defined in the `.env` file.

## Features

- User-friendly form for data input
- Configuration for API endpoint via `.env` file
- Server-side handling of API requests

## Getting Started

### Prerequisites

- Node.js (version 12.x or later)
- npm (or yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Faikuu/plane-portal.git
   cd plane-portal
   npm install
   ```
2. Create a .env.local file in the root directory and add your plane details:
   ```bash
   PLANE_URL=https://example.com
   PLANE_API_TOKEN=plane_api_xyz
   PLANE_WORKSPACE_SLUG=workspace-slug
   PLANE_PROJECT_ID=project-id
   ```

### Running portal
   ```bash
   npm run dev
   ```

### Building portal
```bash
npm run build
npm start
```