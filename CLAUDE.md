# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Test Commands
- `npm run get-app-json [app]` - Get the JSON for a specific app
- `npm run register-new-version [app]` - Register a new version of an app

## Code Style Guidelines
- Use Prettier for formatting (.prettierrc settings)
- Use double quotes for strings
- Tab width: 2 spaces
- Print width: 100 characters
- Trailing commas: ES5
- Semicolons: required
- Arrow function parentheses: avoid when possible

## Structure Guidelines
- App definitions are in `/src/[app-name]/index.js`
- Each app has its own directory structure based on functionality:
  - `widgets/` - For custom widgets
  - `commands/` - For API commands
  - `kviews/` - For custom Kustomer views
  - `i18n/` - For translations
- Import structure: local imports after external dependencies
- Version updating: Must bump semver in app config for updates

## Naming Conventions
- App IDs: snake_case
- JS files: kebab-case.js
- Object properties: camelCase
- Clear, descriptive naming that indicates functionality