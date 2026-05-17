"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        alert("Viestin lähetys epäonnistui. Yritä uudelleen.")
      }
    } catch {
      alert("Viestin lähetys epäonnistui. Yritä uudelleen.")
    } finally {
      setIsSubmitting(false)
    }

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-28 border-b border-border/50">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
        <div className="container mx-auto px-4">
          <p className="text-primary text-xs tracking-widest uppercase mb-4 font-display">Leon Korjaamo</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight uppercase">
            Ota yhteyttä
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed font-light">
            Varaa aika, kysy tarjous tai ota yhteyttä — vastaamme nopeasti.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl">

          {/* Yhteystiedot */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide mb-8">
              Yhteystiedot
            </h2>

            <div className="flex items-start gap-5 py-5 border-b border-border/50">
              <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Osoite</p>
                <p className="text-foreground">Esimerkkikatu 1, 00100 Helsinki</p>
              </div>
            </div>

            <div className="flex items-start gap-5 py-5 border-b border-border/50">
              <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Puhelin</p>
                <p className="text-foreground">+358 40 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-5 py-5 border-b border-border/50">
              <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Sähköposti</p>
                <p className="text-foreground">info@leonkorjaamo.fi</p>
              </div>
            </div>

            <div className="flex items-start gap-5 py-5 border-b border-border/50">
              <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Aukioloajat</p>
                <p className="text-foreground">Ma–Pe 8:00–17:00</p>
                <p className="text-muted-foreground text-sm">La–Su suljettu</p>
              </div>
            </div>
          </div>

          {/* Lomake */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide mb-8">
              Lähetä viesti
            </h2>

            {submitted ? (
              <div className="border border-primary/30 bg-card p-12 text-center">
                <div className="w-12 h-12 border border-primary flex items-center justify-center mx-auto mb-6">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground uppercase mb-2">Viesti lähetetty</h3>
                <p className="text-muted-foreground text-sm">Olemme sinuun yhteydessä pian.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Nimi *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Sähköposti *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Puhelinnumero</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Aihe *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Viesti *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-border focus:border-primary rounded-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-black font-semibold px-10 py-6 text-xs tracking-widest uppercase rounded-none w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Lähetetään...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Lähetä viesti
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
