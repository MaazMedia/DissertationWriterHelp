export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with the{" "}
            <span className="font-semibold text-blue-600">
              Dissertation Writer Help
            </span>{" "}
            team.
          </p>
        </header>

        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Email */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Email</h2>
            <p className="text-lg text-gray-600">
              Reach us at:{" "}
              <a
                href="mailto:assignmentswriteruk01@gmail.com"
                className="text-blue-600"
              >
                assignmentswriteruk01@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Phone</h2>
            <p className="text-lg text-gray-600">
              Call us at:{" "}
              <a href="tel:+447543082041" className="text-blue-600">
                +44 754 3082041
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              WhatsApp
            </h2>
            <p className="text-lg text-gray-600">
              Chat with us on WhatsApp:{" "}
              <a
                href="https://wa.me/+447543082041"
                target="_blank"
                className="text-blue-600"
              >
                +44 754 3082041
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring focus:ring-blue-600"
              rows={6}
            />
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
