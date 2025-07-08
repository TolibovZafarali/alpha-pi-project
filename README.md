# Alpha-Pi

Alpha-Pi is a small business incubation platform built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). It helps entrepreneurs create private business profiles, connect with mentors, and share their ventures with verified investors.

This repository contains the source for the demo application located in the `alpha-pi` directory. The app is configured for deployment to Netlify.

## Features

- **Guided registration** – step-by-step forms for new businesses.
- **Mentor network** – connect with experienced mentors and track contacts.
- **Location management** – store and review potential business sites.
- **Investor marketplace** – browse verified investor profiles and share your pitch.
- **Local storage** – data is persisted in the browser using `localStorage` for demo purposes.

## Project structure

```
alpha-pi/
├── index.html             # entry point for Vite
├── package.json           # npm scripts and dependencies
├── public/                # static assets
└── src/                   # React application source
    ├── components/        # page components and utilities
    ├── data/              # sample JSON data
    ├── App.jsx            # application routes
    └── main.jsx           # bootstraps React
```

The Netlify configuration is stored in `alpha-pi/netlify.toml`.

## Getting started

1. Install dependencies (requires Node.js 18 or higher):

   ```bash
   cd alpha-pi
   npm install
   ```

2. Create a `.env` file and provide a GNews API key:

   ```bash
   cp .env.example .env
   # edit .env and set VITE_GNEWS_API_KEY
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Vite will start the app on [http://localhost:5173](http://localhost:5173).

4. Build for production:

   ```bash
   npm run build
   ```

   The optimized site will be generated in the `dist/` folder and can be previewed with:

   ```bash
   npm run preview
   ```

5. Lint the project:

   ```bash
   npm run lint
   ```

## Contributing

Pull requests are welcome. Feel free to fork the repository and improve the project.

## License

This project is released without a specific license. See individual package licenses in `package-lock.json` for details.


