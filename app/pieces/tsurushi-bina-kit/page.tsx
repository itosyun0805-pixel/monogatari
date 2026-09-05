import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TsurushiPurchase from './TsurushiPurchase'
import styles from './tsurushi.module.css'

export const metadata: Metadata = {
  title: 'Tsurushi-bina Kit / 吊るし雛',
  description: 'Three ornaments you sew yourself, from one retired kimono.',
  alternates: { canonical: '/pieces/tsurushi-bina-kit' },
  openGraph: {
    type: 'website',
    title: 'Tsurushi-bina Kit / 吊るし雛',
    description: 'Three ornaments you sew yourself, from one retired kimono.',
    images: [{
      url: '/tsurushi-bina/hero-draft.png',
      width: 1122,
      height: 1402,
      alt: 'Three handmade tsurushi-bina ornaments suspended from a branch',
    }],
  },
}

const meanings = [
  ['Peach', '桃', 'Protection from harm, and a long life.'],
  ['Monkey', '猿', 'Saru sounds like the word for leaving. A wish that hardship will go away.'],
  ['Chilli pepper', '唐辛子', 'Once used to keep insects away. Also a wish to keep harmful attention away.'],
  ['Rabbit', 'うさぎ', 'Its red eyes were believed to hold protective power.'],
  ['Crawling child', '這い子人形', 'A child learning to move. A wish for healthy growth.'],
]

const process = [
  ['01', 'Choose', 'Meet the three pieces of kimono cloth in your kit. No two kits begin in the same place.'],
  ['02', 'Stitch', 'Follow the printed line with a small running stitch. It does not need to be straight.'],
  ['03', 'Turn', 'Turn the shape inside out. The rough edge and most of the stitches disappear inside.'],
  ['04', 'Fill', 'Add the soft filling, then close the last opening by hand.'],
  ['05', 'Hang', 'Tie the cord. Put it on a branch, a hook, or your tree each December.'],
]

function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className={`${styles.mark} ${light ? styles.markLight : ''}`} aria-hidden="true">
      <i />
      <i />
    </span>
  )
}

export default function TsurushiBinaKitPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Mono Stories home">
          <Mark />
          <span>mono.stories</span>
        </Link>
        <nav aria-label="Product navigation">
          <a href="#story">Story</a>
          <a href="#making">Making</a>
          <a href="#kit">The kit</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="tsurushi-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>A sewing ritual for December</p>
            <h1 id="tsurushi-title">
              Tsurushi-bina
              <span>/ 吊るし雛</span>
            </h1>
            <p className={styles.heroHook}>
              Someone&apos;s grandmother invented these because she couldn&apos;t afford the real thing.
            </p>
            <p className={styles.heroNote}>A kit for three ornaments, cut from one retired kimono.</p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/tsurushi-bina/hero-draft.png"
              alt="Three handmade tsurushi-bina ornaments made from different kimono fabrics, hanging from a bare branch"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
            />
            <span>Draft image · product photography to follow</span>
          </div>
          <div className={styles.scrollCue} aria-hidden="true">Make · keep · hang again <i /></div>
        </section>

        <section className={styles.newUse} aria-labelledby="new-use-title">
          <div className={styles.processImage}>
            <Image
              src="/tsurushi-bina/make-hang-draft.png"
              alt="Three drawings show hands sewing kimono cloth, filling the ornament, and hanging it from a branch"
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          </div>
          <div className={styles.newUseCopy}>
            <p className={styles.sectionLabel}>New use · 新しい使い方</p>
            <h2 id="new-use-title">Tsurushi-bina <span>吊るし雛</span></h2>
            <p className={styles.oneLine}>Three ornaments you sew yourself, from one retired kimono.</p>
            <dl>
              <div><dt>Replaces</dt><dd>the ornament you would have bought at the airport</dd></div>
              <div className={styles.essential}><dt>You need</dt><dd>a needle, your hands, and one evening</dd></div>
              <div><dt>When</dt><dd>the first weekend you put the tree up</dd></div>
            </dl>
            <p className={styles.reassurance}>No machine. No sewing experience. The needle and thread are already in the kit.</p>
          </div>
        </section>

        <section className={styles.crossover} id="story" aria-labelledby="crossover-title">
          <p className={styles.sectionLabel}>Crossover · 文化の交わるところ</p>
          <h2 id="crossover-title">
            <span>In your world, you hang small things on a tree in December, and each one has a story.</span>
            <span>In Japan, we hang small things in March, and each one is a wish.</span>
          </h2>
          <div className={styles.crossoverBody}>
            <p>You buy one on a journey. Years later, you lift it from a box and remember where you were.</p>
            <p>Tsurushi-bina can grow the same way. Make one now. Add another later. Let each small shape hold its year.</p>
          </div>
        </section>

        <section className={styles.origin} aria-labelledby="origin-title">
          <div className={styles.originLead}>
            <p className={styles.sectionLabel}>Why they exist · はじまり</p>
            <h2 id="origin-title">It began as a way to make do.</h2>
          </div>
          <div className={styles.originBody}>
            <p>In the late Edo period, a full set of Hina dolls was beyond the reach of many homes.</p>
            <p>Mothers and grandmothers used what they had. They cut scraps from worn kimono, sewed small forms, and hung them on thread.</p>
            <p>It was not a grand tradition at first. It was a practical answer. Meaning gathered around it, one small wish at a time.</p>
          </div>
        </section>

        <section className={styles.meanings} aria-labelledby="meanings-title">
          <header>
            <p className={styles.sectionLabel}>Each one means something · 一つずつの願い</p>
            <h2 id="meanings-title">Five small forms.<br />Five ways to wish someone well.</h2>
          </header>
          <div className={styles.meaningList}>
            {meanings.map(([name, japanese, meaning], index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name} <small>/ {japanese}</small></h3>
                <p>{meaning}</p>
              </article>
            ))}
          </div>
          <p className={styles.sectionClose}>Because every form carries a meaning, the collection never has to be finished.</p>
        </section>

        <section className={styles.fabric} aria-labelledby="fabric-title">
          <div className={styles.fabricImage}>
            <Image
              src="/tsurushi-bina/hero-draft.png"
              alt="Close view of aged kimono fabrics used to make the ornaments"
              fill
              sizes="(max-width: 800px) 100vw, 46vw"
            />
          </div>
          <div className={styles.fabricCopy}>
            <p className={styles.sectionLabel}>The fabric was a kimono · 布の前の時間</p>
            <h2 id="fabric-title">One garment. Cut, washed, pressed, and ready for another use.</h2>
            <p>Each kimono is found in a second-hand shop in Japan. It is taken apart, cleaned, ironed, and cut by hand.</p>
            <p>Only as many kits are made as that garment allows. When the cloth is gone, that exact fabric is gone too.</p>
          </div>
        </section>

        <section className={styles.making} id="making" aria-labelledby="making-title">
          <header>
            <p className={styles.sectionLabel}>What you will actually do · 実際にすること</p>
            <h2 id="making-title">One quiet evening.<br />Three things made by your hands.</h2>
            <p>Allow about 60–90 minutes for each ornament. Stop for tea. Continue tomorrow. There is no correct speed.</p>
          </header>
          <div className={styles.steps}>
            {process.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className={styles.contents}>
            <div>
              <p className={styles.sectionLabel}>Inside the kit</p>
              <ul>
                <li>Kimono cloth for three ornaments</li>
                <li>Needle and thread</li>
                <li>Soft filling and hanging cord</li>
                <li>Instructions in English</li>
              </ul>
            </div>
            <div>
              <p className={styles.sectionLabel}>From your drawer</p>
              <ul><li>One pair of scissors</li></ul>
            </div>
          </div>
        </section>

        <section className={styles.imperfect} aria-labelledby="imperfect-title">
          <div>
            <p className={styles.sectionLabel}>Wabi-sabi · 不揃いのままで</p>
            <h2 id="imperfect-title">It will not be perfect.<br />That is the point.</h2>
          </div>
          <div>
            <p>You do not need a machine. Your stitches do not need to form a straight line.</p>
            <p>These figures began in ordinary homes. Mothers made them for children, not judges.</p>
            <p>Wabi-sabi is not an excuse for a mistake. It is attention to the marks that show something was made, used, and kept.</p>
          </div>
        </section>

        <section className={styles.unchanged} aria-labelledby="unchanged-title">
          <p className={styles.sectionLabel}>What moved. What stayed.</p>
          <h2 id="unchanged-title">The season changed.<br />The gesture did not.</h2>
          <div>
            <article>
              <span>Kept</span>
              <p>Scraps of cloth. Small hand stitches. Hanging each form. A meaning held in every piece.</p>
            </article>
            <article>
              <span>Changed</span>
              <p>The month: March became December. The place: beside Hina dolls became a tree or winter branch.</p>
            </article>
          </div>
          <p className={styles.unchangedClose}>Both customs already knew the same gesture: hang something small, then return to its story every year.</p>
        </section>

        <section className={styles.fromOne} aria-labelledby="from-one-title">
          <p className={styles.sectionLabel}>From one kimono · 一着から</p>
          <h2 id="from-one-title">This is not a numbered edition.</h2>
          <p>A finite piece of cloth is simply finite. We cut what it gives us. Then we begin again with another kimono.</p>
        </section>

        <TsurushiPurchase />
      </main>

      <footer className={styles.footer}>
        <Link href="/" className={styles.footerBrand}>
          <Mark light />
          <span>mono.stories</span>
        </Link>
        <p>Objects · Culture · Stories</p>
        <p>From Japan, with context.</p>
      </footer>
    </div>
  )
}
