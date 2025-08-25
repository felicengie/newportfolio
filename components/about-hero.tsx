"use client"

import Image from "next/image"

export function AboutHero() {
  const handleCoffeeChat = () => {
    const subject = encodeURIComponent("Coffee Chat Request")
    const body = encodeURIComponent(
      "Hi Felice,\n\nI'd love to schedule a coffee chat with you to discuss opportunities and learn more about your work.\n\nBest regards,",
    )
    window.open(`mailto:chandrafelice12@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <section className="min-h-screen relative" style={{ backgroundColor: "#1e1e1e" }}>
      {/* Main content container */}
      <div className="relative h-screen flex items-center justify-between px-8 lg:px-16 pt-20">
        {/* Center - Large ABOUT ME text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="text-[84px] md:text-[132px] lg:text-[180px] xl:text-[212px] font-black leading-none select-none opacity-90"
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              wordSpacing: "100px",
              letterSpacing: "-3px",
              transform: "translateY(-30px)",
            }}
          >
            ABOUT ME
          </h1>
        </div>

        {/* Main portrait - slightly larger and sitting between the T and M */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-[88px] -translate-y-[306px] z-30">
          <Image
            src="/images/me.png"
            alt="Felice Chandra"
            width={525}
            height={785}
            className="object-cover"
            priority
          />
        </div>

        {/* Coffee group under the O in ABOUT */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-[294px] translate-y-[7rem] z-20">
          <div className="relative flex flex-col items-center">
            {/* Speech bubble above the cat */}
            <div
              onClick={handleCoffeeChat}
              className="relative bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 cursor-pointer transition-all duration-200 hover:scale-105 shadow-lg mb-2"
              style={{
                borderRadius: "24px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              <span>schedule a coffee chat</span>
              {/* Tail pointing down toward the cat */}
              <div
                className="absolute bottom-0 left-6 w-0 h-0 translate-y-full"
                style={{
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "12px solid #3b82f6",
                }}
              />
            </div>

            {/* Cat image */}
            <button
              type="button"
              onClick={handleCoffeeChat}
              className="focus:outline-none"
              aria-label="Schedule a coffee chat"
              style={{ transform: "translate(-70px, -40px)" }}
            >
              <Image
                src="/images/kittycoffee.png"
                alt="Coffee chat kitten"
                width={200}
                height={200}
                className="object-contain cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-80px] left-0 right-0 w-full z-[999] pointer-events-none">
        <Image
          src="/images/section-seperator.png"
          alt=""
          width={1440}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}
