<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Nextflix API

Nextflix API is a robust, scalable backend for the Nextflix project, built with **NestJS** and Clean Architecture. It acts as an API Gateway, aggregating and transforming data from The Movie Database (TMDB) API for the frontend.

## Features

- Clean Architecture (Domain, Application, Infrastructure, Presentation)
- Movie & TV endpoints: popular, trending, now playing, top rated, upcoming, genres, etc.
- Centralized error handling (global exception filter)
- Logging and monitoring
- DTO validation (class-validator)
- Extensible for new domains (person, genre, trending, etc.)
- Type-safe (TypeScript, DTO mapping)

## Architecture

- **src/core/entities/**: Domain models (Movie, Tv, Genre, etc.)
- **src/application/use-cases/**: Business logic (get-movies, get-tv, get-genres, etc.)
- **src/application/repositories/**: Repository interfaces
- **src/infrastructure/repositories/**: Repository implementations (TMDB API, etc.)
- **src/controllers/**: REST API endpoints
- **src/frameworks/**: Logger, exception filter, etc.

## Installation & Usage

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Set up environment variables

Create a `.env` file in the `api/` directory:

```
TMDB_API_KEY=your_tmdb_api_key
TMDB_API_BASE_URL=https://api.themoviedb.org/3
```

### 3. Run the development server

```bash
yarn start:dev
# or
npm run start:dev
```

- The API will be available at [http://localhost:3000](http://localhost:3000) by default

### 4. Build for production

```bash
npm run build && npm run start:prod
```

## Notes

- Requires a valid TMDB API key from https://developer.themoviedb.org/
- For frontend details, see [../web/README.md](../web/README.md)
- For monorepo/project overview, see [../README.md](../README.md)

## License

MIT
