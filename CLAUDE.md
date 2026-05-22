# Monogatari — HP制作指示書

> このファイルはClaude Codeが読む実装指示書。
> ブランド定義は `brand-concept.md` を参照。

---

## プロジェクト概要

**サイト名**：Monogatari（mono.stories）
**ドメイン候補**：`monogatari.co` / `mono-stories.com`
**ターゲット**：海外の日本好き（英語圏・欧米Z世代〜Millennial）

### サイトの本質
> Monogatari = 文化の翻訳機
「日本のモノ」を売るのではなく、
「あなたの生活に既にある感情・習慣」に日本のモノを接続する。

### 差別化の2軸
1. **Crossover（文化の交錯）**：「あなたの文化ではこれ、日本ではこれ」という橋渡し
2. **New Use（使い方の再定義）**：現代のライフスタイル文脈でモノを再提案

---

## 技術スタック

```
フレームワーク : Next.js 14（App Router）
言語          : TypeScript
スタイル      : Tailwind CSS
CMS           : Sanity.io（記事・画像・商品データをノーコードで更新可能）
地図          : react-simple-maps（日本地図インタラクション）
ホスティング  : Vercel
フォント      : Google Fonts
決済（将来）  : Stripe（越境EC対応）
```

---

## ページ構成

### / （Home）
- フルスクリーンヒーロー：特集記事の大きな写真＋サイト名＋タグライン
- Featured Pieces：最新3〜4記事のカードグリッド
- About セクション：コンセプトを2〜3行
- フッター（ナビ・SNSリンク・コピーライト）

### /pieces （一覧）
- 2〜3列グリッドレイアウト
- 各カード：画像・英語名・日本語名・ライフスタイルタグ
- フィルター①カテゴリ：工芸 / 食 / 日用品 / 衣 / その他
- フィルター②ライフスタイルタグ：
  `Whisky Lovers` / `Minimalist Kitchen` / `Zero Waste` /
  `Slow Morning` / `Travel Light` / `Sunday Brunch` /
  `Yoga & Wellness` / `Gift` / `Camp`

### /pieces/[slug] （詳細・メインコンテンツ）

縦スクロールで以下のセクションを展開する：

| # | セクション名 | 内容 |
|---|---|---|
| 1 | **Hero** | フルスクリーン写真。左下に英語名（大）＋日本語名（小） |
| 2 | **Origin** | なぜ生まれたか（文化的背景・歴史）800字程度 |
| 3 | **Craft** | 素材・製法・工程 |
| 4 | **The Maker** | 職人の顔写真・名前・産地・一言コメント |
| 5 | **Crossover** | 「In your world, this is...」で始まる文化の橋渡し |
| 6 | **New Use** | 現代の使い手が実際にどう使っているか（写真＋エピソード2〜3例） |
| 7 | **How It Lives** | 日本の暮らし・季節・習慣との関係 |
| 8 | **The Keepers** | 現代の愛用者・継承者の声（使い手側の視点） |
| 9 | **Place** | 産地名・エリア。地図ページへのリンク |
| 10 | **Get** | 入手方法（外部リンク or 将来EC用プレースホルダー） |

### /map （日本地図）
- react-simple-mapsで日本地図を表示
- 各地域をホバー→ハイライト、クリック→`/areas/[region]`へ遷移
- 地域区分：北海道 / 東北 / 関東 / 中部 / 近畿 / 中国 / 四国 / 九州・沖縄

### /areas/[region] （エリア別一覧）
- そのエリアの簡単な紹介（2〜3行）
- そのエリア産のpieces一覧（カードグリッド）

### /about
サイトのミッション・コンセプト説明

---

## デザイン方針

### 世界観
Kinfolk系——「静かに、深く」。
情報を詰め込まない。1画面に1つのメッセージ。ゆっくりスクロールさせる。

### カラーパレット
`brand-concept.md` のブランドカラーを使用する。

```
背景        : #F9F6F0  （Washi White）
テキスト    : #1C1C1E  （Ink Black）
アクセント  : #8C1D04  （Japanese Red・判子）
サブ        : #8E8E93  （Stone Gray）
ボーダー    : #DDD5C8  （薄い和紙の影）
```

Crossoverセクションのみ背景を `#EDE6D6` に変えて視覚的に区別する。

### フォント
```
英語見出し   : Cormorant Garamond（セリフ・格調）
英語本文     : Inter（サンセリフ・読みやすい）
日本語見出し : Noto Serif JP
日本語本文   : Noto Sans JP
```

### レイアウト原則
1. 余白は「もう十分」と思ってからさらに増やす
2. 画像はフルブリード（画面幅いっぱい）を基本とする
3. 本文テキストの最大幅は `65ch`（Tailwindの`prose`幅）
4. 英語見出しは大きく・薄く・のびのびと
5. 日英を常にペアで表示（例：`Edo Kiriko / 江戸切子`）
6. セクション間の余白は最低120px（`py-24`以上）
7. アニメーションは控えめ（フェードイン程度）
8. モバイルファースト

---

## Sanityスキーマ設計

### ドキュメント：`piece`

```typescript
{
  title          : string        // 英語名
  titleJa        : string        // 日本語名
  slug           : slug
  category       : string        // 工芸 / 食 / 日用品 / 衣 / その他
  lifestyleTags  : string[]      // ライフスタイルタグ（複数）
  region         : string        // 北海道/東北/関東/中部/近畿/中国/四国/九州・沖縄
  placeName      : string        // 産地名
  heroImage      : image
  origin         : block         // リッチテキスト
  craft          : block
  maker: {
    name         : string
    photo        : image
    location     : string
    quote        : text
  }
  crossover      : text          // 「In your world...」の本文
  newUse: [{
    image        : image
    caption      : text
  }]
  howItLives     : block
  keepers: [{
    name         : string
    quote        : text
  }]
  getLink        : url           // 任意
  publishedAt    : datetime
}
```

---

## コンポーネント設計

| コンポーネント | 役割 |
|---|---|
| `HeroSection` | フルスクリーン画像＋テキストオーバーレイ |
| `BilingualTitle` | 英語大＋日本語小のタイトルペア |
| `SectionBlock` | 左ラベル＋右本文 |
| `FullBleedImage` | 画面幅いっぱいの写真 |
| `MakerCard` | 職人の顔・名前・一言 |
| `CrossoverBlock` | 背景色変更＋イタリック書き出し |
| `NewUseGrid` | 写真＋エピソードのグリッド |
| `LifestyleTag` | ライフスタイルタグのバッジ |
| `JapanMap` | インタラクティブ日本地図 |
| `PieceCard` | 一覧用カード（画像・名前・タグ） |
| `GetSection` | アクセントカラーのボーダー＋外部リンクボタン |

---

## 初期コンテンツ（最初の3記事）

`brand-concept.md` の商材優先度に従う。

| # | 商材 | 英語名 | Crossoverの起点 | ライフスタイルタグ |
|---|---|---|---|---|
| 1 | のれん | Noren | 「The Japanese door that isn't a door」 | `Interior Design` / `Gift` / `Zen Living` |
| 2 | お香 | Koh（Japanese Incense） | 「Japan's 1,400-year-old stress hack」 | `Yoga & Wellness` / `Slow Morning` / `Zero Waste` |
| 3 | だるま | Daruma | 「Japan's original goal-setting object」 | `Gift` / `Minimal Decor` |

画像はUnsplashのフリー素材を使用する。

---

## 実装の優先順位

1. Sanityプロジェクト設定＋スキーマ作成＋上記3記事のサンプルデータ投入
2. Next.jsプロジェクト初期化＋Tailwind config（カラー・フォント設定）
3. ページルーティング作成
4. コンポーネント実装（Hero → PieceCard → SectionBlock → CrossoverBlock → JapanMap の順）
5. SanityからのデータフェッチをGROQクエリで接続
6. 日本地図インタラクション（hover・click）実装
7. フィルター機能（カテゴリ・ライフスタイルタグ）実装
8. レスポンシブ・余白・タイポグラフィの細部調整

---

## 備考・制約

- **Sanity Studio**からノーコードで記事・画像・テキストを更新できる設計にする
- ダークモード：今は不要
- 検索機能：今は不要
- 認証：不要（全ページ公開）
- アニメーションは控えめ（フェードイン程度、過剰にしない）
- 将来的にStripe決済追加を想定した構造にしておく
- 画像のaltテキストは必ず英語で設定する（SEO・アクセシビリティ）
- プレミアム感の演出（職人からの手紙など）は今フェーズでは不要
- ポジションは「キュレーター・エデュケーター」。インフルエンサーではない

---

## 関連ファイル

- `brand-concept.md` ← ブランド定義・ビジョン・商材基準
- `logo-icon.svg` ← 判子アイコン
- `logo-wordmark.svg` ← フルロゴ
