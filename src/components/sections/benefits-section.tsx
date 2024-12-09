"use client"

import { useEffect, useRef } from "react"
import Balancer from "react-wrap-balancer"

// Sample JSON data for the cards (could be moved to an external file or imported)
const cardData = [
  {
    id: 1,
    title: "Save Time and Focus on Your Research",
    description:
      "Our dissertation writing help in the UK allows you to focus on content and research while we streamline your writing process, organize ideas, and ensure high-quality work.",
    statTitle: "200+ Successful Dissertation Projects",
    statValue: "95% Client Satisfaction",
    statSubtitle: "Across the UK",
  },
  {
    id: 2,
    title: "Comprehensive Help at Every Stage",
    description:
      "From topic selection to final revisions, our expert dissertation writers in the UK guide you through each step of the process to help you achieve a top-quality dissertation.",
    statTitle: "Guidance at Every Step",
    statValue: "100% Success Rate",
    statSubtitle: "For Every Dissertation",
  },
  {
    id: 3,
    title: "Maintain High Academic Standards",
    description:
      "We ensure that your dissertation meets high academic standards by reviewing and providing feedback on every section to help you avoid mistakes that affect your grades.",
    statTitle: "Expert Review",
    statValue: "100% Client Satisfaction",
    statSubtitle: "Across the UK",
  },
  {
    id: 4,
    title: "Customizable and Always Available Help",
    description:
      "Our flexible dissertation writing help fits your schedule and needs, with a dedicated team available to assist you at any stage of your dissertation journey.",
    statTitle: "24/7 Availability",
    statValue: "100% Client Satisfaction",
    statSubtitle: "Customizable to Your Needs",
  },
]

export function BenefitsSection(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 2 // Increase speed by increasing this value
    let scrollAmount = 0

    const scrollLoop = () => {
      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount

      // Reset scroll when reaching the end for a smooth infinite loop
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }

      requestAnimationFrame(scrollLoop)
    }

    scrollLoop()
  }, [])

  return (
    <section
      id="benefits-section"
      aria-label="benefits section"
      className="w-full overflow-hidden py-16"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Why{" "}
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text font-extrabold text-transparent">
                Choose Dissertation Writer Help in the UK?
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Get expert dissertation writing assistance and support from
              experienced UK-based writers who can help you complete your
              dissertation with excellence.
            </Balancer>
          </h3>
        </div>

        {/* Horizontal Auto-Scrolling Section */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap"
        >
          {[...cardData, ...cardData].map((card, index) => (
            <div
              key={index} // Using index here for duplicate items in infinite scroll
              className="h-fit min-w-[500px] transform bg-gradient-to-br from-blue-600/10 to-indigo-400/10 transition-all duration-1000 ease-out hover:opacity-70 md:hover:-translate-y-2"
              style={{
                animation: "scaleEffect 10s infinite linear", // Scrolling animation
                animationDelay: `${index * 1.5}s`, // Delay to create staggered effect
              }}
            >
              <div className="p-6">
                <h4 className="font-urbanist text-xl font-semibold tracking-wide">
                  <Balancer>{card.title}</Balancer>
                </h4>
                <p className="text-base text-muted-foreground">
                  <Balancer>{card.description}</Balancer>
                </p>
                <div className="mt-4">
                  <p className="text-lg font-bold text-blue-800">
                    {card.statTitle}
                  </p>
                  <p className="text-xs text-indigo-600">{card.statValue}</p>
                  <p className="text-xs text-muted-foreground">
                    {card.statSubtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
