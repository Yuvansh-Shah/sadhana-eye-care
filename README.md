# Sadhana Eye Care

A marketing website for an eye-care clinic in Mumbai, with an AI assistant that answers questions and books appointments.

## What it does

This is a multi-page site for Sadhana Eye Care: home, about, services (with a page per service), technology, reviews, contact with an appointment form, and the usual FAQ and legal pages — around 15 pages in all. The clinic's details live in one typed data module that the whole site reads from, and the site is set up for search engines with a generated sitemap, robots file, OpenGraph image, and structured data.

The main interactive feature is an AI assistant. A server-side API route calls a hosted Llama model with tool calling, so the assistant can answer questions and, when asked, book an appointment end-to-end by submitting the request to the clinic. The route includes per-IP rate limiting, message-length caps, and input validation.

## Built with

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- NVIDIA-hosted Llama (3.3 70B) for the assistant
- Web3Forms for delivering appointment requests
- Deployed on Netlify

## Running it

```
npm install
npm run dev        # http://localhost:3000
```

Copy `.env.example` to `.env.local` and set `NVIDIA_API_KEY` and `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. The `.env.local` file is gitignored and is not part of this repo.

Parts of this project were built with AI coding assistance.
