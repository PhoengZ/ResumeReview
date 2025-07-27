## Resume Review Web Application

This project is an AI-powered resume review web application built with Nuxt 3. It allows users to upload their resume (PDF only), select areas of work, and receive AI-generated feedback on how to improve their resume.

### Features

- **Upload PDF Resume**: Users can upload their resume in PDF format.
- **Select Areas of Work**: Choose relevant fields (e.g., Software Development, Data Science) for targeted feedback.
- **Custom Prompts**: Add custom questions or prompts for specific feedback.
- **AI-Powered Analysis**: The app uses Google Gemini API to analyze resumes and generate actionable feedback.
- **Modern UI**: Built with Nuxt 3, Vue 3, and Tailwind CSS for a responsive and user-friendly experience.

### How It Works

1. User uploads a PDF resume via the web interface.
2. The PDF is converted to a base64 string in the browser.
3. User selects areas of work and can add a custom prompt.
4. The app sends the resume and prompt to the backend API.
5. The backend uses the Google Gemini API to analyze the resume and generate feedback.
6. The feedback is displayed to the user.

### Technologies Used

- **Nuxt 3** (Vue 3 framework)
- **Tailwind CSS**
- **TypeScript**
- **@google/genai** (Google Gemini API client)
- **Vite** (build tool)

### Project Structure

- `app/` — Main application code (pages, components, composables)
- `server/` — API endpoints (AI integration)
- `public/` — Static assets
- `nuxt.config.ts` — Nuxt configuration
- `package.json` — Project dependencies

---
Feel free to contribute or open issues for suggestions and improvements!

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
