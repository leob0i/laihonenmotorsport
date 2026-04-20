import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Business Forum Azad Jammu & Kashmir & Gilgit Baltistan (BFAJK&GB) is a non-profit, non-political
            alliance of visionary entrepreneurs, investors, economists, and professionals committed to economic
            transformation grounded in Islamic ethics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Leadership",
              description: "Under Mr. Imran Aziz's visionary guidance",
              color: "from-emerald-500 to-teal-500",
            },
            {
              icon: Target,
              title: "Mission",
              description: "Ethical business ecosystem development",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Eye,
              title: "Vision",
              description: "Shariah-compliant sustainable success",
              color: "from-emerald-600 to-green-600",
            },
            {
              icon: Award,
              title: "Values",
              description: "Islamic ethics in commerce",
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
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                BFAJK&GB acts as a catalyst for entrepreneurship, inclusive policymaking, and sustainable regional
                development. We champion an ethical business ecosystem through capacity-building, policy advocacy, and
                strategic alliances.
              </p>
              <ul className="space-y-2">
                {[
                  "Capacity-building initiatives",
                  "Policy advocacy programs",
                  "Strategic alliance development",
                  "Sustainable regional growth",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Business collaboration"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
