# Nextflix Web

Nextflix Web is the frontend for the Nextflix project, built with **Next.js 14** and **Tailwind CSS**. It follows Clean Architecture for maintainability and scalability, and connects to the backend API (NestJS) for movie/TV data.

## Features

- Browse movies and TV shows (Popular, Trending, Top Rated, Now Playing, Upcoming, Airing Today, On The Air)
- Browse by genre
- Add/remove My List (watchlist) (localStorage)
- Responsive, modern UI
- Clean Architecture (domain/use-case/repository/controller/presentation)

## Architecture

- **entities/models/**: Core domain models (Movie, Tv, Genre)
- **application/use-cases/**: Business logic (get-movies, get-tv, get-genres, my-list)
- **application/repositories/**: Repository interfaces (abstract data access)
- **infrastructure/repositories/**: Repository implementations (API, localStorage)
- **interface-adapters/controllers/**: Controllers/hooks for UI
- **app/**: Presentation layer (Next.js pages, components)

## Installation & Usage

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Set up environment variables

Create a `.env.local` file in the `web/` directory:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser

### 4. Build for production

```bash
npm run build && npm start
```

## Notes

- My List is stored in localStorage (client-side only)
- Requires the backend API (NestJS) to be running and accessible
- For backend/API details, see [../api/README.md](../api/README.md)
- For monorepo/project overview, see [../README.md](../README.md)

## License

MIT
