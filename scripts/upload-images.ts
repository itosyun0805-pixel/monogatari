import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'vm9j2v4c',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// 既存ドキュメントのID（seedで作成したもの）
const DOC_IDS = {
  noren:  'u4SPfG4EtNHvvP9Lxa7dGx',
  koh:    '6gTM2oZAs211odP4IQwHHF',
  daruma: '6gTM2oZAs211odP4IQwHij',
}

// Unsplashから取得した画像URL
const IMAGES = {
  // のれん
  norenHero:     'https://images.unsplash.com/photo-1764445274404-f2e14fd3f20c?w=1600&q=85',
  norenNewUse2:  'https://images.unsplash.com/photo-1764445274424-47bbc216073b?w=1200&q=80',
  // お香
  kohNewUse2:    'https://images.unsplash.com/photo-1764445274404-f2e14fd3f20c?w=1200&q=80',
  // だるま
  darumaNewUse1: 'https://images.unsplash.com/photo-1759373286168-e104625bd8fd?w=1200&q=80',
  darumaNewUse2: 'https://images.unsplash.com/photo-1758535557154-af85568c1e89?w=1200&q=80',
  // 職人（全記事共通）
  craftsman:     'https://plus.unsplash.com/premium_photo-1744492017194-48f2e0a03860?w=800&q=80',
}

async function uploadFromUrl(url: string, label: string) {
  console.log(`  Fetching: ${label}...`)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  const asset = await client.assets.upload('image', buffer, {
    filename: `${label}.jpg`,
    contentType: 'image/jpeg',
  })
  console.log(`  ✓ Uploaded: ${label} → ${asset._id}`)
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function run() {
  console.log('\n── Uploading Unsplash images to Sanity ──\n')

  // ① のれんのHeroと追加New Use
  console.log('Noren:')
  const norenHero    = await uploadFromUrl(IMAGES.norenHero,    'noren-hero')
  const norenNewUse2 = await uploadFromUrl(IMAGES.norenNewUse2, 'noren-newuse-2')
  const craftsmanImg = await uploadFromUrl(IMAGES.craftsman,    'craftsman')

  await client
    .patch(DOC_IDS.noren)
    .set({
      heroImage: norenHero,
      'maker.photo': craftsmanImg,
    })
    .insert('after', 'newUse[-1]', [{
      _key: 'n2-uploaded',
      image: norenNewUse2,
      caption: 'Hung in a Brooklyn studio as a room divider — replacing a door that was never needed.',
    }])
    .commit()
  console.log('  ✓ Noren updated\n')

  // ② お香のHeroはShunが提供 → New Use②だけ補完
  console.log('Koh:')
  const kohNewUse2 = await uploadFromUrl(IMAGES.norenNewUse2, 'koh-newuse-2')
  await client
    .patch(DOC_IDS.koh)
    .insert('after', 'newUse[-1]', [{
      _key: 'n2-uploaded',
      image: kohNewUse2,
      caption: 'A Tokyo architect keeps a stick burning during every design session. "It resets the room."',
    }])
    .commit()
  console.log('  ✓ Koh updated\n')

  // ③ だるまのHeroと全New Use
  console.log('Daruma:')
  const darumaNewUse1 = await uploadFromUrl(IMAGES.darumaNewUse1, 'daruma-newuse-1')
  const darumaNewUse2 = await uploadFromUrl(IMAGES.darumaNewUse2, 'daruma-newuse-2')

  await client
    .patch(DOC_IDS.daruma)
    .set({ 'maker.photo': craftsmanImg })
    .set({
      newUse: [
        {
          _key: 'n1',
          image: darumaNewUse1,
          caption: 'A startup founder in San Francisco keeps one on her desk. "It\'s the only goal-setting system I\'ve stuck with."',
        },
        {
          _key: 'n2',
          image: darumaNewUse2,
          caption: 'Used as a wedding guest book alternative — each guest signs the daruma. The couple paints the second eye on their anniversary.',
        },
      ],
    })
    .commit()
  console.log('  ✓ Daruma updated\n')

  console.log('── Done. ──\n')
  console.log('Next: Upload hero images for Koh and Noren via /studio')
}

run().catch(console.error)
