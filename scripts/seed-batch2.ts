import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'vm9j2v4c',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function block(text: string) {
  return { _type: 'block', style: 'normal', _key: Math.random().toString(36).slice(2), children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text, marks: [] }], markDefs: [] }
}

async function uploadFromUrl(url: string, label: string) {
  try {
    console.log(`  Fetching image: ${label}...`)
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buffer = Buffer.from(await res.arrayBuffer())
    const asset = await client.assets.upload('image', buffer, { filename: `${label}.jpg`, contentType: 'image/jpeg' })
    console.log(`  ✓ ${label}`)
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  } catch (e) {
    console.log(`  ✗ ${label} — skipped (add via Studio)`)
    return null
  }
}

const PIECES = [
  {
    slug: 'furoshiki',
    title: 'Furoshiki',
    titleJa: '風呂敷',
    category: '日用品',
    lifestyleTags: ['Zero Waste', 'Gift', 'Minimalist Kitchen'],
    region: '近畿',
    placeName: '京都府',
    heroUrl: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=1600&q=85',
    origin: [block('Furoshiki is a square piece of cloth with a history stretching back to the Nara period (8th century), when it was used to wrap the belongings of nobles visiting the imperial bathhouse — furoshiki literally translates to "bath spread." Over centuries, it became the everyday carry solution of Edo Japan: merchants wrapped goods, farmers carried produce, and travelers packed everything they owned into a single cloth tied over the shoulder.'), block('Kyoto became its center. The city\'s weaving tradition, fed by centuries of imperial textile production, produced furoshiki in silk, hemp, and cotton — each pattern carrying regional and seasonal meaning. A crane meant longevity. Waves signaled the sea trade. The cloth was never disposable; it was folded, washed, and used again for decades.')],
    craft: [block('Traditional furoshiki are woven on wooden looms, with the most prized examples made from Nishijin silk — the same fabric used in Kyoto\'s ceremonial kimono. The dyeing is done with resist techniques (yuzen or shibori), building up layers of color before the final rinse reveals the pattern beneath.'), block('Modern furoshiki use cotton or rayon, making them softer and faster to dry. A quality piece is hemmed on all four sides and sized precisely: 50cm for wrapping small gifts, 70cm for a wine bottle, 105cm for carrying a bento and thermos together.')],
    maker: { name: 'Musubi Kyoto', location: 'Kyoto, Kinki', quote: 'One cloth. Infinite shapes. Zero waste — this is the original flexible packaging.' },
    crossover: 'Your tote bag evolved. Furoshiki does everything a bag does — and then folds flat into your pocket.',
    newUse: [
      { caption: 'A Brooklyn florist wraps weekly bouquets in indigo furoshiki instead of paper. Customers return the cloth for a discount.' },
      { caption: 'Used as a picnic blanket in Hyde Park, then re-tied as a wine-and-cheese carrier for the walk home.' },
    ],
    howItLives: [block('Hang one on a hook by the door: it becomes a bag the moment you need it. Lay it flat on a coffee table: it becomes a placemat. Tie it around a gift: the wrapping is the gift. The furoshiki never has one job — it has whatever job you give it.')],
    keepers: [{ name: 'Mia T., zero-waste advocate, Amsterdam', quote: 'I own three furoshiki. They\'ve replaced every plastic bag, gift wrap roll, and paper bag I used to buy.' }],
  },
  {
    slug: 'nanbu-tekki',
    title: 'Nanbu Tekki',
    titleJa: '南部鉄器',
    category: '工芸',
    lifestyleTags: ['Slow Morning', 'Zen Living', 'Minimalist Kitchen'],
    region: '東北',
    placeName: '岩手県盛岡市',
    heroUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85',
    origin: [block('In the cold mountains of Iwate Prefecture, the Nanbu clan patronized ironworkers from Kyoto in the 17th century, asking them to cast tea ceremony kettles worthy of the imperial capital. The craftsmen brought their techniques north and found something unexpected: iron sand from the local rivers, charcoal from the beech forests, and spring water of unusual purity that made the iron ring like a bell when struck.'), block('Morioka became the center of tetsubin — cast iron kettles — prized not just for their function but for their sound. A Nanbu kettle boils differently from any other vessel; the water emerges noticeably softer, its mineral edge smoothed by the iron it has absorbed.')],
    craft: [block('Each Nanbu Tekki piece begins as a sand mold packed by hand around a wax model. Molten iron at 1300°C is poured in one continuous motion — hesitation creates voids, and a voided kettle is discarded. After cooling, the piece is removed, polished with brushes, then coated with urushi lacquer and heated over charcoal to bond the finish to the iron.'), block('The characteristic arare pattern — the field of small raised bumps — is not decorative. It increases surface area for heat retention and gives the hand a grip that doesn\'t slip even when the kettle is wet. A tetsubin made today uses the same tools and timing as one made in 1650.')],
    maker: { name: 'Koizumi Ironworks', location: 'Morioka, Iwate', quote: 'The kettle should outlive you. That is the minimum standard.' },
    crossover: 'Your morning ritual\'s missing object. The kettle that makes water taste different — and makes you pause long enough to notice.',
    newUse: [
      { caption: 'A Berlin coffee roaster uses a small Nanbu tetsubin for cupping sessions. "The water changes character. Every roaster who visits asks where it\'s from."' },
      { caption: 'Placed on a gas burner in a Milan apartment kitchen as the permanent tea kettle. The owner hasn\'t used the electric kettle since.' },
    ],
    howItLives: [block('The tetsubin asks something of you: it must be dried after every use (never left with water inside), seasoned occasionally with a thin layer of oil, and never washed with soap. In exchange, it becomes more itself over years — the iron deepening in color, the water improving with each use. It is a long relationship.')],
    keepers: [{ name: 'James K., tea ceremony student, London', quote: 'I bought it for the aesthetics. After three months, I realized I was waking up earlier just to have time with it.' }],
  },
  {
    slug: 'kokeshi',
    title: 'Kokeshi',
    titleJa: 'こけし',
    category: '工芸',
    lifestyleTags: ['Interior Design', 'Gift', 'Mindful Rituals'],
    region: '東北',
    placeName: '宮城県鳴子町',
    heroUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1600&q=85',
    origin: [block('Kokeshi emerged in the hot spring towns of Tohoku during the Edo period — Naruko, Tsuchiyu, Zaō — where woodturners who made bowls and trays for the onsen ryokan began carving small dolls for children of visiting travelers. Each valley developed its own style independently, and the differences are precise: Naruko kokeshi have a head that squeaks when turned; Tsuchiyu kokeshi have a chrysanthemum painted on top; Tsugaru kokeshi are the most abstract, almost Scandinavian.'), block('They were made from water-soaked mizuki (dogwood) or cherry wood, turned on foot-powered lathes, painted with natural pigments, and finished with wax. There were no faces that smiled; the expression was neutral, internal — a quality the Japanese call mu, emptiness that holds potential.')],
    craft: [block('A kokeshi begins on the lathe: the blank is shaped while spinning, the turner\'s tools finding the neck, the shoulder, the curve of the head in a single uninterrupted pass. The painting is done freehand, no stencils, using brushes that sometimes contain a single hair for the finest lines. The eyebrows, the mouth, the floral patterns on the body — each stroke is final.'), block('A master turns and paints a kokeshi in about forty minutes. An apprentice takes years before the proportions feel right in the hand and the stroke lands true. The ratio of head to body, the taper of the neck — these are not written down anywhere. They are learned by watching.')],
    maker: { name: 'Sato Kōjirō', location: 'Naruko, Miyagi', quote: 'I do not decide the face. The wood shows me what it wants to be.' },
    crossover: 'Your Scandinavian shelf\'s Japanese counterpart. The same reduction, the same quiet — but older by two centuries.',
    newUse: [
      { caption: 'A row of five Naruko kokeshi on a windowsill in Stockholm. The owner collects one per trip to Japan, each from a different region.' },
      { caption: 'Used as a meditation anchor on a home altar in Portland — the face\'s neutrality is the point.' },
    ],
    howItLives: [block('Kokeshi hold space without demanding attention. They work alone or in groups; three on a shelf feel like a conversation, one on a desk feels like a presence. They do not need a stand or a case. They stand on their own, turned from a single piece of wood, and they are content to be looked at from across the room.')],
    keepers: [{ name: 'Anna B., ceramicist, Stockholm', quote: 'Every craft object I own tries to be beautiful. The kokeshi just tries to be still. That is rarer.' }],
  },
  {
    slug: 'edo-kiriko',
    title: 'Edo Kiriko',
    titleJa: '江戸切子',
    category: '工芸',
    lifestyleTags: ['Whisky Lovers', 'Interior Design', 'Gift'],
    region: '関東',
    placeName: '東京都墨田区',
    heroUrl: 'https://images.unsplash.com/photo-1558618047-f4e60cde61ce?w=1600&q=85',
    origin: [block('In 1834, a glass craftsman named Kagaya Kyūbei began cutting patterns into imported glass in his Edo workshop, inspired by English cut crystal that arrived on trade ships. His techniques spread through the low city — the shitamachi of east Edo, present-day Sumida Ward — where craftsmen adapted the Western cutting method to Japanese sensibilities: less depth, more geometry, patterns drawn from kimono and lacquerware.'), block('Edo Kiriko was nearly lost twice: first in the Great Kanto Earthquake of 1923, then in the firebombing of Tokyo in 1945. Each time, the few remaining craftsmen rebuilt the tradition from memory. Today, only about 60 active craftsmen are designated traditional artisans of Edo Kiriko — the annual output is small enough that each piece is individually numbered.')],
    craft: [block('The glass blank — typically a double-layered piece with colored glass over clear — is pressed against a rotating iron wheel fed with a slurry of water and abrasive. The cutter guides the glass, never the wheel; the pattern emerges from the cutter\'s memory of where the wheel has been. A single whisky glass requires 40 to 60 individual cuts, each one irreversible.'), block('The final step is polishing with a wooden wheel and oxide powder until the cuts catch light from every angle. The colored layer — red, blue, indigo, or amber — reveals itself fully only after polishing: what was an opaque scratch becomes a window into color.')],
    maker: { name: 'Hanashyo Glass Studio', location: 'Sumida, Tokyo', quote: 'The cut is a conversation between the wheel and the glass. I am only the translator.' },
    crossover: 'Your whisky glass, given a story. Edo Kiriko holds single malt the way a proper vessel should: it improves the drink by improving the moment.',
    newUse: [
      { caption: 'A New York bartender uses an Edo Kiriko glass for the final presentation of the bar\'s signature Old Fashioned. "Guests ask about it before they ask about the whisky."' },
      { caption: 'Displayed on a windowsill in afternoon light — the cuts scatter amber and blue across the wall. The owner describes it as "the cheapest stained glass window I\'ve ever bought."' },
    ],
    howItLives: [block('Edo Kiriko is among the few functional objects that improve with use in a purely psychological sense: knowing what the glass cost in time and skill changes how you hold it. You pour more carefully, you drink more slowly, you notice the weight. The glass teaches you to pay attention.')],
    keepers: [{ name: 'David M., whisky collector, Edinburgh', quote: 'I have crystal from three countries. The Edo Kiriko is the only one I don\'t put in the cabinet.' }],
  },
  {
    slug: 'tenugui',
    title: 'Tenugui',
    titleJa: '手ぬぐい',
    category: '日用品',
    lifestyleTags: ['Zero Waste', 'Slow Morning', 'Yoga & Wellness'],
    region: '関東',
    placeName: '東京都',
    heroUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85',
    origin: [block('The tenugui — a plain-woven cotton rectangle, roughly 35cm by 90cm, cut raw on both short ends — has been in continuous use in Japan since the Heian period. Its genius is what it doesn\'t have: no hem on the cut ends (which allows it to dry faster), no loop for hanging (it doesn\'t need one), no thickness that might harbor mold. It is the minimum possible cloth that can dry a hand, wrap a head, cool a neck, or cover a wound.'), block('By the Edo period, tenugui had become a form of advertising and social currency. Kabuki actors gave printed tenugui to fans; shops gave them to loyal customers; bathhouses provided them to patrons. The dyeing tradition — particularly the chusen method, where dye is poured through folded layers of cloth — allowed for precise, graphic patterns unique to Japan\'s textile history.')],
    craft: [block('The finest tenugui are made with chusen dyeing: the undyed cotton is folded accordion-style onto a table, and dye is poured from a jug through a paste-resist stencil. Gravity does the work; the dye seeps through every layer simultaneously, creating patterns that are identical on both sides. The craftsman controls only the pour — angle, speed, height — and no two chusen pieces are ever exactly the same.'), block('The raw-cut ends are intentional, not unfinished. They fray slightly with washing, then stabilize into a soft border. A tenugui that has been washed 200 times is softer and more absorbent than a new one — the opposite of most textiles.')],
    maker: { name: 'Kamawanu', location: 'Tokyo, Kanto', quote: 'The fewer decisions built into an object, the more decisions the user gets to make.' },
    crossover: 'Your handkerchief, but alive. Tenugui does what a handkerchief does, then wraps your water bottle, ties your hair, and becomes a wall hanging on the weekend.',
    newUse: [
      { caption: 'A surfer in Byron Bay uses an indigo tenugui as a post-session towel. "Dries in ten minutes on the roof of the van. My regular towel takes two days."' },
      { caption: 'Framed and hung as art in a Copenhagen apartment. The owner has twelve, rotating seasonally.' },
    ],
    howItLives: [block('Tenugui multiplies its uses the longer you have it. Start by using it as a hand towel. Then find it wrapped around a water bottle one morning because you needed something. Then around your head on a run. Then as a napkin at a picnic. The cloth doesn\'t specialize; it adapts. After a year with one, you begin to wonder what you were doing with all those single-purpose textiles.')],
    keepers: [{ name: 'Sara L., textile designer, Helsinki', quote: 'I study Japanese textiles professionally. I still use a plain indigo tenugui every day. The design problem was solved centuries ago.' }],
  },
  {
    slug: 'bizen-yaki',
    title: 'Bizen Yaki',
    titleJa: '備前焼',
    category: '工芸',
    lifestyleTags: ['Zen Living', 'Slow Morning', 'Minimalist Kitchen'],
    region: '中国',
    placeName: '岡山県備前市',
    heroUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=85',
    origin: [block('Bizen is one of Japan\'s "Six Ancient Kilns" — a ceramic tradition unbroken for over a thousand years in the hills east of Okayama. Unlike most Japanese ceramics, Bizen uses no glaze, no painting, no colored slip. The clay is everything: a heavy, iron-rich earth excavated from the local mountains, aged for months in open pits, then fired in wood kilns at 1300°C for ten to fifteen days straight.'), block('The colors and patterns that emerge — the orange fire marks (hidasuki), the dark surface burns (sangiri), the gray ash deposits (goma) — are entirely determined by where in the kiln the piece was placed, what wood burned nearest to it, and how the fire moved over ten days. The potter proposes; the kiln decides.')],
    craft: [block('Bizen clay is thrown on the wheel in a high-iron state that would cause most potters problems: it cracks under rapid temperature changes, it warps if dried too fast, it collapses if the walls are too thin. Bizen potters work with the clay\'s stubbornness rather than against it — the forms are thick, low, and wide for a reason.'), block('The firing is communal. Several potters share a single climbing kiln (noborigama), loading it together and tending the fire in shifts around the clock. A piece placed near the firebox will be dark and dramatic; one near the chimney will be paler and quieter. The assignment of positions in the kiln is a form of collaboration with fire.')],
    maker: { name: 'Fujiwara Yū', location: 'Bizen, Okayama', quote: 'I make an object and put it in the fire. What comes out is a collaboration.' },
    crossover: 'Your most honest cup. No glaze, no decoration — just clay that has been through fire. It ages with you.',
    newUse: [
      { caption: 'A Copenhagen chef uses a Bizen tokkuri as a sauce vessel during omakase service. "The unglazed surface breathes. It keeps sauces at temperature differently."' },
      { caption: 'A single Bizen cup on a morning desk in Montreal. Used daily for coffee, accumulated a deep patina over two years. The owner says it now looks like a different object.' },
    ],
    howItLives: [block('Bizen ware changes over years of use. Coffee and tea seep into the unglazed surface and darken it; oil from hands builds up a subtle patina; the iron in the clay continues to oxidize slowly. A Bizen cup used for a decade is more beautiful than a new one — and more yours.')],
    keepers: [{ name: 'Thomas N., chef, Copenhagen', quote: 'Every other vessel I\'ve owned has degraded with use. Bizen gets better. I don\'t understand it yet.' }],
  },
  {
    slug: 'washi',
    title: 'Washi',
    titleJa: '和紙',
    category: '工芸',
    lifestyleTags: ['Slow Morning', 'Mindful Rituals', 'Interior Design'],
    region: '中部',
    placeName: '福井県越前市',
    heroUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1600&q=85',
    origin: [block('Washi — Japanese handmade paper — arrived from China in the 7th century and within two hundred years had become something entirely different from its origin: thicker, stronger, more translucent, and capable of lasting a thousand years without brittleness. The key was the fiber: kozo (paper mulberry), gampi, and mitsumata, harvested from mountain shrubs, boiled in lye, beaten by hand, and formed into sheets one at a time in a water suspension.'), block('Echizen, in Fukui Prefecture, has been making washi since the 5th century — longer than almost any other site in Japan. The town\'s founding myth involves a mysterious woman appearing at the river\'s edge and showing the locals how to make paper from the plants growing on the bank. Today, Echizen\'s 70-odd remaining papermakers carry the same process forward.')],
    craft: [block('Washi-making begins with the harvest: kozo stalks are stripped, steamed, and the outer bark removed by hand. The inner bark is cooked in wood ash lye, then washed in cold running river water for hours until perfectly clean. It is beaten — by wooden mallets or by stone — until the fibers separate completely.'), block('The sheet is formed by suspending the beaten fiber in a vat of water mixed with neri, a natural slime from the roots of tororo-aoi (sunset hibiscus). The papermaker scoops the vat with a bamboo frame and screen, shaking it in a precise figure-eight motion to interlock the fibers. Each sheet is pressed, then dried on a wooden board in the sun. The whole process takes two days per batch.')],
    maker: { name: 'Iwano Ichibei', location: 'Echizen, Fukui', quote: 'Western paper is made of dead fibers pressed together. Washi is made of living fibers woven together. That is why one crumbles and one endures.' },
    crossover: 'Your notebook\'s honest ancestor. Paper that takes ink differently, ages differently, and makes writing feel like it matters more.',
    newUse: [
      { caption: 'An architect in Zürich uses Echizen washi for final presentation drawings. Clients consistently ask what it\'s printed on before asking about the design.' },
      { caption: 'Used as lampshade material in a Kyoto-inspired apartment in Melbourne. The translucency shifts through the day as the light outside changes.' },
    ],
    howItLives: [block('Washi ages the way wood ages: it develops character. Old washi — a letter or document kept carefully — takes on a amber tone and a texture that feels almost alive. It doesn\'t yellow the way wood-pulp paper does; it deepens. A washi notebook used for a year is worth keeping not just for its contents but for itself.')],
    keepers: [{ name: 'Claire M., letterpress printer, Lyon', quote: 'I\'ve printed on every paper there is. Washi is the one where the ink decides to stay.' }],
  },
  {
    slug: 'zabuton',
    title: 'Zabuton',
    titleJa: '座布団',
    category: '日用品',
    lifestyleTags: ['Zen Living', 'Yoga & Wellness', 'Interior Design'],
    region: '近畿',
    placeName: '京都府',
    heroUrl: 'https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1600&q=85',
    origin: [block('The zabuton — a flat square floor cushion, typically 55cm to 65cm on a side — developed in Japan alongside the architecture that required it: the raised wooden floor covered in tatami, where chairs had no place and sitting on the bare mat was cold and hard. The zabuton solved this simply: a double layer of fabric, filled with cotton batting, stitched around the edges.'), block('Kyoto zabuton became distinguished by their silk or nishijin fabric covers — the same textile tradition that produced imperial kimono. The proportions were codified by tea ceremony: a zabuton placed before a master at a formal gathering communicated status, respect, and hospitality in the specific density of its cotton filling and the formality of its weave.')],
    craft: [block('A traditional zabuton is filled with long-staple cotton, layered in specific directions to build the right density — firm enough to support the seated body but yielding enough not to create pressure points over hours of sitting. The cover is sewn by hand at the corners and finished with a silk cord border (beri) that defines its front edge.'), block('The outer fabric determines everything else: a silk zabuton is formal and seasonal; a cotton one is everyday; hemp is for summer. The batting is replaced every few years as it compresses. A quality zabuton frame — the woven outer structure — can last decades with re-stuffing.')],
    maker: { name: 'Marui Zabuton', location: 'Kyoto, Kinki', quote: 'To sit correctly is to think correctly. The zabuton is where that begins.' },
    crossover: 'Your meditation cushion, without the self-consciousness. The zabuton has been used for seated practice for centuries — it just never called itself a wellness product.',
    newUse: [
      { caption: 'Stacked three high as a side table in a minimal São Paulo apartment. The owner prefers it to any furniture she\'s found.' },
      { caption: 'Used as floor seating during film screenings in a London flat. "We got rid of the sofa and never replaced it."' },
    ],
    howItLives: [block('The zabuton works best in a home that accepts sitting on the floor as a possibility, not a compromise. Place one in front of a low table, in a corner with good light, or in front of a window. It changes the room: suddenly the floor is an option, and with that option comes a different quality of attention to the space.')],
    keepers: [{ name: 'Rachel S., yoga teacher, Vancouver', quote: 'I teach with zafu cushions and blocks. I sit at home on a zabuton. The difference is that the zabuton was never designed for sitting practice — it just works.' }],
  },
]

async function run() {
  console.log('\n── Seeding Batch 2: 8 new pieces ──\n')

  for (const p of PIECES) {
    console.log(`\n[${p.title}]`)

    const heroImage = await uploadFromUrl(p.heroUrl, `${p.slug}-hero`)

    const doc: any = {
      _type: 'piece',
      _id: `piece-${p.slug}`,
      title: p.title,
      titleJa: p.titleJa,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      lifestyleTags: p.lifestyleTags,
      region: p.region,
      placeName: p.placeName,
      origin: p.origin,
      craft: p.craft,
      maker: {
        name: p.maker.name,
        location: p.maker.location,
        quote: p.maker.quote,
      },
      crossover: p.crossover,
      newUse: p.newUse.map((u, i) => ({ _key: `n${i + 1}`, caption: u.caption })),
      howItLives: p.howItLives,
      keepers: p.keepers.map((k, i) => ({ _key: `k${i + 1}`, name: k.name, quote: k.quote })),
      publishedAt: new Date().toISOString(),
    }

    if (heroImage) doc.heroImage = heroImage

    await client.createOrReplace(doc)
    console.log(`  ✓ ${p.title} seeded`)
  }

  console.log('\n── Done. 8 pieces added. ──\n')
}

run().catch(console.error)
