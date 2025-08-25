import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-foreground">
              My <span className="text-primary">Resume</span>
            </h1>
            {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my education, experience, and technical skills in computer science and data
              science.
            </p> */}
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Computer Science student at Stony Brook University with hands-on experience in data science and
                  analytics. Completed internships at Memorial Sloan Kettering Cancer Center and participated in Break
                  Through Tech AI program. Passionate about mixing technology with product development, design, and
                  marketing. Aspiring product manager with strong technical foundation and leadership experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="/felice_resume.pdf" download>
                      Download Resume PDF
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/contact">Get In Touch</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                      <p className="text-muted-foreground">Stony Brook University</p>
                      <p className="text-sm text-muted-foreground">January 2023 - May 2025 (Graduated)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Associate of Science in Computer Science</h3>
                      <p className="text-muted-foreground">Shoreline Community College</p>
                      <p className="text-sm text-muted-foreground">September 2020 - June 2022 (Graduated)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">Programming Languages</h4>
                      <p className="text-sm text-muted-foreground">
                        Python, Java, C, JavaScript, Swift, HTML, CSS, SQL
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Frameworks & Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        React, Node.js, Express.js, MongoDB, Tailwind CSS, Next.js, Pandas, TensorFlow, HuggingFace
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Developer Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Git, VS Code, Vim, Linux, Snowflake, Jupyter notebooks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Resume Document</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[800px] border rounded-lg overflow-hidden">
                  <iframe src="/felice_resume.pdf" className="w-full h-full" title="Felice Chandra Resume" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
