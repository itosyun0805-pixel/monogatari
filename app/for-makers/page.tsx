import type { Metadata } from 'next'
import { NorenLink } from '@/components/NorenTransition'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: { absolute: '工房向け海外出展サポート — Mono Stories' },
  description:
    '工房名義の海外のお店づくりから、商品写真、英語、価格、送料、入金、出店後の運営まで。Mono Storiesが海外通販への出展を支援します。',
  alternates: { canonical: '/for-makers' },
  openGraph: {
    title: '工房向け海外出展サポート — Mono Stories',
    description: 'つくる仕事に集中したまま、海外へ。工房名義の海外のお店を一緒につくり、毎月の運営まで支援します。',
    url: '/for-makers',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '工房向け海外出展サポート — Mono Stories',
    description: 'つくる仕事に集中したまま、海外へ。工房名義の海外のお店を一緒につくり、毎月の運営まで支援します。',
  },
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 96 72" aria-hidden="true">
      <path d="M10 24h76v39H10zM7 24l8-15h66l8 15M30 63V43h36v20" />
      <path d="M15 9v15M31 9v15M48 9v15M65 9v15M81 9v15" />
    </svg>
  )
}

function StoryIcon() {
  return (
    <svg viewBox="0 0 96 72" aria-hidden="true">
      <rect x="8" y="8" width="35" height="54" />
      <circle cx="25.5" cy="25" r="7" />
      <path d="m13 55 11-13 8 8 6-7 5 6M55 15h33M55 27h26M55 39h33M55 51h22" />
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 96 72" aria-hidden="true">
      <path d="M6 15h38l13 22-13 20H6zM57 34h22l11 13v14H57z" />
      <path d="M63 34V22h17v12M14 27h20M14 37h25M14 47h16" />
      <circle cx="67" cy="61" r="5" />
      <circle cx="83" cy="61" r="5" />
    </svg>
  )
}

const deliverables = [
  {
    number: '01',
    label: 'YOUR SHOP',
    title: '工房名義の海外のお店',
    body: 'Etsyなど、すでに海外のお客さまが集まる場所に開店。登録や入金口座の設定を支援し、お店は最初から工房のものです。',
    icon: <ShopIcon />,
  },
  {
    number: '02',
    label: 'STORY & PHOTO',
    title: '商品写真と伝わる英語',
    body: 'ただ翻訳するのではなく、技法の価値と「海外の暮らしでどう使うか」が伝わる写真と文章をつくります。',
    icon: <StoryIcon />,
  },
  {
    number: '03',
    label: 'PRICE & DELIVERY',
    title: '値段・送料・入金の仕組み',
    body: '海外向け価格と送料を整理し、売上が工房の口座へ直接入る状態まで整えます。',
    icon: <DeliveryIcon />,
  },
]

const launchSteps = [
  ['01', '無料相談', '今の販売状況と、海外へ届けたい商品を30分で伺います。'],
  ['02', '設計', '売る場所・商品・価格・送料・支援範囲を一緒に決めます。'],
  ['03', '売り場制作', 'お店、写真、英語、入金まで3つの成果物をつくります。'],
  ['04', '出店・運営', '公開後も英語対応、発送手続き、発信、毎月の報告を続けます。'],
  ['05', '引き渡し', '自分たちで運営したくなったら、方法を伝えて工房へ渡します。'],
]

const retainedAssets = [
  ['海外の販売口', '工房名義で育てたお店と顧客接点'],
  ['伝える素材', '使い続けられる商品写真と英語の文章'],
  ['売る仕組み', '価格・送料・入金・発送の設定'],
  ['運営の方法', '注文対応の手順と、売れた物・反応の記録'],
]

export default function ForMakersPage() {
  return (
    <div className={styles.page} lang="ja">
      <header className={styles.header}>
        <NorenLink href="/" className={styles.brand} aria-label="Mono Stories ホームへ">
          <span className={styles.mark} aria-hidden="true"><i /><i /></span>
          <span><b>Mono Stories</b><small>OBJECTS · CULTURE · STORIES</small></span>
        </NorenLink>
        <span className={styles.audience}>工房の方へ</span>
        <nav aria-label="工房向けページの案内">
          <NorenLink href="/" className={styles.siteLink}>海外向けサイトを見る</NorenLink>
          <a href="#consultation" className={styles.headerCta}>無料相談</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>海外通販への出店を、工房名義のまま。</p>
            <h1>つくる仕事に、<br />集中したまま。<br /><em>海外へ。</em></h1>
            <p className={styles.heroLead}>
              工房名義の海外のお店を一緒につくり、写真と英語、値段、送料、入金を整える。準備で終わらず、出店後の毎月の運営まで支援します。
            </p>
            <div className={styles.heroActions}>
              <a href="#consultation" className={styles.primaryButton}>30分、無料で相談する</a>
              <a href="#overview" className={styles.textLink}>全体の流れを見る <span>↓</span></a>
            </div>
          </div>

          <div className={styles.bridge} aria-label="工房と海外のお客さまをMono Storiesがつなぐ図">
            <div className={styles.bridgeSide}>
              <span className={styles.diagramLabel}>工房</span>
              <strong>つくることに<br />集中する</strong>
              <ul>
                <li>商品をつくる</li>
                <li>箱に入れる</li>
                <li>郵便局へ持っていく</li>
              </ul>
            </div>
            <div className={styles.bridgeCenter}>
              <span>MONO STORIES</span>
              <div><b>お店</b><b>写真・英語</b><b>価格・送料</b><b>毎月の運営</b></div>
            </div>
            <div className={styles.bridgeSide}>
              <span className={styles.diagramLabel}>海外</span>
              <strong>知り、選び、<br />注文できる</strong>
              <ul>
                <li>暮らしに届く説明</li>
                <li>迷わない価格と送料</li>
                <li>英語での安心な対応</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.onlyTasks} aria-labelledby="only-tasks-title">
          <div><span>工房がやるのは、これだけ</span><h2 id="only-tasks-title">つくる仕事は、変えません。</h2></div>
          <ol>
            <li><span>01</span>商品をつくる</li>
            <li><span>02</span>箱に入れる</li>
            <li><span>03</span>郵便局へ持っていく</li>
          </ol>
        </section>

        <section id="overview" className={`${styles.section} ${styles.overview}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>01 / 全体の流れ</span>
            <h2>相談から出店、その先まで。</h2>
            <p>出店して終わりではありません。売り場をつくり、動かし、必要がなくなったら工房へ渡すところまでが一つの流れです。</p>
          </div>
          <ol className={styles.timeline}>
            {launchSteps.map(([number, title, body]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${styles.section} ${styles.deliverables}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>02 / 最初につくるもの</span>
            <h2>海外で売るための、3つの成果物。</h2>
            <p>資料ではなく、実際に公開され、注文を受けられる状態をつくります。</p>
          </div>
          <div className={styles.deliverableGrid}>
            {deliverables.map((item) => (
              <article key={item.number}>
                <div className={styles.cardMeta}><span>成果物 {item.number}</span><small>{item.label}</small></div>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.ownershipStrip}>
            <strong>お店も、売上も、商品も、工房のもの。</strong>
            <p>Mono Storiesがお金や商品を預かることはありません。商品は工房に置いたまま、注文が来た分だけ発送します。</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.operations}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>03 / 出店後の運営</span>
            <h2>注文が入ったら、こう動きます。</h2>
            <p>英語対応と海外発送の難しい部分をこちらが受け持ち、工房には国内注文に近い動きだけをお願いします。</p>
          </div>

          <div className={styles.orderFlow} aria-label="注文から海外発送までの流れ">
            <div><span>海外のお客さま</span><strong>注文する</strong></div>
            <i aria-hidden="true">→</i>
            <div className={styles.flowRed}><span>Mono Stories</span><strong>注文を確認</strong></div>
            <i aria-hidden="true">→</i>
            <div className={styles.flowRed}><span>Mono Stories</span><strong>発送ラベルを作成</strong></div>
            <i aria-hidden="true">→</i>
            <div><span>工房</span><strong>箱に入れる</strong></div>
            <i aria-hidden="true">→</i>
            <div><span>工房</span><strong>郵便局へ</strong></div>
          </div>

          <div className={styles.responsibilityGrid}>
            <article>
              <span>MONO STORIES</span>
              <h3>海外側を動かします</h3>
              <ul>
                <li>英語でのお客さま対応</li>
                <li>注文後の発送手続き</li>
                <li>発送ラベルの作成と送付</li>
                <li>記事・SNSでの発信</li>
                <li>売れた物・反応の毎月報告</li>
              </ul>
            </article>
            <article>
              <span>WORKSHOP</span>
              <h3>工房にお願いすること</h3>
              <ul>
                <li>商品をつくる</li>
                <li>注文分を梱包する</li>
                <li>届いたラベルを貼る</li>
                <li>郵便局へ持っていく</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.after}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>04 / 手伝い後の状態</span>
            <h2>支援が終わっても、<br />海外に売る土台は工房に残ります。</h2>
            <p>毎月の運営が不要になったら、運営方法をお伝えして、そのままお店を工房へお渡しします。</p>
          </div>

          <div className={styles.handoffDiagram}>
            <div className={styles.handoffTop}>
              <div><span>支援中</span><strong>Mono Storiesと一緒に動かす</strong></div>
              <p>運営方法と反応を、毎月ためる</p>
              <div><span>支援後</span><strong>工房自身で続けられる</strong></div>
            </div>
            <div className={styles.assetGrid}>
              {retainedAssets.map(([title, body], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.pricing}`}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionNumber}>05 / 料金</span>
            <h2>始める負担を小さく。<br />売れたときに、一緒に伸ばす。</h2>
          </div>
          <div className={styles.priceGrid}>
            <article><span>最初の月</span><strong><b>1</b>万円</strong><p>お店づくり・写真・英語の売り場づくり</p></article>
            <article><span>売れたときだけ</span><strong><b>10〜15</b>%</strong><p>毎月のお手伝い内容に合わせて相談</p></article>
            <article><span>毎月の固定費</span><strong><b>0</b>円</strong><p>売れなければ追加費用はかかりません</p></article>
          </div>
          <div className={styles.addons}>
            <div>
              <span>必要に応じて</span>
              <h3>追加でできること</h3>
            </div>
            <ul>
              <li><b>＋1万円</b> ホームページ制作</li>
              <li>商品写真の追加撮影</li>
              <li>英語の記事づくり</li>
              <li>卸向けの売り場づくり</li>
            </ul>
          </div>
          <p className={styles.finePrint}>※ 海外通販サイト自体の販売手数料は、売れたときに売上から自動で差し引かれます。送料はお客さま負担で設定します。</p>
        </section>

        <section id="consultation" className={styles.consultation}>
          <div>
            <span className={styles.consultationLabel}>モニター価格 · 先着3工房</span>
            <h2>まずは30分、<br />無料でご相談ください。</h2>
            <p>まだ海外に出すと決めていなくても大丈夫です。今の状況を伺い、どこから始められるかを一緒に整理します。</p>
          </div>
          <div className={styles.contactCard}>
            <span>担当</span>
            <strong>伊藤 駿<small>Mono Stories</small></strong>
            <a href="mailto:info@monostories.com?subject=海外出展について相談したい">info@monostories.com</a>
            <a href="tel:08036751485">080-3675-1485</a>
            <a href="mailto:info@monostories.com?subject=海外出展について相談したい" className={styles.contactButton}>相談メールを送る <span>→</span></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><span className={styles.mark} aria-hidden="true"><i /><i /></span><b>Mono Stories</b></div>
        <p>日本の手仕事を、海外の暮らしへ。</p>
        <NorenLink href="/">海外のお客さま向けサイトを見る <span>↗</span></NorenLink>
      </footer>
    </div>
  )
}
