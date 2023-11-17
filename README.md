## Description

The project provides endpoints to manage movie database.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Building Docker Image

To build the Docker image for your NestJS application, follow these steps:

1. Open a terminal in the root directory of your project.

2. Run the following command to build the Docker image:

    ```bash
    docker build -t your-image-name .
    ```

### Running Docker Container

```markdown
## Running Docker Container

After building the Docker image, you can run a container based on that image. Use the following command:
```bash
docker run -p 3000:3000 -d your-image-name
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
