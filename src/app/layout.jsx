import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SmoothScrolling from './components/layout/SmoothScrolling'

export const metadata = {
  title: 'HIGHGUISE - Street Culture Meets High Fashion',
  description: 'Street culture meets high fashion. Documenting the intersection of art, rebellion, and style.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-white">
        <SmoothScrolling>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScrolling>
      </body>
    </html>
  )
}