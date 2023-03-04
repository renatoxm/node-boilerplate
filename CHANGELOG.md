# Changelog

## V1.1.0 Bug fixes

- Corrected start script in package.json
- added this file
- added dotenv dependency
- refactored server.ts and app.ts to fix pino crashing the production build
- added NODE_ENV to .env

## V1.2.0 config implementation

- Added config function to implement process.env to be typesafe
- removed build from repo in .gitignore

## To do

- [x] add config function to implement dotenv
- [ ] add file loggin in production
