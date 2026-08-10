export type EditorialCategory = 'Objects' | 'Rituals' | 'Field Notes'

export type EditorialStory = {
  slug: string
  number: string
  title: string
  titleJa: string
  category: EditorialCategory
  format: string
  excerpt: string
  publishedAt: string
  readTime: string
  location: string
  relatedPieceSlug: string
  quote: string
  paragraphs: string[]
}

export const editorialStories: EditorialStory[] = [
  {
    slug: 'why-a-noren-is-not-just-a-curtain',
    number: '001',
    title: 'Why a Noren Is Not Just a Curtain',
    titleJa: 'のれんは、ただの布ではない',
    category: 'Objects',
    format: 'Object History',
    excerpt:
      'A door is either open or closed. A noren creates a third state: a threshold you choose to cross.',
    publishedAt: '2026-07-19T09:00:00+09:00',
    readTime: '6 min read',
    location: 'Arimatsu, Aichi',
    relatedPieceSlug: 'noren',
    quote:
      'A door is a wall that sometimes apologises. A noren is a welcome that never stops moving.',
    paragraphs: [
      'There is a word in Japanese retail that does not translate neatly: noren-wake, literally “dividing the curtain.” When an apprentice completes years of training, a master may grant them the right to hang a noren bearing the shop name. The cloth becomes a sign of trust, lineage, and permission to continue the work.',
      'A door is binary — open or shut, welcome or refused. A noren creates a third state. It says that a space is open, while still asking you to enter with your body. You lift the cloth, lower your head slightly, and pass through. A plain doorway becomes a threshold.',
      'The same idea works far beyond a Japanese shopfront. Hung between a kitchen and living room, a noren does not divide a home as firmly as a wall. It gives each side a different rhythm while allowing light, air, and people to keep moving.',
      'And when nobody is passing through it, the cloth still responds. A draft, an open window, or a person walking nearby is registered in its movement. A noren is an interior object that behaves a little like weather.',
    ],
  },
  {
    slug: 'incense-as-a-14-minute-ritual',
    number: '002',
    title: 'Incense as a 14-Minute Ritual',
    titleJa: '十四分の儀式',
    category: 'Rituals',
    format: 'One Object, One Ritual',
    excerpt:
      'A stick of incense does not measure your performance. It simply gives a small piece of time a beginning and an end.',
    publishedAt: '2026-07-26T09:00:00+09:00',
    readTime: '5 min read',
    location: 'Awaji Island, Hyogo',
    relatedPieceSlug: 'koh',
    quote: 'The stick is a clock that ends by ending. No alarm. No streak. No judgment.',
    paragraphs: [
      'Before every minute lived inside a screen, incense was one way of giving time a visible shape. A stick burns at a steady pace, fills a room gently, and finishes without an alarm asking for attention.',
      'The Japanese practice of monkō is often translated as “listening to incense.” The verb matters. You do not wait for scent to overwhelm the room. You lean toward it, notice small differences, and let attention move away from everything louder.',
      'The everyday version needs no formal ceremony. Light one stick when you begin a bounded task: writing a letter, stretching, making the first coffee, or answering the difficult email. When the smoke ends, the session ends too.',
      'An app measures you and remembers what you missed. Incense simply accompanies you. It burns at its own speed, asks for nothing at the end, and leaves the room a little quieter than it found it.',
    ],
  },
  {
    slug: 'daruma-and-the-psychology-of-keeping-promises',
    number: '003',
    title: 'The Daruma and the Psychology of Keeping Promises',
    titleJa: 'だるまと約束の心理学',
    category: 'Objects',
    format: 'Object Explainer',
    excerpt:
      'A one-eyed daruma turns an invisible intention into an object that quietly waits for you to finish.',
    publishedAt: '2026-08-02T09:00:00+09:00',
    readTime: '6 min read',
    location: 'Takasaki, Gunma',
    relatedPieceSlug: 'daruma',
    quote: 'An unfinished daruma is not neutral. It is a promise with a face.',
    paragraphs: [
      'Modern behavioural science calls it a commitment device: a choice made now that changes how easy it will be to quit later. The daruma is a remarkably simple version because the cost it creates is not financial. It is visual.',
      'The ritual is precise. You fill in one eye when you make a promise. The daruma then sits where you can see it, visibly incomplete. When the promise is fulfilled, you fill in the second eye and complete the face.',
      'Several ideas work together. The object makes the promise visible to other people. Its unfinished state keeps returning to your attention. And because you changed the daruma yourself, the goal is no longer only a sentence in a notebook.',
      'At the end of a cycle, many daruma are returned to temples and a new one begins another commitment. Success is acknowledged, failure receives an ending, and both make room for the next attempt.',
    ],
  },
  {
    slug: 'furoshiki-the-original-reusable-packaging',
    number: '004',
    title: 'Furoshiki: Packaging That Refuses to Be Waste',
    titleJa: '包みは、使い捨てなくていい',
    category: 'Rituals',
    format: 'Object History',
    excerpt:
      'A square of cloth can carry a bottle, wrap a gift, and return to the drawer ready for its next life.',
    publishedAt: '2026-08-09T09:00:00+09:00',
    readTime: '5 min read',
    location: 'Kyoto, Japan',
    relatedPieceSlug: 'furoshiki',
    quote: 'The wrapping does not disappear after the gift is opened. It becomes part of the gift.',
    paragraphs: [
      'Most packaging is designed for a single journey. A box is torn, paper is folded away, and a bag eventually splits. Furoshiki begins with a different assumption: the wrapper should remain useful after the object inside has arrived.',
      'The system is a small grammar of folds and knots. One arrangement carries a single bottle. Another balances two. A formal gift can be wrapped in a way that makes opening feel deliberate rather than disposable.',
      'A square of cotton packs almost flat and can become a shopping bag, a book wrap, a lunch cloth, or a temporary handle. Its usefulness comes from having very little fixed shape of its own.',
      'The most persuasive moment comes when a gift is opened. Nothing needs to be destroyed. The cloth is folded, kept, and waits for a new object — a piece of packaging whose next job has already begun.',
    ],
  },
  {
    slug: 'how-use-keeps-japanese-craft-in-motion',
    number: '005',
    title: 'How Use Keeps Japanese Craft in Motion',
    titleJa: '使うことで、工芸は今を生きる',
    category: 'Field Notes',
    format: 'Editorial Essay',
    excerpt:
      'The museum protects an object. Everyday use keeps materials, skills, and workshop knowledge moving.',
    publishedAt: '2026-08-09T12:00:00+09:00',
    readTime: '7 min read',
    location: 'Japan',
    relatedPieceSlug: 'bizen-yaki',
    quote: 'A museum keeps an object. Daily use keeps knowledge in motion.',
    paragraphs: [
      'There are two ways an old craft can enter the present. It can be protected, labelled, and displayed. Or it can be used: held every morning, worn thin, chipped, repaired, and ordered again. Both matter, but only one keeps a workshop economically alive.',
      'A workshop needs orders to take on an apprentice. The apprentice needs years before the movements become reliable knowledge. If orders stop for long enough, that chain does not restart simply because interest returns later.',
      'This is why an ordinary purchase can carry cultural weight. It supports the person practising the technique now and creates a reason for another person to learn it next. The object enters a home; income returns to a place.',
      'Monogatari is built around that movement. We do not want objects to sit outside daily life as evidence of a beautiful past. We want them on kitchen shelves, beside desks, in doorways, and in the hands of people who will give them new stories.',
    ],
  },
]

export const editorialCategories: EditorialCategory[] = ['Objects', 'Rituals', 'Field Notes']

export function getEditorialStory(slug: string) {
  return editorialStories.find((story) => story.slug === slug)
}

