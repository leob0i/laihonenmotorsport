"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function StatsSection() {
  const [counts, setCounts] = useState({
    members: 0,
    businesses: 0,
    projects: 0,
    partnerships: 0,
  })

  const finalCounts = {
    members: 1247,
    businesses: 856,
    projects: 342,
    partnerships: 89,
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + increment, finalValue),
        }))
      }, stepDuration)
    })

    setTimeout(() => {
      timers.forEach((timer) => clearInterval(timer))
      setCounts(finalCounts)
    }, duration)

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  const stats = [
    {
      number: Math.floor(counts.members),
      label: "Active Members",
      description: "Entrepreneurs & Professionals",
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: Math.floor(counts.businesses),
      label: "Partner Businesses",
      description: "Across AJK & GB",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: Math.floor(counts.projects),
      label: "Active Projects",
      description: "Development Initiatives",
      color: "from-emerald-600 to-green-600",
    },
    {
      number: Math.floor(counts.partnerships),
      label: "Strategic Partnerships",
      description: "National & International",
      color: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact in Numbers</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building a stronger business ecosystem through measurable results and meaningful partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.number.toLocaleString()}+
                </div>
                <h3 className="text-xl font-semibold mb-1">{stat.label}</h3>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
