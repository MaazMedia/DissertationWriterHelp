"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Define the shape of form data using an interface
interface FormData {
  name: string
  email: string
  phone: string
  education: string
  subject: string
  paperType: string
  citationStyle: string
  reference: string
  paperDescription: string
  extraRequirements: string
  pages: number
  paperQuality: number
  deliveryTime: string
  file: string
}

export default function OrderPage() {
  // Initialize form data with the defined interface
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    education: "Under Graduate",
    subject: "Accounting",
    paperType: "Dissertation",
    citationStyle: "MLA",
    reference: "",
    paperDescription: "",
    extraRequirements: "",
    pages: 1,
    paperQuality: 21,
    deliveryTime: "6-10 Days",
    file: "",
  })

  // Handle form data changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = Object.keys(formData)
      .map(
        (key) =>
          `${key.charAt(0).toUpperCase() + key.slice(1)}: ${formData[key as keyof FormData]}`
      )
      .join("\n")

    const encodedMessage = encodeURIComponent(message)

    // Send the message via WhatsApp link
    window.location.href = `https://wa.me/+447543082041?text=${encodedMessage}`
  }

  return (
    <main className="min-h-screen bg-white px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <motion.h2
          className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Order Now
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Map over formFields array to generate form elements */}
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "Your Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "text" },
            { label: "Education", name: "education", type: "text" },
            { label: "Academic Subject", name: "subject", type: "text" },
            { label: "Paper Type", name: "paperType", type: "text" },
            { label: "Citation Style", name: "citationStyle", type: "text" },
            { label: "Reference", name: "reference", type: "text" },
            {
              label: "Paper Description",
              name: "paperDescription",
              type: "textarea",
            },
            {
              label: "Extra Requirements",
              name: "extraRequirements",
              type: "textarea",
            },
          ].map((field, index) => (
            <motion.div
              key={field.name}
              className="col-span-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  rows={4}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </main>
  )
}
