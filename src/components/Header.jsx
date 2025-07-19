import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Fungsi untuk mengecek apakah link aktif
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-black/50 text-white shadow-lg fixed w-full z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            . LestariFauna
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link 
                to="/" 
                className={`relative hover:text-blue-200 transition px-2 py-1 ${
                  isActive('/') ? 'text-blue-300' : ''
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-300 rounded-full transition-all duration-300"></span>
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`relative hover:text-blue-200 transition px-2 py-1 ${
                  isActive('/about') ? 'text-blue-300' : ''
                }`}
              >
                About
                {isActive('/about') && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-300 rounded-full transition-all duration-300"></span>
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`relative hover:text-blue-200 transition px-2 py-1 ${
                  isActive('/contact') ? 'text-blue-300' : ''
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-300 rounded-full transition-all duration-300"></span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col space-y-4 pt-4 pb-6">
            <li>
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded transition ${
                  isActive('/') 
                    ? 'bg-blue-500/20 text-blue-300 border-l-4 border-blue-300' 
                    : 'hover:text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded transition ${
                  isActive('/about') 
                    ? 'bg-blue-500/20 text-blue-300 border-l-4 border-blue-300' 
                    : 'hover:text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded transition ${
                  isActive('/contact') 
                    ? 'bg-blue-500/20 text-blue-300 border-l-4 border-blue-300' 
                    : 'hover:text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}