"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        body: JSON.stringify({ ...formData, subject: "Yhteydenotto etusivulta" }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
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
    <section id="yhteydenotto" className="py-24 bg-card scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Yhteydenotto</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase tracking-tight">
            Ota yhteyttä
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Varaa aika, kysy tarjous tai jätä viesti — vastaamme sinulle mahdollisimman pian.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="border border-primary/30 bg-background p-12 text-center">
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
                    className="bg-background border-border focus:border-primary rounded-none"
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
                    className="bg-background border-border focus:border-primary rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Puhelinnumero</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-primary rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Viesti *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary rounded-none resize-none"
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

          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-muted-foreground text-xs tracking-widest uppercase">Tai</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-10 py-4 text-xs tracking-widest uppercase transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.98.564 3.83 1.54 5.397L2 22l4.72-1.516A9.955 9.955 0 0 0 12.004 22C17.522 22 22 17.514 22 12.004 22 6.486 17.522 2 12.004 2zm0 18.166a8.14 8.14 0 0 1-4.15-1.135l-.298-.177-2.8.9.91-2.729-.194-.28a8.15 8.15 0 0 1-1.264-4.34c0-4.51 3.678-8.183 8.192-8.183 4.514 0 8.19 3.673 8.19 8.183 0 4.51-3.676 8.183-8.19 8.183z" />
            </svg>
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
