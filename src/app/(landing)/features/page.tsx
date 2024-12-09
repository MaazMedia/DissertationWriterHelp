export default function FeaturesPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800">Our Features</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the unique features that make{" "}
            <span className="font-semibold text-blue-600">
              Dissertation Writer Help
            </span>{" "}
            the best choice for your academic journey.
          </p>
        </header>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                &#128218;
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Expert Writers
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Work with a team of experienced academic writers specializing in
              various disciplines to ensure high-quality dissertations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                &#128209;
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Tailored Support
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Personalized assistance at every stage of your dissertation, from
              topic selection to final formatting.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                &#128200;
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Plagiarism-Free Guarantee
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Receive 100% original work with detailed plagiarism reports for
              complete peace of mind.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">&#9989;</span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              On-Time Delivery
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We respect your deadlines and ensure timely delivery of your
              dissertation without compromising on quality.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                &#128176;
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Affordable Pricing
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Get professional services at competitive rates, designed to suit
              the budgets of students.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-600">
                &#128274;
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Confidentiality
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Your personal and academic information is handled with the utmost
              security and privacy.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-lg text-gray-600">
            Ready to experience our exceptional services? Let’s start your
            dissertation journey today!
          </p>
          <a
            href="https://wa.me/+447543082041"
            className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  )
}
