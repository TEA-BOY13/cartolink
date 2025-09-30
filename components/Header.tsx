import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-transparent backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-md bg-black dark:bg-white/90 text-white dark:text-black flex items-center justify-center font-bold">K</div>
          <div className="text-sm text-gray-700 dark:text-gray-300">krea.ai</div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div>Gallery</div>
            <div>Support</div>
          </nav>
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-700"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}