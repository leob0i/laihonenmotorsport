import { Wrench, Shield, Clock, Award, CircleDot } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Asiantuntijuus</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Huollamme kaikki merkit
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ammattitaitoinen henkilökuntamme huolehtii autostasi kuin omastaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Wrench,
              title: "Ammattitaito",
              description: "Kokeneet mekaanikot",
            },
            {
              icon: Shield,
              title: "2v Takuu",
              description: "Kaikelle tyolle",
            },
            {
              icon: Clock,
              title: "Nopea",
              description: "Tehokas toimitus",
            },
            {
              icon: Award,
              title: "Laatu",
              description: "Alkuperaisosat",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 border border-border hover:border-primary/50 bg-card transition-all duration-500"
            >
              <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Rengaspalvelut</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
              Renkaat & Vanteet
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tarjoamme kattavat rengaspalvelut ammattitaidolla. Meidän kauttamme saat myös renkaat ja vanteet laajasta valikoimastamme.
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display text-5xl font-bold text-primary">75</span>
              <span className="text-2xl text-muted-foreground">€/tunti</span>
            </div>
            <ul className="space-y-4">
              {[
                "Rengasvaihdot ja -asennukset",
                "Renkaiden tasapainotus",
                "Vannevaurioiden korjaus",
                "Iso valikoima renkaita ja vanteita",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-primary"></div>
                  <span className="text-foreground text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
              alt="Rengaspalvelut"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <CircleDot className="w-5 h-5 text-primary" />
              <span className="font-display text-sm tracking-wider uppercase text-foreground">Premium laatu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
