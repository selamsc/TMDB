# MoviesController Documentation

The `MoviesController` is a NestJS controller responsible for handling movie-related HTTP requests.

## Table of Contents

- [Controller Overview](#controller-overview)
- [API Endpoints](#api-endpoints)
- [Interceptors](#interceptors)
- [Class Transforming](#class-transforming)
- [Error Handling](#error-handling)

## Controller Overview

This controller manages movie-related operations; creating, retrieving, and deleting movies. It interacts with the `MoviesService` to handle business logic.

## API Endpoints

### Create Movie

- **Endpoint:** `POST /movies`
- **Description:** Create a new movie.
- **Request:**
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "Movie Name",
      "overview": "Movie Overview",
      "popularity": 8.2,
      "voteAverage": 4.2,
      "voteCount": 500,
      "releaseDate": "2023-01-01",
      "genres": [
        {
          "id": 3,
          "name": "Adventure"
        }
      ]
    }
    ```
- **Response:**
  - Status: `200 Created`
  - Body: Created movie object

### Get All Movies

- **Endpoint:** `GET /movies`
- **Description:** Retrieve a list of all movies.
- **Request:**
  - Method: `GET`
- **Response:**
  - Status: `200 OK`
  - Body: Array of movie objects

### Get Movie by ID

- **Endpoint:** `GET /movies/:id`
- **Description:** Retrieve a specific movie by its ID.
- **Request:**
  - Method: `GET`
  - URL Parameters:
    - `id`: Movie ID
- **Response:**
  - Status: `200 OK`
  - Body: Movie object

### Remove Movie

- **Endpoint:** `DELETE /movies/:id`
- **Description:** Remove a movie by its ID.
- **Request:**
  - Method: `DELETE`
  - URL Parameters:
    - `id`: Movie ID
- **Response:**
  - Status: `200 OK`
  - Body: Removed movie object

### Discover Movies

- **Endpoint:** `GET /movies/get-movie-details`
- **Description:** Discover movie details from TMDB with given params.
- **Request:**
  - Method: `GET`
- **Response:**
  - Status: `200 OK`
  - Body: Array of movie objects

## Interceptors

The `MoviesController` uses the `ApiResponseInterceptor` to handle responses evenly. This interceptor enhances the consistency of API responses.

## Class Transforming

Incoming data in the `create` endpoint is transformed to a `MovieModel` instance using `plainToClass` from the `class-transformer` library. This ensures a consistent data format for processing.

## Error Handling

Errors during the discovery of movies are caught, and an appropriate error message is thrown. The error message includes details about the encountered error.