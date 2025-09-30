import Head from 'next/head'
import Header from '../components/Header'
import HeroCarousel from '../components/HeroCarousel'
import GenerateGrid from '../components/GenerateGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1220] transition-colors">
      <Head>
        <title>Krea Clone</title>
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <HeroCarousel />
        <div className="mt-12">
          <GenerateGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}