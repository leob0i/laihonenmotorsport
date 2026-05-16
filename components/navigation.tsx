"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [palvelutOpen, setPalvelutOpen] = useState(false)

  const palvelutItems = [
    { name: "Auton ohjelmointi", href: "/auton-ohjelmointi" },
    { name: "Pakoputkistot", href: "/pakoputkistot" },
    { name: "Huollot", href: "/huollot" },
    { name: "Korjaukset ja vianhaku", href: "/korjaukset" },
    { name: "Rengastyöt", href: "/rengastyot" },
  ]

  const navItems = [
    { name: "Etusivu", href: "/" },
    { name: "Premium-huollot", href: "/premium-huollot" },
    { name: "Meistä", href: "/meista" },
    { name: "Yhteystiedot", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LK</span>
            </div>
            <span className="font-bold text-xl text-foreground">Leon Korjaamo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-emerald-400 font-medium transition-colors duration-200"
            >
              Etusivu
            </Link>

            {/* Palvelut Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPalvelutOpen(true)}
              onMouseLeave={() => setPalvelutOpen(false)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-emerald-400 font-medium transition-colors duration-200">
                Palvelut
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${palvelutOpen ? "rotate-180" : ""}`} />
              </button>
              
              {palvelutOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg border border-border py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {palvelutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-background transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/premium-huollot"
              className="text-muted-foreground hover:text-emerald-400 font-medium transition-colors duration-200"
            >
              Premium-huollot
            </Link>
            <Link
              href="/meista"
              className="text-muted-foreground hover:text-emerald-400 font-medium transition-colors duration-200"
            >
              Meistä
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-emerald-400 font-medium transition-colors duration-200"
            >
              Yhteystiedot
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
              onClick={() => (window.location.href = "/contact")}
            >
              Varaa aika
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-card text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-card rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Etusivu
              </Link>

              {/* Mobile Palvelut Accordion */}
              <div>
                <button
                  onClick={() => setPalvelutOpen(!palvelutOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-card rounded-lg transition-colors duration-200"
                >
                  Palvelut
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${palvelutOpen ? "rotate-180" : ""}`} />
                </button>
                {palvelutOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {palvelutItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-card rounded-lg transition-colors duration-200 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/premium-huollot"
                className="block px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-card rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Premium-huollot
              </Link>
              <Link
                href="/meista"
                className="block px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-card rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Meistä
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-muted-foreground hover:text-emerald-400 hover:bg-card rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Yhteystiedot
              </Link>

              <div className="px-4 pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Varaa aika
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
