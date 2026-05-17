"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [menuMounted, setMenuMounted] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [palvelutOpen, setPalvelutOpen] = useState(false)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isOpen = menuMounted

  const openMenu = () => {
    if (closeMenuTimeout.current) clearTimeout(closeMenuTimeout.current)
    setMenuMounted(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuVisible(true)))
  }

  const closeMenu = () => {
    setMenuVisible(false)
    closeMenuTimeout.current = setTimeout(() => {
      setMenuMounted(false)
      setPalvelutOpen(false)
    }, 300)
  }

  const toggleMenu = () => {
    if (menuMounted) closeMenu()
    else openMenu()
  }

  const handlePalvelutEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setPalvelutOpen(true)
  }

  const handlePalvelutLeave = () => {
    closeTimeout.current = setTimeout(() => setPalvelutOpen(false), 150)
  }

  const palvelutItems = [
    { name: "Auton ohjelmointi", href: "/auton-ohjelmointi" },
    { name: "Pakoputkistot", href: "/pakoputkistot" },
    { name: "Huollot", href: "/huollot" },
    { name: "Korjaukset ja vianhaku", href: "/korjaukset" },
    { name: "Rengastyöt", href: "/rengastyot" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 border border-primary flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg">LK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-foreground uppercase">Leon</span>
              <span className="text-[10px] tracking-ultra-wide text-muted-foreground uppercase">Korjaamo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Etusivu
            </Link>
            <Link
              href="/huollot"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Huollot
            </Link>

            {/* Palvelut Dropdown */}
            <div
              className="relative"
              onMouseEnter={handlePalvelutEnter}
              onMouseLeave={handlePalvelutLeave}
            >
              <button className="flex items-center gap-1.5 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
                Palvelut
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${palvelutOpen ? "rotate-180" : ""}`} />
              </button>

              {palvelutOpen && (
                <div
                  className="absolute top-full left-0 mt-4 w-60 bg-card border border-border py-3 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handlePalvelutEnter}
                  onMouseLeave={handlePalvelutLeave}
                >
                  {palvelutItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm tracking-wide text-muted-foreground hover:text-primary hover:bg-background transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/meista"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Meista
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Yhteystiedot
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-black px-8 py-5 text-xs tracking-widest uppercase transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Varaa aika
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuMounted && (
          <div
            className={`md:hidden py-8 border-t border-border/50 transition-all duration-300 ease-out ${
              menuVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
            }`}
          >
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-4 text-lg tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMenu}
              >
                Etusivu
              </Link>
              <Link
                href="/huollot"
                className="block px-4 py-4 text-lg tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMenu}
              >
                Huollot
              </Link>

              {/* Mobile Palvelut Accordion */}
              <div>
                <button
                  onClick={() => setPalvelutOpen(!palvelutOpen)}
                  className="flex items-center justify-between w-full px-4 py-4 text-lg tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Palvelut
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${palvelutOpen ? "rotate-180" : ""}`} />
                </button>
                {palvelutOpen && (
                  <div className="pl-4 space-y-1 border-l border-primary/30 ml-4">
                    {palvelutItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-lg tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/meista"
                className="block px-4 py-4 text-lg tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMenu}
              >
                Meista
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-4 text-lg tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={closeMenu}
              >
                Yhteystiedot
              </Link>

              <div className="px-4 pt-6 space-y-3">
                <Button
                  className="w-full bg-primary hover:bg-primary-600 text-black font-semibold text-sm tracking-widest uppercase py-6"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Varaa aika
                </Button>
                <Button
                  className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-black font-semibold text-sm tracking-widest uppercase py-6 transition-all duration-300"
                  onClick={() => (window.location.href = "tel:+358401234567")}
                >
                  Soita
                </Button>
              </div>
              <div className="flex justify-center items-center gap-8 px-4 pt-6 pb-2">
                <img src="/mekonem.png" alt="Mekonomen" className="h-8 w-auto object-contain opacity-70" />
                <img src="/mperformance.webp" alt="M Performance" className="h-8 w-auto object-contain opacity-70" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
