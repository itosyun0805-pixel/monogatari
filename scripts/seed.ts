import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'vm9j2v4c',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const pieces = [
  {
    _type: 'piece',
    title: 'Noren',
    titleJa: 'のれん',
    slug: { _type: 'slug', current: 'noren' },
    category: '日用品',
    lifestyleTags: ['Zen Living', 'Interior Design', 'Gift'],
    region: '近畿',
    placeName: 'Kyoto / 京都',
    origin: [{ _type: 'block', _key: 'o1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'The noren is a fabric divider hung at shop entrances and room doorways across Japan. First appearing in the Heian period as protection from dust and wind, it evolved into a symbol of identity and welcome. A shop\'s noren carries its name and crest—to "pass through the noren" is to enter a trusted establishment. Over centuries, the noren became an art form: indigo-dyed, resist-patterned, woven with the quiet precision that defines Japanese craft.', marks: [] }] }],
    craft: [{ _type: 'block', _key: 'c1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Traditional noren are hand-woven from hemp, cotton, or silk. The signature split panels are not merely decorative—they allow passage while maintaining division. Dyeing techniques range from tsutsugaki (freehand rice-paste resist) to katazome (stencil dyeing). Each piece requires weeks of preparation before a single thread is dyed.', marks: [] }] }],
    maker: {
      name: 'Keiko Yamamoto',
      location: 'Kyoto / 京都府',
      quote: 'A noren does not block. It invites.',
    },
    crossover: 'In your world, this is the curtain between the kitchen and the hallway — the soft boundary that says "come in, but not yet." In Japan, it\'s a Noren. A hand-dyed fabric that carries the soul of its maker.',
    newUse: [
      { _key: 'n1', caption: 'A Brooklyn studio uses a deep-indigo noren as a room divider, replacing a door that was never needed.' },
      { _key: 'n2', caption: 'Hung above a bed instead of a headboard. Still, intentional, present.' },
    ],
    howItLives: [{ _type: 'block', _key: 'h1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'In Japan, a noren hanging outside a shop means it is open. When the noren is taken down, business is closed for the day. This small ritual — raising and lowering fabric — marks the rhythm of the working day with quiet ceremony.', marks: [] }] }],
    keepers: [
      { _key: 'k1', name: 'Takeshi, café owner, Tokyo', quote: 'I rehung my grandfather\'s noren when I opened my café. People ask about it every day.' },
    ],
    publishedAt: new Date().toISOString(),
  },
  {
    _type: 'piece',
    title: 'Koh',
    titleJa: 'お香',
    slug: { _type: 'slug', current: 'koh' },
    category: '日用品',
    lifestyleTags: ['Yoga & Wellness', 'Slow Morning', 'Mindful Rituals', 'Zero Waste'],
    region: '近畿',
    placeName: 'Awaji Island / 淡路島',
    origin: [{ _type: 'block', _key: 'o1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Japan has been burning incense for over 1,400 years. What began as a Buddhist ritual — carrying offerings to the spirits — evolved into kōdō, the Way of Incense: a meditative practice of listening to fragrance. In the Heian court, aristocrats competed in incense-blending. Warriors carried incense into battle to scent their armor, so that death would be met with dignity. Today, Awaji Island produces 70% of Japan\'s incense, its sea air and soil still carrying that ancient attention.', marks: [] }] }],
    craft: [{ _type: 'block', _key: 'c1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Koh is made from natural aromatic woods and resins — aloeswood (jinko), sandalwood (byakudan), clove, cinnamon, and star anise — bound with natural tabu-no-ki bark powder. The blending ratios are closely guarded. Master blenders work by smell alone, adjusting across seasons as the raw materials themselves change.', marks: [] }] }],
    maker: {
      name: 'Hiroshi Tanaka',
      location: 'Awaji Island / 兵庫県淡路島',
      quote: 'We do not make a product. We make a moment.',
    },
    crossover: 'In your world, this is the candle you light on Sunday mornings before the city wakes up. In Japan, it\'s Koh — incense that has been Japan\'s answer to stillness for 1,400 years. Thinner than a pencil. Burns for twelve minutes. Changes the entire room.',
    newUse: [
      { _key: 'n1', caption: 'A meditation teacher in Berlin lights a single stick before every session. "It tells the room what\'s about to happen," she says.' },
      { _key: 'n2', caption: 'Used as a natural timer. One stick of koh burns for exactly the length of a focused work session.' },
    ],
    howItLives: [{ _type: 'block', _key: 'h1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'In Japanese homes, incense marks transitions: morning prayer, the start of study, welcoming a guest. The smoke does not fill the room — it passes through it, leaving only the memory of fragrance. This impermanence is the point.', marks: [] }] }],
    keepers: [
      { _key: 'k1', name: 'Yuki, architect, Osaka', quote: 'I bring koh to every new project I start. It resets my mind.' },
    ],
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _type: 'piece',
    title: 'Daruma',
    titleJa: 'だるま',
    slug: { _type: 'slug', current: 'daruma' },
    category: 'その他',
    lifestyleTags: ['Gift', 'Zen Living', 'Interior Design'],
    region: '関東',
    placeName: 'Takasaki, Gunma / 群馬県高崎市',
    origin: [{ _type: 'block', _key: 'o1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'The daruma is modeled on Bodhidharma, the Indian monk who founded Zen Buddhism and, legend holds, meditated for nine years until his limbs withered away. What remained was pure intention. The daruma doll inherits that stillness — weighted at the base so it always returns upright, no matter how many times it falls. In Japan, you set a goal and paint in one eye. When the goal is achieved, you paint in the other.', marks: [] }] }],
    craft: [{ _type: 'block', _key: 'c1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Takasaki in Gunma Prefecture produces 80% of all daruma in Japan. They are made from papier-mâché — layers of washi paper built up over a wooden mold, dried, painted by hand. The distinctive face with its thick brows and beard is rendered in a single, confident brushstroke tradition passed through generations of artisan families.', marks: [] }] }],
    maker: {
      name: 'Saburo Imai',
      location: 'Takasaki, Gunma / 群馬県高崎市',
      quote: 'Fall seven times, stand up eight. The daruma already knows this.',
    },
    crossover: 'In your world, this is the vision board, the sticky note on the mirror, the habit tracker app. Japan solved this problem in papier-mâché. One eye open until your goal is met. A daily, physical reminder that sits on your desk and will not let you forget.',
    newUse: [
      { _key: 'n1', caption: 'A startup founder in San Francisco keeps a daruma on her desk. "It\'s the only goal-setting system I\'ve stuck with."' },
      { _key: 'n2', caption: 'Used as a wedding guest book alternative — each guest signs the daruma. The couple paints the second eye on their anniversary.' },
    ],
    howItLives: [{ _type: 'block', _key: 'h1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'At the start of every new year, Japanese politicians, athletes, and business owners buy a daruma and paint in one eye. They place it where they will see it daily. When the goal is achieved — an election won, a season completed, a business launched — the second eye is painted and the daruma is brought to a temple to be burned with gratitude.', marks: [] }] }],
    keepers: [
      { _key: 'k1', name: 'Marco, designer, Milan', quote: 'I had never set a goal I actually kept until I got a daruma. Having the object changes the commitment.' },
    ],
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
  },
]

async function seed() {
  console.log('Seeding Monogatari data...')
  for (const piece of pieces) {
    const result = await client.create(piece)
    console.log(`✓ Created: ${piece.title} (${result._id})`)
  }
  console.log('Done.')
}

seed().catch(console.error)
