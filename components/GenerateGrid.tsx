const items = [
  { title: 'Image', desc: 'Generate images with custom styles', tag: 'New' },
  { title: 'Video', desc: 'Generate videos in H264, ProRes', tag: '' },
  { title: 'Edit', desc: 'Edit assets & change style', tag: 'New' },
  { title: 'Realtime', desc: 'Realtime in-canvas remixes', tag: '' },
  { title: 'Enhancer', desc: 'Upscale and enhance images', tag: 'Beta' }
]

export default function GenerateGrid() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Generate</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl border border-gray-100 dark:border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-white/60 dark:bg-white/10 flex items-center justify-center font-bold">{it.title[0]}</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{it.title} {it.tag && <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">{it.tag}</span>}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{it.desc}</div>
            </div>
            <button className="ml-2 text-sm px-3 py-1 rounded-full border">Open</button>
          </div>
        ))}
      </div>
    </section>
  )
}