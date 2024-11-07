'use client'
import Link from 'next/link'
import { ShoppingCart, User, AlignRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Nav items
const navItems = [
  { href: '/women', label: 'Women' },
  { href: '/men', label: 'Men' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav aria-label="Main Navigation" className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left links */}
          <div className="hidden sm:flex space-x-6">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-gray-500 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Center logo with Cookie font */}
          <div className="flex items-center justify-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-800" 
              style={{ fontFamily: 'Cookie, cursive' }}
            >
              A Fabric
            </Link>
          </div>
          
          {/* Right links */}
          <div className="hidden sm:flex space-x-6">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-gray-500 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="ghost" size="icon" aria-label="User account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile dropdown menu */}
          <div className="flex sm:hidden">
            <DropdownMenu align="end">
              <DropdownMenuTrigger asChild>
                <Button aria-label="Toggle Menu" variant="ghost">
                  <AlignRight className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuSeparator />
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span>Cart</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </ div> 
    </nav>
  )
}
