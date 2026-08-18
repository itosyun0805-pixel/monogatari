# Monogatari newsletter — free Buttondown setup

Buttondown is the default provider for the Monogatari MVP because the first 100 active subscribers can be collected and emailed for free. A custom domain is optional: Buttondown can send from `your-username@buttondown.email`.

## One-time setup

1. Create a free Buttondown account and choose a username such as `mono-stories`.
2. Name the newsletter `The Monogatari Letter` and set the time zone to Asia/Tokyo.
3. Create an API key in Buttondown.
4. Add `BUTTONDOWN_API_KEY` as an encrypted Vercel environment variable for Production and Preview.
5. Redeploy the site and submit a real address through `/newsletter`.
6. Open the confirmation email and confirm the subscription. Buttondown requires double opt-in by default.

The website appends every consent event to the subscriber's private Buttondown
notes. The `source` and `intent` distinguish the weekly Letter from a product's
waitlist or restock request. The source is also copied to the UTM campaign, and
Sanity receives the same structured history when a write-enabled token is
available.

## Sending an issue

1. Open Buttondown and create a new email.
2. Write in its rich-text or Markdown editor.
3. Send yourself a test.
4. Schedule or send it to the active list.

Buttondown automatically adds an unsubscribe link. Do not remove it or manually reactivate someone who has not submitted the website form again.

## Free-plan boundary

The current free plan covers the first 100 active subscribers. Recheck Buttondown pricing before launch because limits can change. Once the list approaches 100 readers, decide whether to pay for Buttondown or move to Resend after acquiring and verifying a custom domain.
