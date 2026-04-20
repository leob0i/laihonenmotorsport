import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Laptop, Pickaxe, Building, Palette } from "lucide-react"

export default function FocusAreas() {
  const areas = [
    {
      icon: MapPin,
      title: "Tourism & Hospitality",
      description: "With over 1.2 million visitors annually, AJK offers immense tourism potential.",
      stats: "1.2M+ Visitors",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Laptop,
      title: "IT & Digital Economy",
      description: "Young, tech-savvy population with improving internet infrastructure.",
      stats: "Growing Tech Hub",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Pickaxe,
      title: "Mining & Resources",
      description: "Valuable yet underutilized mineral resources across the region.",
      stats: "Rich Deposits",
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: Building,
      title: "Urban Development",
      description: "Smart, sustainable development for accelerating urbanization.",
      stats: "Smart Cities",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Palette,
      title: "Creative Industries",
      description: "Traditional crafts and agro-industries central to cultural heritage.",
      stats: "Cultural Focus",
      color: "from-teal-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Strategic Focus Areas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlocking the economic potential of key regional sectors through targeted initiatives and partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}
