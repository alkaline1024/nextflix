# Nextflix Monorepo

Nextflix is a full-stack web application example using **Next.js** (frontend) and **NestJS** (backend) with Clean Architecture.

## Features

- Browse movies and TV shows (Popular, Trending, Top Rated, Now Playing, Upcoming, Airing Today, On The Air)
- Add/remove My List (watchlist) (localStorage)
- Responsive UI
- Clean Architecture (domain/use-case/repository/controller/presentation)
- API Gateway aggregates data from TMDB

## Tech Stack

- **Frontend:** Next.js 14, Tailwind CSS ([see details](web/README.md))
- **Backend:** NestJS, TypeScript ([see details](api/README.md))

## Architecture Overview

- **web/**: Next.js frontend (Clean Architecture, hooks, controllers, presentation)
- **api/**: NestJS backend (Clean Architecture, TMDB integration, error handling, logging)

## Installation (Development)

### 1. Clone the repository

```bash
git clone https://github.com/alkaline1024
cd nextflix
```

### 2. Install dependencies

```bash
cd web && npm install
cd ../api && npm install
```

### 3. Set up Environment Variables

- **web/.env.local**
  ```
  NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
  ```
- **api/.env**
  ```
  TMDB_API_KEY=your_tmdb_api_key
  TMDB_API_BASE_URL=https://api.themoviedb.org/3
  ```
- You can get TMDB API key from https://developer.themoviedb.org/

### 4. Run development servers

```bash
# In web/
npm run dev
# In api/
npm run start:dev
```

- Open http://localhost:3000 (web) and http://localhost:3000 (api)

## More

- See [web/README.md](web/README.md) and [api/README.md](api/README.md) for service-specific details
- For production build instructions, see each service's README

---

## License

MIT
