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

            {/* Palvelut Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPalvelutOpen(true)}
              onMouseLeave={() => setPalvelutOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
                Palvelut
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${palvelutOpen ? "rotate-180" : ""}`} />
              </button>
              
              {palvelutOpen && (
                <div className="absolute top-full left-0 mt-4 w-60 bg-card border border-border py-3 animate-in fade-in slide-in-from-top-2 duration-200">
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
              href="/premium-huollot"
              className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Premium
            </Link>
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
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Etusivu
              </Link>

              {/* Mobile Palvelut Accordion */}
              <div>
                <button
                  onClick={() => setPalvelutOpen(!palvelutOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Palvelut
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${palvelutOpen ? "rotate-180" : ""}`} />
                </button>
                {palvelutOpen && (
                  <div className="pl-4 space-y-1 border-l border-primary/30 ml-4">
                    {palvelutItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-200"
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
                className="block px-4 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Premium
              </Link>
              <Link
                href="/meista"
                className="block px-4 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Meista
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Yhteystiedot
              </Link>

              <div className="px-4 pt-6">
                <Button
                  className="w-full bg-primary hover:bg-primary-600 text-black font-semibold text-xs tracking-widest uppercase py-5"
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
