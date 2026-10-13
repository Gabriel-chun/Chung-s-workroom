# Trace Workroom

An independent bilingual service and work portfolio for Trace (Gabriel Chung).

Live website deployed through Cloudflare Pages from the \`main\` branch.

## Pages
- **Home** — services, selected work, working method, and contact.
- **Work** — four publicly available projects, each linked to its original live demo.

The two views use hash navigation (\`#home\`, \`#work\`) so they work with any static host.

## Features
- Traditional Chinese / English (persistent local browser preference).
- Warm ivory / midnight / slate-blue appearance (persistent local browser preference).
- Responsive layout, reduced-motion accessibility, accessible navigation and appearance menu.
- No third-party analytics, backend, user account or form submissions.
- Email contact: gabrielchun336@gmail.com.

## Files
- \`index.html\` – semantic base layout and global header/footer.
- \`styles.css\` – visual design and responsive styles.
- \`app.js\` – content, page navigation, localization and color modes.

## Editing work links
Update the \`urls\` object at the top of \`app.js\`. Services, project descriptions and labels are defined in \`T.zh\` and \`T.en\`.

## Local preview
Open \`index.html\` using a static server, such as \`python3 -m http.server 8000\`, and visit http://localhost:8000.

## Privacy / scope
The portfolio references existing public websites only. It does not import original private materials or repository contents. Case descriptions are based on the public pages as of October 2026.
