'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, User, AlignRight, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

// Nav items
const navItems = [
  { href: '/women', label: 'Women' },
  { href: '/men', label: 'Men' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#F5E6D3] to-[#F9D5C5] transition-all duration-300 ease-in-out ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Left links */}
          <div className="hidden md:flex space-x-4">
            {navItems.slice(0, 2).map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
          
          {/* Center logo with Playfair Display font */}
          <div className="flex items-center justify-center flex-grow md:flex-grow-0">
            <Link href="/">
              <motion.span 
                className="text-3xl font-bold text-[#8B4513] tracking-wide"
                style={{ fontFamily: '"Playfair Display", serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                A Fabric
              </motion.span>
            </Link>
          </div>
          
          {/* Right links */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(2).map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
            <div className="flex items-center space-x-2">
              <IconButton icon={<User className="h-5 w-5" />} label="User account" />
              <IconButton icon={<ShoppingCart className="h-5 w-5" />} label="Shopping cart" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#8B4513] hover:text-[#A0522D]"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <AlignRight className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#F5E6D3]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} mobile />
              ))}
              <NavLink href="/account" label="Account" icon={<User className="h-4 w-4 mr-2" />} mobile />
              <NavLink href="/cart" label="Cart" icon={<ShoppingCart className="h-4 w-4 mr-2" />} mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ href, label, icon, mobile }) {
  return (
    <Link href={href}>
      <motion.span
        className={`
          inline-block text-[#8B4513] font-semibold text-sm tracking-wide
          px-4 py-2 rounded-full transition-all duration-300 ease-in-out
          ${mobile ? 'block w-full text-left' : ''}
          hover:bg-[#8B4513] hover:text-[#F5E6D3]
          active:bg-[#A0522D] active:text-[#F5E6D3]
          focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && <span className="inline-block align-middle mr-2">{icon}</span>}
        {label}
      </motion.span>
    </Link>
  )
}

function IconButton({ icon, label }) {
  return (
    <motion.button
      className={`
        text-[#8B4513] p-2 rounded-full transition-all duration-300 ease-in-out
        hover:bg-[#8B4513] hover:text-[#F5E6D3]
        active:bg-[#A0522D] active:text-[#F5E6D3]
        focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.button>
  )
}