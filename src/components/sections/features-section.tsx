"use client"

import * as React from "react"
import { type Feature } from "@/types"
import Balancer from "react-wrap-balancer"

import { features } from "@/data/features"

import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = React.useState<Feature | null>(
    features?.[0] || null
  )

  return (
    <section
      id="features-section"
      aria-label="features section"
      className="w-full py-16"
    >
      <div className="container relative grid gap-16">
        {/* Header Section */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Discover Our <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text text-transparent">
                Wholesome Features
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Take advantage of authentication, data storage, payments, emails,
              and more—all tailored for you.
            </Balancer>
          </h3>
        </div>

        {/* Features Section */}
        <div className="grid items-center justify-center gap-2 sm:gap-0 md:grid-cols-12">
          {/* Features List */}
          <div className="flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 md:col-span-5">
            <div className="flex w-full flex-col gap-4 whitespace-nowrap sm:mx-auto md:mx-0 md:block md:gap-0 md:gap-y-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative rounded-lg p-4 text-center transition-all md:rounded-l-xl md:rounded-r-none md:p-6 md:text-start md:hover:bg-gradient-to-br md:hover:from-pink-600/20 md:hover:to-purple-400/20",
                    activeFeature === feature
                      ? "border-2 border-pink-600 md:bg-gradient-to-br md:from-pink-600/10 md:to-purple-400/10"
                      : "border border-gray-300 md:cursor-pointer md:bg-background"
                  )}
                  onClick={() => setActiveFeature(feature)}
                >
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 hidden text-sm text-muted-foreground sm:text-lg sm:leading-6 xl:block">
                    <Balancer>{feature.description}</Balancer>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Feature Details */}
          <div className="hidden md:block lg:col-span-7">
            <div className="relative flex h-[28rem] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-pink-600 to-purple-400 p-8 text-center text-white shadow-2xl md:h-[32rem] lg:h-[36rem]">
              <h3 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
                {activeFeature?.title || "Select a Feature"}
              </h3>
              <p className="mt-4 max-w-xl text-lg sm:text-xl sm:leading-8">
                {activeFeature?.description ||
                  "Click on a feature to learn more."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
