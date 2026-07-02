import { Wrench, Shield, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="pt-10 pb-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 mb-4">
          {[
            {
              icon: Wrench,
              title: "Huolto- ja ohjelmointiosaaminen",
              description: "Huollot, ohjelmoinnit ja performance-ratkaisut kokemuksella.",
            },
            {
              icon: Shield,
              title: "3 vuoden varaosatakuu",
              description: "Mekonomenin laadukkaat varaosat ja uuden auton takuu säilyy.",
            },
            {
              icon: Award,
              title: "Putkistot ja hitsaus",
              description: "Custom-putkistot ja hitsaustyöt ammattitaidolla.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <item.icon className="w-6 h-6 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1 uppercase tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
