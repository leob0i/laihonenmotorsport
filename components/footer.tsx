import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LK</span>
              </div>
              <span className="font-bold text-xl">Leon Korjaamo</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Luotettavaa ja laadukasta autohuoltoa. Kaikelle tyolle 2 vuoden takuu. Tervetuloa asioimaan!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Pikalinkit</h3>
            <ul className="space-y-3">
              {[
                { name: "Etusivu", href: "/" },
                { name: "Tietoa meista", href: "/about" },
                { name: "Palvelut", href: "/services" },
                { name: "Yhteystiedot", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Palvelut</h3>
            <ul className="space-y-3">
              {[
                "Maaraaikaishuollot",
                "Korjaukset",
                "Rengaspalvelut",
                "Diagnostiikka",
                "Varaosat",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Yhteystiedot</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <span className="text-gray-300">Korjaamokatu 1, 00100 Helsinki</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">+358 40 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">info@leonkorjaamo.fi</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-gray-300">
                  <p>Ma-Pe: 8:00-17:00</p>
                  <p>La: 9:00-14:00</p>
                  <p>Su: Suljettu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Leon Korjaamo. Kaikki oikeudet pidatetaan.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Tietosuojaseloste
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Kayttoehdot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
