export function ValuesSection() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Values</h2>
          <p className="text-lg text-muted-foreground">The principles that guide my work and life</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-foreground">Curiosity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Always asking questions and seeking to understand the &apos;why&apos; behind every problem and solution.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-accent rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-foreground">Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building solutions that make a real difference in people&apos;s lives and contribute to positive change.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-foreground">Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Believing that the best solutions come from diverse perspectives working together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
