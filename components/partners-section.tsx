export default function PartnersSection() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Partner 6", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Partners</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Working together with leading organizations to drive economic transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
