import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MapClient from './MapClient'
import { client } from '@/sanity/lib/client'
import { allPiecesQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function MapPage() {
  const allPieces = await client.fetch(allPiecesQuery)
  return (
    <>
      <Navbar />
      <MapClient allPieces={allPieces} />
      <Footer />
    </>
  )
}
