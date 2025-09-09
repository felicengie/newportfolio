// app/contact/page.tsx

import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero section inspired by "Let's create something great" reference */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black text-foreground">
              Let&apos;s create something <span className="text-primary">great</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I&apos;m always excited to discuss opportunities or simply connect with fellow
              tech enthusiasts. Drop me a line!
            </p>
          </div>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
