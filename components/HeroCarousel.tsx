import { useState } from 'react'

const slides = [
  { titleBig: 'WAN 2.2', subtitle: 'WAN 2.2 Image generation', img: '/hero1.jpg' },
  { titleBig: 'Open Source', subtitle: 'FLUX.1 Krea', img: '/hero2.jpg' }
]

export default function HeroCarousel() {
  const [i, setI] = useState(0)
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((s, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-2xl h-64 md:h-80 shadow-md">
            <img src={s.img} alt={s.titleBig} className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="relative p-6 h-full flex flex-col justify-end">
              <h1 className="text-white font-extrabold text-4xl md:text-6xl drop-shadow-lg">{s.titleBig}</h1>
              <p className="text-white/90 mt-2 max-w-md">{s.subtitle}</p>
              <div className="mt-4">
                <button className="bg-white text-black px-4 py-2 rounded-full shadow">Try {s.titleBig}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`w-3 h-3 rounded-full ${i === idx ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-zinc-600'}`} />
        ))}
      </div>
    </section>
  )
}