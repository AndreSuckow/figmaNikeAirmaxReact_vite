# Agent instructions

## Project
- This is a React, TypeScript, and Vite product landing page.
- Keep the existing product content, assets, and dark visual identity unless the task asks otherwise.
- Use the existing components and styles before adding dependencies or introducing a new design system.

## UI and layout
- Make the page usable from small mobile screens through desktop widths; do not disable page scrolling.
- Keep navigation, product details, and product imagery readable and well-spaced at every viewport.
- Use semantic HTML, meaningful image alt text, visible keyboard focus, and respect reduced-motion preferences.
- Avoid decorative or invented product claims, and do not add controls that appear functional but are not wired up.
- Keep styling in the existing page stylesheet and prefer responsive CSS over fixed viewport-specific dimensions.

## Validation
- Run `npm run build` after changing application code.
- If visual behavior changes, check the page at mobile and desktop widths when a browser is available.
- Do not install dependencies unless a required package is missing; do not change lockfiles for styling-only work.
