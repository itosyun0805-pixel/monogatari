export type EditorialCategory = 'Objects' | 'Rituals' | 'Field Notes'

export type EditorialSection = {
  heading: string
  headingJa: string
  paragraphs: string[]
}

export type EditorialSource = {
  label: string
  publisher: string
  url: string
}

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
  heroImage: string
  heroAlt: string
  quote: string
  cultureLens: {
    familiarModel: string
    japaneseAlternative: string
  }
  sections: EditorialSection[]
  sources: EditorialSource[]
}

export const editorialStories: EditorialStory[] = [
  {
    slug: 'why-a-noren-is-not-just-a-curtain',
    number: '001',
    title: 'Why a Noren Is Not Just a Curtain',
    titleJa: 'のれんは、ただの布ではない',
    category: 'Objects',
    format: 'Culture Through Function',
    excerpt: 'A door is either open or closed. A noren creates a third state: a threshold that protects, signals, and welcomes at the same time.',
    publishedAt: '2026-07-19T09:00:00+09:00',
    readTime: '9 min read',
    location: 'Tokyo & Aichi, Japan',
    relatedPieceSlug: 'noren',
    heroImage: '/editorial/noren-threshold.png',
    heroAlt: 'An indigo noren moving gently in a wooden Japanese doorway',
    quote: 'The function is not to close the room. It is to make the boundary legible without making it absolute.',
    cultureLens: {
      familiarModel: 'A door makes access binary: open or closed, public or private.',
      japaneseAlternative: 'A noren makes the boundary visible while keeping air, light, sound, and people in motion.',
    },
    sections: [
      {
        heading: 'The problem with calling it a curtain',
        headingJa: '「カーテン」と訳すと失われるもの',
        paragraphs: [
          'Calling a noren a curtain is not wrong, but it is incomplete. A Western curtain usually belongs to a window and manages sight or light. A noren hangs in a passage. Its central question is not “what can you see?” but “how do you move from here to there?”',
          'That distinction explains its split panels. The opening lets a body pass without drawing the whole textile aside. The cloth gives way, touches the shoulder, and falls back into place. Its form is already an instruction for use.',
        ],
      },
      {
        heading: 'A shop that speaks before anyone does',
        headingJa: '人より先に、店が語る',
        paragraphs: [
          'Across Japanese streets, a noren can announce that a shop is open, indicate the kind of business inside, shade an entrance, and screen dust or direct sight. Government of Japan material describes it as the “face” of a shop: damage to the noren can even stand metaphorically for damage to a business’s trust and reputation.',
          'A sign communicates information at a distance. A noren adds a physical encounter. To enter, you pass through the business’s identity. Branding, weather protection, and spatial etiquette occupy the same square metres of cloth.',
        ],
      },
      {
        heading: 'A softer kind of privacy',
        headingJa: '閉じないプライバシー',
        paragraphs: [
          'Many modern interiors solve privacy with opacity: a wall, a solid door, a lock. The noren solves it by reducing the direct line of sight. It makes looking in less automatic while leaving the room connected to what surrounds it.',
          'This is useful where total separation would be excessive: between a kitchen and dining space, at a studio entrance, or across open shelving. Privacy becomes graduated rather than binary.',
        ],
      },
      {
        heading: 'Technique becomes function',
        headingJa: '技法が機能になる',
        paragraphs: [
          'Traditional examples use cotton or hemp and resist-dyeing methods that keep motifs clear through repeated exposure and handling. The dye is not merely decoration. It strengthens the textile’s identity as a durable working surface, while the fabric remains light enough to respond to air.',
          'That is Monogatari’s central test: if the craft technique disappeared, would the function become weaker? With a noren, material, dye, cut, weight, and movement combine to produce a boundary that a rigid object cannot imitate.',
        ],
      },
      {
        heading: 'What it can mean now',
        headingJa: '現代の暮らしへの翻訳',
        paragraphs: [
          'The contemporary appeal of a noren is not nostalgia for an old shopfront. It is a practical response to open-plan life. We increasingly want spaces to change purpose through the day, yet our default tools—walls and doors—make every division heavy.',
          'A noren offers enough separation to change the atmosphere without pretending the room has become somewhere else. It is less architecture than an adjustable agreement between two spaces.',
        ],
      },
    ],
    sources: [
      { label: 'Noren: The Face of a Shop', publisher: 'Government of Japan', url: 'https://www.gov-online.go.jp/eng/publicity/book/hlj/html/202009/202009_05_en.html' },
    ],
  },
  {
    slug: 'incense-as-a-14-minute-ritual',
    number: '002',
    title: 'Incense as a Clock Without an Alarm',
    titleJa: 'アラームのない時間',
    category: 'Rituals',
    format: 'One Object, One Ritual',
    excerpt: 'An incense stick gives a small piece of time a visible beginning and end—without a notification, score, or streak.',
    publishedAt: '2026-07-26T09:00:00+09:00',
    readTime: '8 min read',
    location: 'Awaji Island, Hyogo',
    relatedPieceSlug: 'koh',
    heroImage: '/editorial/koh-time.png',
    heroAlt: 'A single Japanese incense stick burning beside blank paper on a dark wood desk',
    quote: 'A timer interrupts you when time is over. Incense lets time finish in the same room.',
    cultureLens: {
      familiarModel: 'Productivity tools quantify time, record it, and report performance back to us.',
      japaneseAlternative: 'Incense makes time sensory and finite without turning the ritual into a measurement of the self.',
    },
    sections: [
      {
        heading: 'Time you can see',
        headingJa: '目に見える時間',
        paragraphs: [
          'A countdown timer is abstract until it sounds. Incense is the opposite: the remaining length, the growing ash, and the thinning smoke make duration continuously visible. Its ending arrives gradually rather than as an interruption.',
          'Different sticks burn for different lengths, so “fourteen minutes” should never be treated as a universal specification. The more useful idea is a bounded ritual: choose a stick whose actual burn time fits the activity, then let its material duration define the session.',
        ],
      },
      {
        heading: 'From fragrance to attention',
        headingJa: '香りから注意へ',
        paragraphs: [
          'Japanese incense culture contains formal practices, but its everyday lesson is accessible: scent can be approached quietly rather than projected across a room. The phrase often translated as “listening to incense” suggests attention, discrimination, and proximity.',
          'This differs from the modern fragrance market’s promise to transform an entire environment. A restrained incense ritual does not need to brand the room. It can simply mark the beginning of writing, stretching, reading, or tidying.',
        ],
      },
      {
        heading: 'Why Awaji matters',
        headingJa: '淡路島という産地',
        paragraphs: [
          'Awaji Island is Japan’s leading incense-producing region. Official Hyogo tourism sources describe a local industry shaped by generations of specialist knowledge and by the Seto Inland Sea climate, whose winds help the drying process.',
          'The finished stick looks almost structureless. Yet powder selection, blending, moisture, extrusion, cutting, and drying all affect whether it burns evenly. Its simple use is made possible by accumulated control upstream.',
        ],
      },
      {
        heading: 'A ritual that does not grade you',
        headingJa: '評価しない儀式',
        paragraphs: [
          'A productivity app remembers yesterday, compares today, and encourages tomorrow. Those features can help, but they can also turn rest or concentration into another field of performance.',
          'Incense has no memory. If you become distracted, the stick does not call the session a failure. It continues to burn. That indifference is part of its function: the object holds the boundary so the user does not have to keep checking it.',
        ],
      },
      {
        heading: 'Use it safely and specifically',
        headingJa: '安全に、用途を決めて使う',
        paragraphs: [
          'Place incense in a stable, fire-resistant holder, away from paper, textiles, children, pets, and moving air. Ventilate the room and never leave it unattended. The ritual only works if its physical risks are treated plainly.',
          'Then assign it one modest job. One stick for the first page of the morning. One shorter piece while preparing tea. The point is not optimization. It is to let an object give otherwise shapeless time a beginning and an end.',
        ],
      },
    ],
    sources: [
      { label: 'The Birthplace of Incense Culture in Japan: Ei Area, Awaji Island', publisher: 'Visit HYOGO', url: 'https://www.hyogo-tourism.jp/world/review/detail_216.html' },
      { label: 'Incense-making experience on Awaji Island', publisher: 'Visit HYOGO', url: 'https://www.hyogo-tourism.jp/business/experience/detail_3052.html' },
    ],
  },
  {
    slug: 'daruma-and-the-psychology-of-keeping-promises',
    number: '003',
    title: 'The Daruma and the Psychology of Keeping Promises',
    titleJa: 'だるまと約束の心理学',
    category: 'Objects',
    format: 'Culture Through Function',
    excerpt: 'A one-eyed daruma turns an invisible intention into an object that remains visibly unfinished.',
    publishedAt: '2026-08-02T09:00:00+09:00',
    readTime: '9 min read',
    location: 'Takasaki, Gunma',
    relatedPieceSlug: 'daruma',
    heroImage: '/editorial/daruma-promise.png',
    heroAlt: 'A red papier-mache daruma with one eye left blank on a wooden worktable',
    quote: 'An unfinished daruma is not motivation in storage. It is a promise that has taken up space.',
    cultureLens: {
      familiarModel: 'A goal is often stored as private text in an app, notebook, or spreadsheet.',
      japaneseAlternative: 'A daruma gives the goal a public face and keeps completion physically visible.',
    },
    sections: [
      {
        heading: 'A goal becomes an object',
        headingJa: '目標を、物にする',
        paragraphs: [
          'Most intentions have almost no material weight. They are written in a list, hidden by the next page, and eventually replaced by newer intentions. A daruma changes the storage medium. The goal enters the room as a face.',
          'In the customary practice described by Takasaki City, one eye is filled while making a wish or setting an aim. The other is completed when the wish is fulfilled or the period ends. Between those moments, incompleteness is the visible state of the object.',
        ],
      },
      {
        heading: 'Why one missing eye matters',
        headingJa: '片目であることの意味',
        paragraphs: [
          'The effectiveness does not come from the daruma “causing” success. It comes from changing the environment around a promise. The eye you painted records that a commitment was made; the blank eye prevents the object from looking finished before the work is.',
          'A phone reminder disappears when dismissed. A daruma remains. Its persistence is passive, which makes it less demanding but harder to erase accidentally.',
        ],
      },
      {
        heading: 'A resilient form',
        headingJa: '起き上がる形',
        paragraphs: [
          'The rounded, weighted form is associated with the saying “seven times down, eight times up.” Here, technique and metaphor reinforce each other: the body is shaped to recover its upright position, so resilience is not only painted onto the object—it is demonstrated by the object.',
          'Takasaki daruma also encode auspicious symbols in the face, including crane-like brows and a tortoise-like moustache. Form, image, and ritual operate together rather than as separable decoration.',
        ],
      },
      {
        heading: 'Different from a vision board',
        headingJa: 'ビジョンボードとの違い',
        paragraphs: [
          'A vision board expands desire through many images. A daruma compresses attention into one object and one unresolved action. It is deliberately poor at carrying a whole lifestyle fantasy.',
          'That narrowness is useful. The daruma asks for a promise specific enough that you will know when the second eye is earned. “Live better” is vague; “submit the manuscript” creates an ending.',
        ],
      },
      {
        heading: 'A responsible modern use',
        headingJa: '現代での使い方',
        paragraphs: [
          'Choose one commitment, write down what completion means, paint the first eye, and place the daruma where the relevant work happens. When the period ends, complete the ritual honestly—celebrating success or acknowledging an unfinished attempt before setting another goal.',
          'The value is not mystical certainty. It is a culturally specific form of external memory: a handmade object that makes a private promise difficult to treat as if it was never made.',
        ],
      },
    ],
    sources: [
      { label: 'About Takasaki Daruma', publisher: 'Takasaki City', url: 'https://www.city.takasaki.gunma.jp/site/sightseeing/3052.html' },
      { label: 'History of Takasaki Daruma', publisher: 'Takasaki City', url: 'https://www.city.takasaki.gunma.jp/page/3053.html' },
    ],
  },
  {
    slug: 'furoshiki-the-original-reusable-packaging',
    number: '004',
    title: 'Furoshiki: Packaging That Refuses to Be Waste',
    titleJa: '包みは、使い捨てなくていい',
    category: 'Rituals',
    format: 'Culture Through Function',
    excerpt: 'A square of cloth carries bottles, books, and gifts because its design does not decide the next use in advance.',
    publishedAt: '2026-08-09T09:00:00+09:00',
    readTime: '9 min read',
    location: 'Japan',
    relatedPieceSlug: 'furoshiki',
    heroImage: '/editorial/furoshiki-reuse.png',
    heroAlt: 'An indigo furoshiki tied around everyday objects on a wooden table',
    quote: 'Its intelligence comes from refusing to become one particular kind of bag.',
    cultureLens: {
      familiarModel: 'Packaging is engineered for one product and usually becomes waste after one journey.',
      japaneseAlternative: 'A furoshiki stays geometrically open, changing form around each new object.',
    },
    sections: [
      {
        heading: 'Start with almost no shape',
        headingJa: '形を決めないことから始める',
        paragraphs: [
          'A tote bag has handles, seams, and a fixed opening. Those features make it immediately understandable, but they also decide what the object will be. A furoshiki begins as a square. Its usefulness is latent until cloth and object meet.',
          'The knot provides the temporary structure. Move the knot and the same textile becomes a bottle carrier, book wrap, lunch cloth, gift covering, or improvised handle. The user finishes the design each time.',
        ],
      },
      {
        heading: 'Wrapping as a verb, not a product',
        headingJa: '包装ではなく、包むこと',
        paragraphs: [
          'Contemporary packaging is usually a noun: a box, sleeve, pouch, or mailer. Furoshiki is better understood through the verb tsutsumu—to wrap or envelop. The important technology is a repeatable action rather than a disposable container.',
          'This makes care visible. The wrapped form changes with the contents, so the giver’s handling remains present in the final shape. Opening is not destruction; it is simply the reversal of the fold.',
        ],
      },
      {
        heading: 'Old practice, current logic',
        headingJa: '古い習慣、現代的な合理性',
        paragraphs: [
          'Japan’s Ministry of the Environment has promoted furoshiki as an example of mottainai: making full use of an item’s value. Its official guidance emphasizes the cloth’s ability to wrap differently shaped goods, fold down small, resist tearing, and be reused.',
          'That does not make every furoshiki automatically more sustainable than every bag. Material, production, washing, transport, and frequency of use all matter. The strongest claim is simpler: repeated use is built into the object’s form.',
        ],
      },
      {
        heading: 'Technique becomes adaptability',
        headingJa: '技法が可変性になる',
        paragraphs: [
          'Cloth must withstand tension at a knot without becoming too bulky to tie. Size, weave, edge treatment, friction, and drape determine which loads it can hold. A beautiful pattern cannot compensate for fabric that slips or a knot that cannot be released.',
          'This is the causal story Monogatari wants to make visible: a flexible textile plus a learned knot produces many functions with very few permanent parts.',
        ],
      },
      {
        heading: 'The modern test',
        headingJa: '現代の暮らしで試す',
        paragraphs: [
          'Keep one furoshiki where single-use packaging usually appears: in a work bag, near the front door, or with gift supplies. Learn two knots rather than twenty. Repetition matters more than mastery.',
          'If the cloth returns to the drawer after each job, it is not failed packaging. It is infrastructure waiting for another object.',
        ],
      },
    ],
    sources: [
      { label: 'Mottainai Furoshiki', publisher: 'Ministry of the Environment, Japan', url: 'https://www.env.go.jp/recycle/info/furoshiki/index.html' },
      { label: '3R Initiative: Ways to tie a furoshiki', publisher: 'Ministry of the Environment, Japan', url: 'https://www.env.go.jp/recycle/3r/en/approach/02.pdf' },
    ],
  },
  {
    slug: 'how-use-keeps-japanese-craft-in-motion',
    number: '005',
    title: 'How Use Keeps Japanese Craft in Motion',
    titleJa: '使うことで、工芸は今を生きる',
    category: 'Field Notes',
    format: 'Editorial Essay',
    excerpt: 'A museum can protect an object. Repeated use keeps materials, orders, repair knowledge, and workshop skill in motion.',
    publishedAt: '2026-08-09T12:00:00+09:00',
    readTime: '10 min read',
    location: 'Bizen, Okayama',
    relatedPieceSlug: 'bizen-yaki',
    heroImage: '/editorial/bizen-fire.png',
    heroAlt: 'Unglazed reddish-brown stoneware vessels showing natural kiln markings',
    quote: 'Preservation protects the result. Demand helps preserve the ability to make the next one.',
    cultureLens: {
      familiarModel: 'Heritage is protected by removing fragile things from ordinary life.',
      japaneseAlternative: 'Living craft survives when careful use creates demand for making, teaching, repair, and replacement.',
    },
    sections: [
      {
        heading: 'An object and a practice are different things',
        headingJa: '物と技術は、同じではない',
        paragraphs: [
          'A pot can survive after the knowledge used to make it has disappeared. This is the paradox of material heritage: the evidence may remain while the living system—clay preparation, kiln loading, firing judgment, tool making, apprenticeship—quietly ends.',
          'UNESCO therefore treats traditional craftsmanship as intangible heritage. The safeguarding target is not only the object, but the knowledge and skills that allow communities to keep producing it.',
        ],
      },
      {
        heading: 'Why Bizen makes the argument visible',
        headingJa: '備前焼が見せるもの',
        paragraphs: [
          'Bizen ware is associated with high-fired, unglazed pottery. Without a coating of glaze to standardize the surface, clay, flame, ash, placement, and firing conditions remain legible in the finished vessel. Variation is not a defect added after the design; it is a record of how the object came into being.',
          'This is where “craft” becomes more than decoration. The technique produces hardness, tactile surface, natural markings, and one-of-a-kind differences. Function and appearance share a cause.',
        ],
      },
      {
        heading: 'The economics hidden inside one cup',
        headingJa: '一つの器に隠れた経済',
        paragraphs: [
          'A workshop needs more than admiration. It needs enough reliable orders to buy material, maintain equipment, reserve kiln time, pay people during slow processes, and allow a less-experienced hand to learn without every mistake becoming catastrophic.',
          'No single purchase “saves” a tradition. That language makes the buyer heroic and the maker passive. A healthier account is reciprocal: the buyer receives a useful object; the workshop receives demand that can support another cycle of work.',
        ],
      },
      {
        heading: 'Use is not the opposite of care',
        headingJa: '使うことは、雑に扱うことではない',
        paragraphs: [
          'People often protect an expensive handmade object by not using it. The instinct is understandable, but it can make the craft irrelevant to daily life. Careful use offers another form of respect: learning how the material changes, cleaning it correctly, accepting patina, and repairing when appropriate.',
          'The goal is neither precious isolation nor careless consumption. It is a long relationship in which wear becomes information rather than automatic evidence of failure.',
        ],
      },
      {
        heading: 'What Monogatari should sell',
        headingJa: 'Monogatariが売るべきもの',
        paragraphs: [
          'This is why Monogatari should not begin with whatever traditional-looking stock can be acquired fastest. We need traceable objects whose origin, maker or workshop, technique, care, and contemporary use can be explained without invention.',
          'The editorial work comes first because it establishes the standard. When sales begin, the article should already make clear why this technique creates this function—and why this particular object deserves a place in someone’s life.',
        ],
      },
    ],
    sources: [
      { label: 'Traditional craftsmanship', publisher: 'UNESCO Intangible Cultural Heritage', url: 'https://ich.unesco.org/en/traditional-craftsmanship-00057' },
      { label: 'Bizen Yaki', publisher: 'Japan Traditional Crafts Aoyama Square', url: 'https://kougeihin.jp/en/craft/0418/' },
      { label: 'Japan’s Six Ancient Kilns', publisher: 'Government of Japan', url: 'https://www.gov-online.go.jp/hlj/en/march_2026/march_2026-01.html' },
    ],
  },
  {
    slug: 'tenugui-one-rectangle-many-jobs',
    number: '006',
    title: 'Tenugui: One Rectangle, Many Jobs',
    titleJa: '一枚の布に、用途を決めすぎない',
    category: 'Objects',
    format: 'Culture Through Function',
    excerpt: 'Where modern products specialize, the tenugui stays thin, open-ended, and useful precisely because it is not optimized for one task.',
    publishedAt: '2026-08-16T09:00:00+09:00',
    readTime: '9 min read',
    location: 'Tokyo, Japan',
    relatedPieceSlug: 'tenugui',
    heroImage: '/editorial/tenugui-adaptable.png',
    heroAlt: 'An indigo tenugui shown as both a bottle wrap and hanging cloth',
    quote: 'The tenugui is not a worse towel. It is a different answer to the question of how many objects one cloth should become.',
    cultureLens: {
      familiarModel: 'A product proves its value by being optimized for one named job.',
      japaneseAlternative: 'A tenugui keeps its construction minimal so the user can assign the job repeatedly.',
    },
    sections: [
      {
        heading: 'Do not begin with the towel comparison',
        headingJa: 'タオルとの比較だけで見ない',
        paragraphs: [
          'A terry towel is thick, absorbent, soft, and slow to become anything other than a towel. A tenugui is a thinner cotton rectangle. It holds less water at once, but dries quickly, folds flat, ties easily, and can wrap close to irregular shapes.',
          'The apparent weakness—lack of bulk—is the source of adaptability. The same piece can dry hands, cover the head, protect an object, wrap a bottle, strain, decorate, or serve as a small gift cloth.',
        ],
      },
      {
        heading: 'Why the ends are left open',
        headingJa: '端を縫わない理由',
        paragraphs: [
          'Traditional tenugui are often left unhemmed at the short edges. The raw ends can fray at first, but they also release water, dry faster, and avoid a thick seam that would hold moisture or resist a close knot.',
          'This is a useful design lesson: finishing every edge can make an object look more complete while making it less suitable for its actual environment.',
        ],
      },
      {
        heading: 'Dye on both sides',
        headingJa: '裏まで染まる注染',
        paragraphs: [
          'Tokyo’s official traditional-craft guide describes chusen, a dye-pouring method used for yukata and tenugui. Dye is poured by hand through prepared areas of cloth, creating characteristic gradation and a pattern that reads through the textile rather than sitting only on top.',
          'That matters in use. A cloth that will be folded, twisted, tied, and seen from changing angles benefits from having no obvious “display side.” Technique supports spatial freedom.',
        ],
      },
      {
        heading: 'The anti-specialist object',
        headingJa: '専用品の反対側',
        paragraphs: [
          'Industrial design often removes ambiguity: icons tell us where to grip, seams define capacity, and moulded parts prevent alternative use. This reduces learning time and can improve safety. But a house filled only with specialist objects also fills quickly.',
          'The tenugui asks more of the user and less of the cupboard. Its knowledge lives partly in the textile and partly in the repertoire of the person using it.',
        ],
      },
      {
        heading: 'A practical first week',
        headingJa: '最初の一週間',
        paragraphs: [
          'Use one as a hand cloth, then wash and hang it. Try it the next day as a lunch wrap or bottle carrier. Notice not only whether it performs each task, but how quickly it returns to being a simple flat rectangle.',
          'Its value is not that it replaces every towel or bag. It is that one modest object can absorb the small, unpredictable jobs that specialized products leave between them.',
        ],
      },
    ],
    sources: [
      { label: 'Tokyo Honzome Yukata and Tenugui', publisher: 'Tokyo Metropolitan Government', url: 'https://www.dento-tokyo.metro.tokyo.lg.jp/english/items/19.html' },
    ],
  },
  {
    slug: 'washi-paper-that-behaves-like-architecture',
    number: '007',
    title: 'Washi: Paper That Behaves Like Architecture',
    titleJa: '紙が、光と空間をつくる',
    category: 'Objects',
    format: 'Material Culture',
    excerpt: 'In many Western contexts paper carries information. Washi also carries light, repairs objects, divides rooms, and changes the atmosphere of space.',
    publishedAt: '2026-08-23T09:00:00+09:00',
    readTime: '10 min read',
    location: 'Japan',
    relatedPieceSlug: 'washi',
    heroImage: '/editorial/washi-fibres.png',
    heroAlt: 'Handmade washi sheets lit from behind to reveal long plant fibres',
    quote: 'When paper becomes strong enough to divide a room, “paper” stops naming a category and starts naming a material possibility.',
    cultureLens: {
      familiarModel: 'Paper is a thin, disposable carrier for text or packaging.',
      japaneseAlternative: 'Washi is a fibre structure that can transmit light, form surfaces, and remain useful for generations.',
    },
    sections: [
      {
        heading: 'The translation problem in one word',
        headingJa: '「paper」では足りない',
        paragraphs: [
          'Translate washi as “Japanese paper” and the listener may imagine stationery with a decorative texture. That image is too small. Washi has been used for letters and books, but also for screens, partitions, doors, lamps, restoration, printing, and wrapping.',
          'The category changes when the material enters architecture. A sheet can soften daylight across a room, cover a join, or create privacy without making the interior opaque.',
        ],
      },
      {
        heading: 'Long fibres, different behaviour',
        headingJa: '長い繊維が生む性質',
        paragraphs: [
          'UNESCO describes traditional washi-making as a process using paper-mulberry fibres: separating and preparing the fibres, suspending them in water, and forming sheets through a screen. The visible strands in handmade paper are not decorative additions; they are the material’s structure.',
          'Long, interlaced fibres help explain why some washi can remain thin while resisting tearing and flexing around surfaces. Technique becomes strength without requiring the thickness we associate with cardboard or cloth.',
        ],
      },
      {
        heading: 'Light instead of transparency',
        headingJa: '透明ではなく、光を通す',
        paragraphs: [
          'Glass gives a view; a wall blocks it. Washi creates another condition. Light passes through while detail is diffused, turning illumination into atmosphere and privacy into a gradient.',
          'That middle state appears repeatedly in Japanese spatial culture: shoji, noren, screens, and layered thresholds. Boundaries do not disappear, but they need not become visually or physically absolute.',
        ],
      },
      {
        heading: 'Disposable is not inherent to paper',
        headingJa: '紙は、使い捨てとは限らない',
        paragraphs: [
          'Modern paper is often designed for high-volume sameness and short use. Handmade washi reveals that disposability is not a property of “paper” itself. It is the result of fibres, production, intended use, and economic design.',
          'Some washi traditions support conservation and restoration precisely because the material can age with, reinforce, or repair other paper objects. A humble sheet can function as a long-term technical material.',
        ],
      },
      {
        heading: 'How to look before buying',
        headingJa: '買う前に見ること',
        paragraphs: [
          'Ask which fibre is used, where and how the sheet was made, whether it is intended for writing, printmaking, lighting, repair, or interior use, and what care it requires. “Washi” alone does not guarantee a particular method or quality.',
          'The most meaningful purchase is not the paper that looks most visibly rustic. It is the sheet whose fibres and making process produce the function you actually need.',
        ],
      },
    ],
    sources: [
      { label: 'Washi, craftsmanship of traditional Japanese hand-made paper', publisher: 'UNESCO Intangible Cultural Heritage', url: 'https://ich.unesco.org/en/RL/washi-craftsmanship-of-traditional-japanese-hand-made-paper-02291' },
    ],
  },
  {
    slug: 'zabuton-and-the-room-that-changes-purpose',
    number: '008',
    title: 'The Zabuton and the Room That Changes Purpose',
    titleJa: '座布団と、用途を固定しない部屋',
    category: 'Field Notes',
    format: 'Culture Comparison',
    excerpt: 'A chair assigns a place and posture. A zabuton supports a room whose furniture can appear, move, stack, and disappear.',
    publishedAt: '2026-08-30T09:00:00+09:00',
    readTime: '9 min read',
    location: 'Japan',
    relatedPieceSlug: 'zabuton',
    heroImage: '/editorial/zabuton-floor.png',
    heroAlt: 'A square indigo zabuton placed on tatami beside a low wooden table',
    quote: 'The cushion is small because the larger object is the room—and the room is expected to change.',
    cultureLens: {
      familiarModel: 'Furniture assigns stable functions: the dining room contains dining furniture; the bedroom contains a bed.',
      japaneseAlternative: 'Floor-level, movable objects allow one room to host eating, guests, work, and sleep at different times.',
    },
    sections: [
      {
        heading: 'A cushion is part of a spatial system',
        headingJa: '座布団は、空間の仕組みの一部',
        paragraphs: [
          'Taken alone, a zabuton is a square floor cushion. It becomes culturally legible when placed with tatami, a low table, sliding partitions, and storage. Each element assumes that the floor can be occupied directly and that the room may change purpose.',
          'Web Japan traces the modern cotton-filled zabuton to around the middle of the Edo period. Its history developed alongside ways of sitting in which the floor—not a raised chair—forms the common plane of the room.',
        ],
      },
      {
        heading: 'Chair culture and floor culture',
        headingJa: '椅子の文化と床の文化',
        paragraphs: [
          'A chair raises one body into one designed position. It offers support, status, and a clear personal place. A zabuton marks a place more lightly. It can be added for a guest, moved closer to the table, stacked after use, or removed entirely.',
          'Neither system is universally better. Chairs improve accessibility and long-duration support for many bodies. Floor sitting can be difficult or unsuitable for others. The comparison is useful because it shows how one small object participates in a different theory of space.',
        ],
      },
      {
        heading: 'The room does not keep one job',
        headingJa: '部屋は、一つの用途を持ち続けない',
        paragraphs: [
          'In a furniture-heavy room, function remains visible even when no one is using it: the bed still occupies the bedroom; the dining table still occupies the dining room. Traditional Japanese rooms could change more dramatically as bedding, tables, and cushions were brought out and stored.',
          'The efficiency is temporal. Instead of shrinking every piece of furniture, the household reduces how many functions must occupy the floor at the same moment.',
        ],
      },
      {
        heading: 'Technique supports repeated movement',
        headingJa: '動かすことを前提にしたつくり',
        paragraphs: [
          'A useful zabuton must hold filling evenly enough to support sitting, remain light enough to carry and stack, and survive repeated compression. Fabric, stitching, corner tufts, filling, and proportion all contribute to this quiet infrastructure.',
          'The object’s function is not only comfort. It is reversible occupancy: making a place for a person without permanently claiming the room.',
        ],
      },
      {
        heading: 'What travels across cultures',
        headingJa: '文化を越えて持ち帰れるもの',
        paragraphs: [
          'Importing a zabuton into a Western apartment does not automatically create Japanese life, and floor sitting should not be romanticized as minimalism. The transferable idea is more precise: some domestic functions can be provided by objects that disappear when the function ends.',
          'A reading corner, guest seat, or low tea setting can exist without becoming permanent furniture. The zabuton offers not an aesthetic shortcut to Japan, but a practical question: how much of a room must stay committed all day?',
        ],
      },
    ],
    sources: [
      { label: 'Living in a Japanese House: Tatami Mats and Zabuton Cushions', publisher: 'Web Japan, Ministry of Foreign Affairs', url: 'https://web-japan.org/kidsweb/virtual/house/house03.html' },
      { label: 'Tatami Room: The Heart of Japanese Contemporary Home', publisher: 'Japan Up Close / Web Japan', url: 'https://japanupclose.web-japan.org/culture/c20210915_1.html' },
    ],
  },
]

export const editorialCategories: EditorialCategory[] = ['Objects', 'Rituals', 'Field Notes']

export function getEditorialStory(slug: string) {
  return editorialStories.find((story) => story.slug === slug)
}

export function getEditorialStoryForPiece(pieceSlug: string) {
  return editorialStories.find((story) => story.relatedPieceSlug === pieceSlug)
}
