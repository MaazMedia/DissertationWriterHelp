"use client"

import { useEffect, useRef } from "react"
import Balancer from "react-wrap-balancer"

import { testimonials } from "@/data/testimonials"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TestimonialsSection(): JSX.Element {
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
      id="testimonials-section"
      aria-label="testimonials section"
      className="w-full overflow-hidden"
    >
      <div className="container max-w-6xl gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Join a Growing <br /> Team of{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text text-transparent">
                Happy Users
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>See what our customers are saying about us.</Balancer>
          </h3>
        </div>

        {/* Horizontal Auto-Scrolling Section with Scaling Effect */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index} // Using index here for duplicate items in infinite scroll
              className="h-fit min-w-[500px] transform bg-gradient-to-r from-pink-600/10 to-purple-400/10 transition-all transition-transform duration-1000 ease-out hover:opacity-70 md:hover:-translate-y-2"
              style={{
                animation: "scaleEffect 10s infinite linear",
                animationDelay: `${index * 1.5}s`,
              }}
            >
              <CardHeader>
                <CardTitle className="font-urbanist text-lg font-semibold tracking-wider">
                  <Balancer>{testimonial.title}</Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent className="leading-6 text-muted-foreground md:text-sm lg:text-base">
                <blockquote>
                  <Balancer>&quot;{testimonial.body}&quot;</Balancer>
                </blockquote>
              </CardContent>
              <CardFooter className="gap-3">
                <Avatar>
                  <AvatarFallback className="text-xs capitalize">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-base font-semibold tracking-wide">
                    <Balancer>{testimonial.name}</Balancer>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <Balancer>{testimonial.role}</Balancer>
                  </p>
                </div>
              </CardFooter>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
