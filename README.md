# 📦 Simple webpack 5 start template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple Webpack 5 starter template with Babel, PostCSS, Sass, and advanced features like CSS Layers, Bootstrap, EJS, Swiper Slider, InputMask, and comprehensive linting tools. Perfect for modern web development.

## Installation

Clone this repo and npm install.

## Usage

### Development server

```bash
npm install
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8088`.

### Production build

```bash
npm run build
```

### Development build

```bash
npm run dev
```

### JS Lint

```bash
npm run lint
```

### CSS Lint

```bash
npm run lint:css
```

### CSS Lint

```JS prettify
npm run prettify
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [CSS Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [Bootstrap 5](https://getbootstrap.com/)
- [EJS Loader](https://github.com/difelice/ejs-loader)
- [Swiper Slider](https://swiperjs.com/)
- [InputMask](https://github.com/RobinHerbots/Inputmask)
- Comprehensive linting tools()

## Scripts

- `npm serve` - Start development server
- `npm run dev` - Build development version
- `npm run build` - Build production version
- `npm run lint` - Run JavaScript linter
- `npm run lint:css` - Run CSS linter
- `npm run prettify` - Run Prettier on JavaScript files

## Dependencies

### Current Main Dependencies

- `bootstrap`: ^5.3.3
- `core-js`: ^3.40.0
- `inputmask`: ^5.0.9
- `swiper`: ^11.2.1

[node -v](http://nodejs.org/) v.22

### DevDependencies

- **Webpack 5**: Modern module bundler.
- **PostCSS**: Support for modern CSS using plugins.
- **Sass**: Powerful CSS preprocessor.
- **Babel**: Transpiles modern JavaScript for compatibility with older browsers.
- **Bootstrap 5**: Popular framework for building user interfaces.
- **ESLint and Prettier**: Code linting and formatting.
- **Stylelint**: Linting for styles (SCSS).
- **EJS**: Template engine for generating HTML.
- **Swiper**: Library for creating sliders.
- **Inputmask**: Form input masks.

## Project Structure

- `dist/` - Compiled production files
- `node_modules/` - Node.js dependencies
- `public/` - Public static assets
  - `images/` - Images
- `src/` - Source code
  - `fonts/` - Fonts
  - `html_components/` - HTML components (EJS templates)
    - `_footer.ejs`
    - `_header.ejs`
    - `_modals.ejs`
    - `_pagination.ejs`
  - `images/` - Images used in the project
  - `js/` - JavaScript source files
    - `index.js` - Main JS entry point
  - `sass/` - Sass styles
    - `abstracts/` - Variables, mixins, functions
    - `base/` - Base styles (resets, typography)
    - `components/` - Styles for individual components
    - `frameworks/` - Third-party framework styles
    - `layouts/` - Layout-specific styles
    - `modules/` - Modular styles and reusable parts
    - `pages/` - Page-specific styles
    - `utilities/` - Utility classes
    - `style.scss` - Main Sass entry file
- `index.ejs` - Main HTML template
- `index.js` - Main JavaScript entry file
- `eslint.config.mjs` - ESLint configuration
- `jsconfig.json` - JavaScript project configuration
- `LICENSE` - License file
- `package-lock.json` - Lockfile for dependencies
- `package.json` - Project manifest
- `postcss.config.js` - PostCSS configuration
- `README.md` - Documentation
- `stylelint.config.js` - Stylelint configuration

## Author

- Andrii Plisiuk

## License

This project is open source and available under the MIT License.
