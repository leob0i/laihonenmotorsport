import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsSection() {
  const news = [
    {
      title: "BFAJK&GB Launches Digital Economy Initiative",
      excerpt:
        "New program aims to connect local tech talent with global opportunities through strategic partnerships and skill development.",
      date: "March 15, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    },
    {
      title: "Tourism Infrastructure Development Summit",
      excerpt:
        "Forum brings together stakeholders to discuss sustainable tourism development and infrastructure improvements.",
      date: "March 10, 2024",
      category: "Tourism",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop",
    },
    {
      title: "Ethical Business Practices Workshop Series",
      excerpt: "Monthly workshops focusing on implementing Islamic business ethics in modern commercial practices.",
      date: "March 5, 2024",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Latest News & Updates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest initiatives, events, and developments in the business community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-500 text-white">{item.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-emerald-600 hover:text-emerald-700">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}
