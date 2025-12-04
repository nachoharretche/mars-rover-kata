# Kata Setup

🥋👩‍💻 Welcome to your kata setup! 🥷

This repository provides you with a convenient setup to tackle coding katas. You can choose to run it with Docker or without it, depending on your preference.

## Getting Started

### Using Docker 🐳

1. Build the Docker image:

    ```
    docker compose build
    ```

2. Run the tests:
    ```
    docker compose run --rm app npm test
    ```

### Without Docker 🚀

Install dependencies locally:

```
npm install
```

Run the tests:

```
npm test
```

---

🚨 Please make sure that the test runs successfully before the day of the kata. 🚨

Happy coding! 🚀 👩‍💻👨‍💻👩🏽‍💻👨🏻‍💻👨🏿‍💻👩🏻‍💻

## Testing

I am going to use the AAA pattern (Arrange, Act, Assert)

## Steps to Execute

1. `docker-compose up -d` (starts the container, also creates the image if not exists)

2. `docker-compose exec app sh` (to execute commands inside the container)

    a. For debugging execute `pnpm test:debug`

    b. To execute the tests execute `pnpm test`

## Comments

1. I use pnpm instead of npm for security reasons.

2. Added a .dockerignore file to avoid copying unnecessary files and folders to the docker container.

3. Updated docker-compose:

    - Added `9229` port for debugging just in case.

    - Added `stdin_open: true` to allow the container to receive input from the terminal.

    - Added `tty: true` to add colors, text formatter and to add interactive behavior such as `ctrl + c`, etc.

4. Updated Dockerfile:

    - Changed `node:18` to `node:22.21.1-alpine` to use node 22 that has typescript native support, and included the alpine version because it's 20x lighter. With the initial config the docker image weight was 1.2 GB, now it's 233 MB.

    - Added `RUN corepack enable && corepack prepare pnpm@latest --activate` to be able to use pnpm without installing it through npm.

    - Added `ENV CI=true` to tell pnpm to avoid using interactive prompts, if not the build is going to fail waiting for user input.

    - Changed `npm install` to `pnpm install` for security reasons.
