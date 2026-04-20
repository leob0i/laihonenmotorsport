"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function StatsSection() {
  const [counts, setCounts] = useState({
    customers: 0,
    services: 0,
    years: 0,
    satisfaction: 0,
  })

  const finalCounts = {
    customers: 2500,
    services: 8500,
    years: 15,
    satisfaction: 98,
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
      number: Math.floor(counts.customers),
      label: "Tyytyvaista asiakasta",
      description: "Ja maara kasvaa jatkuvasti",
      color: "from-emerald-500 to-teal-500",
      suffix: "+",
    },
    {
      number: Math.floor(counts.services),
      label: "Tehtyä huoltoa",
      description: "Ammattitaitoista tyota",
      color: "from-blue-500 to-cyan-500",
      suffix: "+",
    },
    {
      number: Math.floor(counts.years),
      label: "Vuotta kokemusta",
      description: "Alalla toimimista",
      color: "from-emerald-600 to-green-600",
      suffix: "",
    },
    {
      number: Math.floor(counts.satisfaction),
      label: "Asiakastyytyvaisyys",
      description: "Suosittelee meita",
      color: "from-blue-600 to-indigo-600",
      suffix: "%",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leon Korjaamo lukuina</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Luotettavaa ja laadukasta palvelua jo vuosien ajan
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
                  {stat.number.toLocaleString()}{stat.suffix}
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
