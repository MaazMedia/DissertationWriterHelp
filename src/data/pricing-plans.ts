import { type PricingPlan } from "@/types"

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Essential guidance and templates for getting started",
    features: [
      "Initial consultation",
      "Basic templates",
      "Topic selection support",
    ],
    limitations: [
      "No in-depth editing",
      "Limited to one consultation",
      "Email-only support",
    ],
    stripePriceId: "",
    prices: {
      monthly: 29,
      yearly: 299,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
  {
    id: "standard",
    name: "Standard",
    description: "Comprehensive support for drafting and structuring",
    features: [
      "Extended consultations",
      "Detailed feedback on drafts",
      "Writing style guidance",
      "Priority email support",
    ],
    limitations: ["Limited in-depth editing"],
    stripePriceId: "",
    prices: {
      monthly: 59,
      yearly: 599,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
  {
    id: "premium",
    name: "Premium",
    description: "Complete assistance for writing, editing, and submission",
    features: [
      "Unlimited consultations",
      "Full editing and proofreading",
      "Citation and formatting assistance",
      "24/7 support",
      "Personalized feedback",
    ],
    limitations: [],
    stripePriceId: "",
    prices: {
      monthly: 99,
      yearly: 999,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
]
