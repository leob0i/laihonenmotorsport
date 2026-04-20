"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Wrench,
  Gauge,
  Zap,
  Droplets,
  Settings,
  Cog,
  CircleDot,
  Thermometer,
  Compass,
  Activity,
  RefreshCw,
  ClipboardCheck,
  Wind,
  Plug,
  Footprints,
  LinkIcon,
  ShoppingBag,
  Car,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    category: "Huollot",
    description: "Kaikki yleisimmät huollot ja korjaukset saman katon alta ammattitaidolla.",
    icon: Wrench,
    color: "from-emerald-500 to-teal-500",
    items: [
      {
        title: "Määräaikaishuollot ja huollot uusiin autoihin",
        description: "Teemme määräaikaishuollot niin uusiin kuin vanhempiinkin autoihin valmistajan huolto-ohjelman mukaisesti takuun säilyttäen.",
        price: "alk. 159 €",
        icon: Car,
        includes: [
          "Huollot valmistajan huolto-ohjelman mukaan",
          "Huollot myös uusiin ja takuualaisiin autoihin",
          "Oikeat öljyt, suodattimet ja tarvikkeet",
          "Huoltokirjan merkinnät huollon yhteydessä",
          "Huolto-ohjelman mukaiset tarkastukset",
        ],
      },
      {
        title: "Diagnostiikkatyöt",
        description: "Vaativat vianetsinnät auton sähköjärjestelmästä diagnoosilaitteen avulla.",
        icon: Gauge,
        includes: [
          "Vikakoodien luku ja tulkinta",
          "Mittausarvojen seuranta testilaitteella",
          "Sähköjärjestelmän vianhaku",
          "Korjausehdotus jatkotoimista",
        ],
      },
      {
        title: "Autosähkötyöt",
        description: "Auton yleiset sähkötyöt, joissa ei välttämättä tarvita diagnoosilaitetta.",
        icon: Zap,
        includes: [
          "Valo- ja sähkölaitteiden vianetsintä",
          "Akkuihin ja lataukseen liittyvät työt",
          "Sulakkeiden ja johtovikojen tarkistus",
          "Yleisten sähkövikojen korjaukset ja vianhaku",
        ],
      },
      {
        title: "Öljynvaihto",
        description: "Auton moottorin öljynvaihto.",
        price: "alk. 120 € sis. 4 l moottoriöljyä",
        icon: Droplets,
        includes: [
          "Moottoriöljyn vaihto",
          "Öljynsuodattimen vaihto",
          "Huoltovälin nollaus tarvittaessa",
          "Silmävarainen tarkistus mahdollisille vuodoille",
        ],
      },
    ],
  },
  {
    category: "Korjaukset",
    description: "Ammattitaitoisia korjauksia kaikenlaisiin vikoihin.",
    icon: Settings,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        title: "Alusta- ja jousitustyöt",
        description: "Alustan, jousituksen ja pyöräntuennan osien vaihto sekä ilmajousitukseen liittyvät tarkastus- ja korjaustyöt.",
        icon: Settings,
        includes: [
          "Nivelten, kumihelojen ja muiden alustan osien vaihdot",
          "Iskunvaimentimien vaihto (suositus vaihtaa pareittain)",
          "Ilmajousituksen osien tarkastus ja korjaustyöt",
          "Kiinnitysten, yläpään osien ja pyöräntuennan tarkastus",
          "Tarvittaessa suuntaustarpeen arviointi",
        ],
      },
      {
        title: "Jakopään vaihtotyöt",
        description: "Jakopään vaihtotyöt auton valmistajan ohjeilla ja erikoistyökaluilla.",
        icon: Cog,
        includes: [
          "Valmistajan ohjeiden mukainen työ",
          "Kiristimien ja rullien uusiminen tarpeen mukaan",
          "Vesipumpun vaihto tarvittaessa",
        ],
      },
      {
        title: "Jarrujen huolto ja korjaus",
        description: "Jarrujen herkistykset sekä osien vaihto.",
        icon: CircleDot,
        includes: [
          "Jarrujen herkistys ja tarkastus",
          "Jarrupalojen ja levyjen vaihto",
          "Liukutappien ja liikkuvien osien huolto",
          "Jarrujen toiminnan tarkistus",
        ],
      },
      {
        title: "Kytkimen huolto ja korjaus",
        description: "Kytkimien vaihto.",
        icon: RefreshCw,
        includes: [
          "Kytkimen vaihto",
          "Painelaakerin tarkastus tai vaihto",
          "Tarvittaessa vauhtipyörän kunnon arviointi",
          "Voimansiirron toiminnan tarkistus",
        ],
      },
    ],
  },
  {
    category: "Erikoistyöt",
    description: "Erikoisosaamista vaativat työt ja mittaukset.",
    icon: Activity,
    color: "from-emerald-600 to-green-600",
    items: [
      {
        title: "Päästömittaus Bensiini",
        description: "Bensiinimoottoristen autojen päästömittaus.",
        icon: Wind,
        includes: [
          "Bensiiniautojen päästömittaus",
          "Mittaus katsastusta varten",
          "Tyhjäkäynnin ja kierrosluvun mukaiset mittaukset",
          "Tulosten läpikäynti asiakkaan kanssa",
        ],
      },
      {
        title: "Ilmastoinnin täyttöhuollot",
        description: "Auton ilmastointijärjestelmän täyttöhuolto.",
        icon: Thermometer,
        includes: [
          "Kylmäaineen talteenotto ja täyttö",
          "Järjestelmän alipaineistus",
          "Ilmastointilaitteen vianhaku ja korjaus",
          "Täyttöhuolto Tukes-luvan mukaisesti",
        ],
      },
      {
        title: "Ohjauskulmien mittaus ja nelipyöräsuuntaus",
        description: "Ohjauskulmien oikeat arvot vaikuttavat voimakkaasti auton ajettavuuteen ja renkaiden tasaiseen kulumiseen.",
        price: "alk. 89 € / h sis. 1 h työtä",
        icon: Compass,
        includes: [
          "Ohjauskulmien mittaus",
          "Nelipyöräsuuntaus tarvittaessa",
          "Ajettavuuden parantaminen",
          "Renkaiden tasaisen kulumisen tukeminen",
        ],
      },
      {
        title: "ABS- ja ajonhallintajärjestelmien vianhaku ja korjaus",
        description: "Vianhaku ja korjaus ABS-jarrujärjestelmistä sekä ajonvakautusjärjestelmästä.",
        icon: Activity,
        includes: [
          "ABS- ja ajonvakautusjärjestelmän vikakoodien luku",
          "Anturi- ja johtovikojen paikannus",
          "Järjestelmän toiminnan testaus",
          "Tarvittavat korjaukset ja osien vaihdot",
        ],
      },
      {
        title: "Automaattivaihteistojen öljynvaihtohuollot",
        description: "Automaattivaihteistojen öljynvaihdot ja vianhaku.",
        icon: Droplets,
        includes: [
          "Öljynvaihto sekä vianhaku",
          "Huollamme monimutkaisemmatkin vaihteistot",
          "Öljymäärän tarkastus",
        ],
      },
    ],
  },
  {
    category: "Muut palvelut",
    description: "Lisäksi saat meiltä useita autoilun lisäpalveluita asennuksista rengasmyyntiin.",
    icon: ShoppingBag,
    color: "from-blue-600 to-indigo-600",
    items: [
      {
        title: "Renkaiden vaihto ja tasapainotus",
        description: "Renkaiden vaihto vanteille sekä koneellinen tasapainotus.",
        icon: CircleDot,
        includes: [
          "Renkaiden asennus vanteille",
          "Koneellinen tasapainotus",
          "Kausivaihdot",
          "Rengaspaineiden tarkastus",
        ],
      },
      {
        title: "Katsastuttamispalvelut",
        description: "Katsastuskelpoisuuden tarkistus ja katsastuksessa käyttö puolestasi.",
        icon: ClipboardCheck,
        includes: [
          "Katsastuksen valmistelu",
          "Katsastus puolestasi",
          "Mahdollisten puutteiden läpikäynti ja korjaus",
        ],
      },
      {
        title: "Moottorin sisähuuhtelut",
        description: "Moottorin kemialliset huuhtelut.",
        icon: Wind,
        includes: [
          "Kemiallinen moottorin sisähuuhtelu",
          "Soveltuvuus arvioidaan tapauskohtaisesti",
        ],
      },
      {
        title: "Sähkökäyttöiset lisälämmittimet",
        description: "Sähkökäyttöisten Defa- tai Calix-moottorinlämmittimien asennus.",
        icon: Plug,
        includes: [
          "Defa- ja Calix-järjestelmien asennus",
          "Moottorinlämmittimen asennus",
          "Tarvittaessa sisätilanlämmittimen kytkennät",
          "Toiminnan tarkistus asennuksen jälkeen",
        ],
      },
      {
        title: "Opetuspolkimien asennukset",
        description: "Opetusluvalla ajettavan ajokortin vaatima asennuspolkimien asentaminen.",
        icon: Footprints,
        includes: [
          "Opetuspolkimien asennus opetuslupaa varten",
          "Asennus vaatimusten mukaisesti",
          "Polkimien toiminnan tarkistus",
        ],
      },
      {
        title: "Vetokoukkujen myynti ja asennukset",
        description: "Vetokoukun ja sähkösarjojen myynti sekä asennus.",
        icon: LinkIcon,
        includes: [
          "Vetokoukun myynti automallin mukaan",
          "Sähkösarjan asennus",
          "Vetokoukun mekaaninen asennus",
          "Toiminnan tarkistus luovutuksen yhteydessä",
        ],
      },
      {
        title: "Renkaiden myynti",
        description: "Renkaiden myynti kuuluu meille myöskin. Myymme pääsääntöisesti Bridgestone-, Kumho- ja Toyo-renkaita.",
        icon: ShoppingBag,
        includes: [
          "Kesä- ja talvirenkaat",
          "Bridgestone, Kumho ja Toyo",
          "Auton käyttöön sopiva rengassuositus",
          "Asennus ja tasapainotus saman käynnin yhteydessä",
        ],
      },
    ],
  },
]

export default function PalvelutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Palvelumme</h1>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Kattavat autohuoltopalvelut ammattitaidolla. Kaikelle työllemme 2 vuoden takuu.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <Card
                    key={serviceIndex}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-gray-800 leading-tight mb-1">
                            {service.title}
                          </CardTitle>
                          {service.price && (
                            <span className="inline-block text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                              {service.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">Mitä palvelu sisältää:</p>
                        <ul className="space-y-1.5">
                          {service.includes.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} mt-1.5 flex-shrink-0`}></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
