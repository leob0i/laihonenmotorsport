import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 border border-primary flex items-center justify-center">
                <span className="text-primary font-display font-bold text-lg">LK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-foreground uppercase">Leon</span>
                <span className="text-[10px] tracking-ultra-wide text-muted-foreground uppercase">Korjaamo</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Luotettavaa ja laadukasta autohuoltoa. Kaikelle tyolle 2 vuoden takuu.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-8">Navigaatio</h3>
            <ul className="space-y-4">
              {[
                { name: "Etusivu", href: "/" },
                { name: "Palvelut", href: "/palvelut" },
                { name: "Premium", href: "/premium-huollot" },
                { name: "Meista", href: "/meista" },
                { name: "Yhteystiedot", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-8">Palvelut</h3>
            <ul className="space-y-4">
              {[
                "Maaraaikaishuollot",
                "Korjaukset",
                "Rengaspalvelut",
                "Diagnostiikka",
                "Ohjelmointi",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-8">Yhteystiedot</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">Korjaamokatu 1, 00100 Helsinki</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+358 40 123 4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@leonkorjaamo.fi</span>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p>Ma-Pe: 8:00-17:00</p>
                  <p>La: 9:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs tracking-wide">© 2024 Leon Korjaamo</p>
            <div className="flex space-x-8">
              <Link href="#" className="text-muted-foreground hover:text-primary text-xs tracking-wide transition-colors duration-300">
                Tietosuoja
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-xs tracking-wide transition-colors duration-300">
                Ehdot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
