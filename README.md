# Sai Durga Prasad — Frontend / Web Developer Portfolio

Live site: https://sai.vrlss.in

A single-page personal portfolio presenting my work, projects, skills, education and contact information. The page uses a scroll-driven Three.js scene alongside the HTML content.

## Screenshot

<!-- Add screenshot here: desktop view -->
<!-- Add screenshot here: mobile view -->

## Tech used

- HTML, CSS and JavaScript in a standalone `index.html`
- Three.js (loaded from a CDN) for the WebGL scene
- Google Fonts for typography
- Browser local storage for the selected colour theme
- Cloudflare Pages hosting configuration

## Main features

- Scroll-based portfolio sections for work, projects, skills, education and contact
- WebGL scene rendered behind the page content
- Light and dark theme selection, remembered between visits
- Responsive layout and reduced-motion styling
- Resume download link backed by `resume.pdf`
- Security headers configured in `_headers`

## Run locally

There is no build step or package installation.

1. Clone this repository.
2. Open the project folder in a terminal.
3. Start a local static server:

   ```bash
   python -m http.server 8000
   ```

4. Visit http://localhost:8000.

You can also open `index.html` directly in a browser. A local server is recommended for consistent browser behaviour.

## What I learned

This project helped me practise structuring a complete portfolio with semantic HTML, responsive CSS, browser-based JavaScript, Three.js rendering, theme persistence and deployment configuration.

I use AI-assisted development to help draft and implement code. I review, test and fix the code myself.
