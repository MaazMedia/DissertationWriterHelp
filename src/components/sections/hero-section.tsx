import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-16 w-full md:mt-48"
    >
      <div className="container flex flex-col items-center gap-6 text-center">
        <h1 className="animate-fade-up font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <Balancer>
            Elevate Your Academic Writing with{" "}
            <h1 className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text font-extrabold text-transparent">
              Dissertation Writer Help
            </h1>
          </Balancer>
        </h1>

        <h3 className="max-w-2xl animate-fade-up text-muted-foreground sm:text-xl sm:leading-8">
          <h3>
            Your comprehensive support system for dissertation success. Expert
            guidance, tailored resources, and personalized assistance to help
            you achieve your academic goals.
          </h3>
        </h3>

        <div className="z-10 flex animate-fade-up flex-col justify-center gap-4">
          <Link
            href="https://wa.me/+447543082041"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            Contact Us on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
