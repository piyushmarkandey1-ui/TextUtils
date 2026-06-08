# Textutils

Textutils is a small React app for analyzing and transforming text. It provides counting, case conversion, reversal, and theme/dark-mode support with color themes.

## Features
- Count words and characters
- Convert text to uppercase or lowercase
- Reverse text
- Light / dark mode and color themes (red, green, blue)
- Dismissible alerts with readable styling in dark mode

## Quick Start

Install dependencies and start the development server:

```bash
npm install
npm start
```

The app will open in your browser. If port `3000` is busy the dev server will prompt to use a different port.

## Scripts
- `npm start` — start development server
- `npm run build` — build production bundle into `build/`
- `npm test` — run tests

## Project Structure
- `src/` — React source files
	- `component/` — UI components: `navbar.js`, `TextForm.js`, `Alert.js`, `About.js`
- `public/` — static assets and favicon files

## Development notes
- Alerts are styled in `src/component/Alert.js` to provide good contrast in dark and colored themes.
- Theme changes set `document.body.style.backgroundColor` in `src/App.js`.

## License
This project is provided as-is for learning purposes.
