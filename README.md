# Blog CMS

This project provides a simple Django backend with a Next.js front-end.

## Front-end Dev

The front-end source lives in `blog_front` and uses Next.js 14 with TypeScript and Tailwind CSS.

### Local Development

1. Start the Django backend using `docker-compose up`.
2. In another terminal, run the Node container defined in `docker-compose.override.yml`:
   ```
   docker-compose -f docker-compose.yml -f docker-compose.override.yml up node
   ```
   This executes `npm run dev` inside the container and serves the app on [http://localhost:3000](http://localhost:3000).

Alternatively you can run the frontend directly on your machine:

```bash
cd blog_front && npm install && npm run dev
```

The index page fetches articles from `http://localhost:18000/api/articles/` and displays them as cards. Individual articles are available under `/articles/[slug]`.

## Database

CI runs tests using SQLite automatically because no `POSTGRES_DB` environment variable is set. For local development, use Docker/Postgres via `docker-compose up`.
