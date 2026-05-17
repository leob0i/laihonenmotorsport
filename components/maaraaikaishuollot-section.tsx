import { CircleDot } from "lucide-react"

export default function MaaraaikaishuollotSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Miksi valita meidät?</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
              BMW-erikoisosaamista ja modernia autohuoltoa saman katon alta.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Yhdistämme nykyaikaisen diagnostiikan, performance-osaamisen ja laadukkaan huoltotyön — aina määräaikaishuolloista ECU- ja xHP-ohjelmointeihin sekä custom-pakoputkistoihin.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Osana Mekonomen-ketjua käytämme laadukkaita varaosia, valmistajan huolto-ohjeita ja tarjoamme jopa 3 vuoden varaosatakuun. Myös uuden auton tehdastakuu säilyy huolloissamme.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Olipa kyse päivittäisestä käyttöautosta tai harrasteautosta, saat meiltä ammattitaitoista palvelua ja ratkaisut juuri sinun autoosi.
            </p>
          </div>
          <div className="relative">
            <img
              src="/bmw.tumma.korjaamo.jpeg"
              alt="Määräaikaishuollot"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <CircleDot className="w-5 h-5 text-primary" />
              <span className="font-display text-sm tracking-wider uppercase text-foreground">Valmistajan takuu säilyy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
