# Blog CMS

This project provides a simple Django backend with a Next.js front-end.

## Front-end Dev

The front-end source lives in `blog_front` and uses Next.js 14 with TypeScript and Tailwind CSS.

### Local Development

1. Start the Django backend using `docker-compose up`.
2. Launch the front-end locally:
   ```
   cd blog_front
   npm install
   npm run dev
   ```
   The app will be available on [http://localhost:3000](http://localhost:3000).

The index page fetches articles from `http://localhost:18000/api/articles/` and displays them as cards. Individual articles are available under `/articles/[slug]`.
