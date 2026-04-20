import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Shield, Clock, Award, CircleDot, Car } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Huollamme kaikki merkit</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Leon Korjaamo on luotettava autokorjaamo, joka tarjoaa laadukasta huolto- ja korjauspalvelua kaikille
            automerkeille. Ammattitaitoinen henkilökuntamme huolehtii autostasi kuin omastaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Wrench,
              title: "Ammattitaito",
              description: "Kokeneet mekaanikot palveluksessasi",
              color: "from-emerald-500 to-teal-500",
            },
            {
              icon: Shield,
              title: "2v Takuu",
              description: "Takuu kaikelle työnteollemme",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Clock,
              title: "Nopea palvelu",
              description: "Tehokas ja täsmällinen toimitus",
              color: "from-emerald-600 to-green-600",
            },
            {
              icon: Award,
              title: "Laatu",
              description: "Alkuperäiset ja laadukkaat varaosat",
              color: "from-blue-600 to-indigo-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Rengaspalvelut</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tarjoamme kattavat rengaspalvelut ammattitaidolla. Rengastyöt hintaan <span className="font-bold text-emerald-600">75€/tunti</span>.
                Meidän kauttamme saat myös renkaat ja vanteet laajasta valikoimastamme.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Iso valikoima renkaita ja vanteita kaikille automerkeille. Autamme sinua löytämään juuri oikeat renkaat autoosi.
              </p>
              <ul className="space-y-2">
                {[
                  "Rengasvaihdot ja -asennukset",
                  "Renkaiden tasapainotus",
                  "Vannevaurioiden korjaus",
                  "Renkaat ja vanteet kauttamme",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
                alt="Rengaspalvelut"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <CircleDot className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-gray-800">75€/tunti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
