import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MaaraaikaishuollotSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <img src="/frankie-cordoba-Ivni1dHTsFs-unsplash.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-left md:object-center" />
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="container mx-auto px-4 relative z-10">
        <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Miksi valita meidät?</span>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-12 uppercase tracking-tight max-w-3xl">
          Monipuolista erikoisosaamista ja modernia autohuoltoa saman katon alta.
        </h3>
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/15 pt-10">
          <p className="text-white/80 leading-relaxed">
            Yhdistämme nykyaikaisen diagnostiikan, performance-osaamisen ja laadukkaan huoltotyön — aina määräaikaishuolloista ECU- ja xHP-ohjelmointeihin sekä custom-pakoputkistoihin.
          </p>
          <p className="text-white/80 leading-relaxed">
            Osana Mekonomen-ketjua käytämme laadukkaita varaosia, valmistajan huolto-ohjeita ja tarjoamme jopa 3 vuoden varaosatakuun. Myös uuden auton tehdastakuu säilyy huolloissamme.
          </p>
          <p className="text-white/80 leading-relaxed">
            Olipa kyse päivittäisestä käyttöautosta tai harrasteautosta, saat meiltä ammattitaitoista palvelua ja ratkaisut juuri sinun autoosi.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 z-10">
        <Link href="/">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black text-xs tracking-widest uppercase px-6 py-2">
            Lue lisää meistä
            <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
