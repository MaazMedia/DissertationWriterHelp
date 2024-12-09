export default function FAQPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our dissertation writing
            services.
          </p>
        </header>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* FAQ Item 1 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              What services does Dissertation Writer Help offer?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We provide comprehensive dissertation writing assistance,
              including topic selection, research organization, citation
              management, editing, proofreading, and final formatting to meet
              academic standards.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              How can I ensure the quality of the dissertation writing service?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Our team consists of experienced academic writers with advanced
              degrees. We adhere to strict quality control measures, including
              plagiarism checks and thorough editing, to ensure high-quality,
              original content.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Are your dissertation writing services confidential?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Yes, we prioritize your privacy. All interactions and documents
              are handled with strict confidentiality, ensuring your personal
              information and academic work remain secure.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              How do I get started with your dissertation writing service?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              To begin, contact us through our website with your dissertation
              requirements. Our team will review your needs and connect you with
              a suitable expert to assist you throughout the process.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Can I communicate directly with the dissertation writer?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Absolutely. We encourage direct communication between clients and
              writers to ensure clarity, address concerns promptly, and tailor
              the dissertation to your specific requirements.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              What is the turnaround time for your dissertation writing
              services?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Turnaround times vary based on the complexity and length of the
              dissertation. We work closely with you to establish a timeline
              that meets your deadlines while ensuring high-quality work.
            </p>
          </div>

          {/* FAQ Item 7 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              How do you handle revisions or edits to the dissertation?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We offer free revisions within a specified period after the final
              delivery to ensure your satisfaction. Our goal is to provide a
              dissertation that meets your expectations and academic standards.
            </p>
          </div>

          {/* FAQ Item 8 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              What are the costs associated with your dissertation writing
              services?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Our pricing is competitive and depends on factors such as the
              length, complexity, and urgency of the dissertation. Contact us
              for a personalized quote tailored to your specific needs.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Have more questions? Don’t hesitate to reach out to us. Our team is
            here to help!
          </p>
          <a
            href="https://wa.me/+447543082041"
            className="mt-4 inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
