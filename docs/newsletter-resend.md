# Monogatari newsletter — optional Resend setup

The website also supports Resend. Use this route after Monogatari owns a custom domain; the completely free MVP route is documented in `newsletter-buttondown.md`.

## One-time setup

1. Create a free Resend account.
2. In Contacts → Segments, create a segment named `Monogatari Letter`.
3. Create a full-access API key for the website.
4. Add these encrypted environment variables to the Vercel project for Production and Preview:
   - `RESEND_API_KEY`: the API key, beginning with `re_`
   - `RESEND_SEGMENT_ID`: the ID of the `Monogatari Letter` segment
5. Add and verify a sending domain in Resend. Prefer a subdomain such as `letter.example.com`.
6. Redeploy the site and submit a real test address through `/newsletter`.

## Sending an issue

1. Open Resend → Broadcasts and create a Broadcast.
2. Select the `Monogatari Letter` segment.
3. Select the verified sender domain and write or paste the issue.
4. Include Resend’s Unsubscribe Footer.
5. Send a test, then schedule or send the Broadcast.

Resend manages unsubscribes automatically for Broadcasts. Do not export unsubscribed readers into another sending list.

## Free-plan boundary

The current Resend marketing-email free plan supports up to 1,000 contacts. Recheck Resend pricing before launch because limits can change.
