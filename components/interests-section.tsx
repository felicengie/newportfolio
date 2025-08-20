import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const interests = [
  {
    title: "Trying New Restaurants & Cafes",
    description: "Love exploring different cuisines and discovering hidden gems.",
    image: "/images/food.jpg",
  },
  {
    title: "Traveling",
    description: "Passionate about experiencing new cultures and places around the world.",
    image: "/images/travel.JPG",
  },
  {
    title: "Snowboarding",
    description: "Enjoy hitting the slopes and the thrill of winter sports.",
    image: "/images/snowboarding.JPG",
  },
  {
    title: "Music",
    description: "Always listening to the latest R&B and pop hits.",
    image: "/images/music.PNG",
  },
  {
    title: "Cooking",
    description: "Love experimenting in the kitchen and creating delicious meals.",
    image: "/images/cooking.JPG",
  },
]

export function InterestsSection() {
  return (
    <section className="relative bg-champagne-pink z-10">

      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-40">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-outer-space">What I Love</h2>
          <p className="text-lg text-outer-space/80 max-w-2xl mx-auto">
            My interests span across food, travel, sports, music, and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Top row - 3 cards */}
          {interests.slice(0, 3).map((interest, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={interest.image || "/placeholder.svg"}
                  alt={interest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-outer-space">{interest.title}</h3>
                <p className="text-outer-space/70 text-sm leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Bottom row - 2 cards centered */}
          {interests.slice(3, 5).map((interest, index) => (
            <Card
              key={index + 3}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={interest.image || "/placeholder.svg"}
                  alt={interest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-outer-space">{interest.title}</h3>
                <p className="text-outer-space/70 text-sm leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Top transition separator (from About to What I Love) */}
      <div className="absolute -top-16 left-0 right-0 h-40 overflow-hidden z-[1000] pointer-events-none">
        <Image src="/images/section-seperator.png" alt="" fill className="object-cover object-top" />
      </div>

      {/* Bottom transition separator moved to About page to avoid clipping */}
    </section>
  )
}
