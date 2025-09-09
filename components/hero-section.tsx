import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f7e1d7 0%, #dedbd2 50%, #b0c4b1 100%)" }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: "#edafb8" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl"
          style={{ backgroundColor: "#4a5759" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-base md:text-lg font-medium" style={{ color: "#4a5759" }}>
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight" style={{ color: "#4a5759" }}>
              Felice Chandra
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#4a5759" }}>
            I design and make apps and stuff
          </p>

          <p
            className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#4a5759", opacity: 0.8 }}
          >
            I like to mix tech and product, I love designing and marketing as well. My dream job is to be a product manager.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto"
              style={{ backgroundColor: "#4a5759", color: "#f7e1d7" }}
            >
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent"
              style={{
                borderColor: "#4a5759",
                color: "#4a5759",
                backgroundColor: "transparent",
              }}
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
