import Link from "next/link"

// Updated to use dissertation-related resources
import { resourceStack } from "@/data/resource-stack" // Change this from techStack to resourceStack

import { Icons } from "@/components/icons"

export function TechSection(): JSX.Element {
  return (
    <section
      id="tech-section"
      aria-label="resource section"
      className="hidden w-full bg-background py-8 sm:grid"
    >
      <div
        className="container flex w-full max-w-4xl animate-fade-up flex-wrap place-items-center items-center justify-center gap-6 opacity-0 sm:gap-[38px] md:gap-[36px] lg:gap-x-12"
        style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
      >
        {resourceStack.map((resource) => {
          const Icon = Icons[resource.icon as keyof typeof Icons]

          return (
            <Link
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 ease-out hover:opacity-70"
            >
              <Icon />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
