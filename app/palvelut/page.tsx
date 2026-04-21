"use client"

import { Button } from "@/components/ui/button"
import {
  Wrench,
  Gauge,
  Zap,
  Droplets,
  Settings,
  Cog,
  CircleDot,
  Thermometer,
  Compass,
  Activity,
  RefreshCw,
  ClipboardCheck,
  Wind,
  Plug,
  Footprints,
  LinkIcon,
  ShoppingBag,
  Car,
  ArrowRight,
  Shield,
  Clock,
  BadgeCheck,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    category: "Huollot",
    icon: Wrench,
    items: [
      {
        title: "Määräaikaishuollot",
        description: "Valmistajan huolto-ohjelman mukaiset huollot takuun säilyttäen.",
        price: "alk. 159 €",
        icon: Car,
      },
      {
        title: "Diagnostiikkatyöt",
        description: "Vaativat vianetsinnät diagnoosilaitteen avulla.",
        icon: Gauge,
      },
      {
        title: "Autosähkötyöt",
        description: "Valo- ja sähkölaitteiden vianetsintä ja korjaus.",
        icon: Zap,
      },
      {
        title: "Öljynvaihto",
        description: "Moottoriöljyn ja suodattimen vaihto.",
        price: "alk. 120 €",
        icon: Droplets,
      },
    ],
  },
  {
    category: "Korjaukset",
    icon: Settings,
    items: [
      {
        title: "Alusta- ja jousitustyöt",
        description: "Alustan, jousituksen ja pyöräntuennan osien vaihto.",
        icon: Settings,
      },
      {
        title: "Jakopään vaihtotyöt",
        description: "Jakopään vaihto valmistajan ohjeilla.",
        icon: Cog,
      },
      {
        title: "Jarrujen huolto",
        description: "Jarrujen herkistykset ja osien vaihto.",
        icon: CircleDot,
      },
      {
        title: "Kytkimen huolto",
        description: "Kytkimen ja painelaakerin vaihtotyöt.",
        icon: RefreshCw,
      },
    ],
  },
  {
    category: "Erikoistyöt",
    icon: Activity,
    items: [
      {
        title: "Päästömittaus",
        description: "Bensiiniautojen päästömittaus katsastusta varten.",
        icon: Wind,
      },
      {
        title: "Ilmastoinnin huolto",
        description: "Ilmastointijärjestelmän täyttö ja korjaus.",
        icon: Thermometer,
      },
      {
        title: "Nelipyöräsuuntaus",
        description: "Ohjauskulmien mittaus ja säätö.",
        price: "alk. 89 €",
        icon: Compass,
      },
      {
        title: "ABS-vianhaku",
        description: "ABS- ja ajonhallintajärjestelmien korjaus.",
        icon: Activity,
      },
      {
        title: "Automaattivaihteiston huolto",
        description: "Automaattivaihteistojen öljynvaihto ja vianhaku.",
        icon: Droplets,
      },
    ],
  },
  {
    category: "Muut palvelut",
    icon: ShoppingBag,
    items: [
      {
        title: "Rengastyöt",
        description: "Renkaiden vaihto, tasapainotus ja kausivaihdot.",
        icon: CircleDot,
      },
      {
        title: "Katsastuttaminen",
        description: "Katsastuskelpoisuuden tarkistus ja katsastus puolestasi.",
        icon: ClipboardCheck,
      },
      {
        title: "Moottorin huuhtelu",
        description: "Kemialliset moottorin sisähuuhtelut.",
        icon: Wind,
      },
      {
        title: "Lämmittimet",
        description: "Defa- ja Calix-lämmittimien asennus.",
        icon: Plug,
      },
      {
        title: "Opetuspolkimet",
        description: "Opetuspolkimien asennus opetuslupaa varten.",
        icon: Footprints,
      },
      {
        title: "Vetokoukut",
        description: "Vetokoukun ja sähkösarjan myynti ja asennus.",
        icon: LinkIcon,
      },
      {
        title: "Renkaiden myynti",
        description: "Bridgestone, Kumho ja Toyo -renkaat.",
        icon: ShoppingBag,
      },
    ],
  },
]

const highlights = [
  {
    icon: Shield,
    title: "2 vuoden takuu",
    description: "Kaikelle työllemme",
  },
  {
    icon: Clock,
    title: "3kk maksuaika",
    description: "Koroton rahoitus",
  },
  {
    icon: BadgeCheck,
    title: "Ammattitaito",
    description: "Kokeneet mekaanikot",
  },
]

export default function PalvelutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-gray-950 to-blue-600/20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Kattavat autohuoltopalvelut</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Kaikki palvelut
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Huollamme kaikki automerkit ammattitaidolla. Meiltä saat huollot, korjaukset ja erikoistyöt saman katon alta.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 rounded-xl px-6 py-4"
                  >
                    <item.icon className="w-5 h-5 text-emerald-400" />
                    <div className="text-left">
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Varaa aika
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.items.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="group relative bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all">
                          <service.icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                            {service.title}
                          </h3>
                          {service.price && (
                            <span className="inline-block text-sm font-semibold text-emerald-400 mb-2">
                              {service.price}
                            </span>
                          )}
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-900/50 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  BMW & Mercedes-Benz erikoishuollot
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl">
                  Premium-merkkien määräaikaishuollot alkuperäisosilla alk. 499 €. 
                  Takuu säilyy, laatu varmistettu.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 h-14 text-lg flex-shrink-0"
                onClick={() => window.location.href = "/premium-huollot"}
              >
                Katso premium-huollot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Varaa huoltoaika
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja kerro autosi huoltotarpeesta. Annamme kustannusarvion ennen työn aloittamista.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Ota yhteyttä
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "tel:+358401234567"}
              >
                Soita: 040 123 4567
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
