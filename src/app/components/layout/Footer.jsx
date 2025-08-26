'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <Link 
              href="/"
              className="font-black text-xl tracking-wider text-black mb-4 underline inline-block"
              style={{ fontStretch: 'condensed' }}
            >
              HIGHGUISE
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Street culture meets high fashion. This is a fancy joke with real prints. -AI 
            </p>
            <p className="text-gray-500 text-xs italic">
              *Premium scrolling experience included
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-black mb-4 uppercase tracking-wide text-sm"
                style={{ fontStretch: 'condensed' }}>
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/statements" className="text-gray-600 hover:text-black transition-colors">Statements</Link></li>
              <li><Link href="/environments" className="text-gray-600 hover:text-black transition-colors">Environments</Link></li>
              <li><Link href="/impressions" className="text-gray-600 hover:text-black transition-colors">Impressions</Link></li>
              <li><Link href="/debris" className="text-gray-600 hover:text-black transition-colors">Debris</Link></li>
              <li><Link href="/objects" className="text-gray-600 hover:text-black transition-colors">Objects</Link></li>
              <li><Link href="/technologies" className="text-gray-600 hover:text-black transition-colors">Technologies</Link></li>
              <li><Link href="/collections" className="text-gray-600 hover:text-black transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Culture Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-black mb-4 uppercase tracking-wide text-sm"
                style={{ fontStretch: 'condensed' }}>
              Culture
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About the Joke</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Street Art Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Behind the Scenes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-semibold text-black mb-4 uppercase tracking-wide text-sm"
                style={{ fontStretch: 'condensed' }}>
              Stay Up
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              we actually wont email you tho
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm border border-gray-200 focus:border-black focus:outline-none transition-colors"
                required
                suppressHydrationWarning={true}  // Prevent hydration warnings from browser extensions
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
                suppressHydrationWarning={true}  // Prevent hydration warnings from browser extensions
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 HIGHGUISE. no rights reserved. 
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <span className="text-lg">📸</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <span className="text-lg">🎵</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <span className="text-lg">📧</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}