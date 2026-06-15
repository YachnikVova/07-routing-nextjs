# NoteHub (Next.js)

A multi-page notes application built with **Next.js (App Router)**. It is a
refactor of the previous SPA version of NoteHub, now with server-side rendering
(SSR), client-side rendering (CSR) and routing.

## Features

- **`/`** — home page with general information about the app.
- **`/notes`** — list of notes with keyword search, pagination and note
  creation. The page is server-rendered with TanStack Query prefetch and cache
  hydration; the client logic lives in `app/notes/Notes.client.tsx`.
- **`/notes/[id]`** — dynamic route with the full details of a single note,
  also prefetched on the server with hydration. Client logic lives in
  `app/notes/[id]/NoteDetails.client.tsx`.

## Tech stack

- Next.js (App Router) + React + TypeScript
- TanStack Query (React Query) for request state
- axios for HTTP requests
- Formik + Yup for the create-note form
- react-paginate for pagination
- use-debounce for the search input
- CSS Modules for styling
- Prettier for code formatting

## Environment variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_NOTEHUB_TOKEN=your_notehub_token_here
```

When deploying to Vercel, add the same `NEXT_PUBLIC_NOTEHUB_TOKEN` variable in
the project settings.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # start the production server
npm run lint     # run ESLint
npm run format   # format the code with Prettier
```
