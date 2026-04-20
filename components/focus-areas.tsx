"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Car, Settings, Gauge, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FocusAreas() {
  const areas = [
    {
      icon: Wrench,
      title: "Määräaikaishuollot",
      description: "Täydelliset määräaikaishuollot kaikille automerkeille. BMW ja Mercedes-Benz huollot alk. 499€.",
      stats: "Alk. 499€",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Car,
      title: "Korjaukset",
      description: "Laajat korjauspalvelut jarruista moottoriin. Kaikelle työlle 2 vuoden takuu.",
      stats: "2v Takuu",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Settings,
      title: "Varaosat",
      description: "Alkuperäiset ja laadukkaat varaosat kilpailukykyiseen hintaan. Valmistajan takuu.",
      stats: "Alkuperäisosat",
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: Gauge,
      title: "Diagnostiikka",
      description: "Modernit diagnostiikkalaitteet vikojen nopeaan ja tarkkaan paikannukseen.",
      stats: "Nykyaikainen",
      color: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Palvelumme</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tarjoamme kattavat autohuoltopalvelut ammattitaidolla ja laadukkailla varaosilla
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${area.color} p-6 text-white`}>
                  <area.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <div className="text-sm bg-white/20 rounded-full px-3 py-1 w-fit">{area.stats}</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6 text-white">
              <Wrench className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Kaikki palvelut</h3>
              <div className="text-sm bg-white/20 rounded-full px-3 py-1 w-fit">Laaja valikoima</div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                Katso kaikki palvelumme yhdellä sivulla. Huollot, korjaukset, rengaspalvelut, katsastus ja paljon muuta.
              </p>
              <Link href="/palvelut">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Katso kaikki palvelut
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
