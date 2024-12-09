export const metadata = {
  metadataBase: "http://dissertationwriterhelp.co.uk/about",
  title: "Dissertation Writer Help - Academic Writing Support",
  description:
    "Dissertation Writer Help provides expert support for dissertation writing. Get guidance from experienced professionals on topic selection, research, editing, and formatting.",
  keywords:
    "dissertation writer help, dissertation writing support, academic writing help, dissertation assistance, research writing help, dissertation editing, dissertation formatting",
}

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-5xl font-bold">
            About Dissertation Writer Help
          </h1>
          <p className="text-xl">
            Your trusted partner in academic excellence, offering comprehensive
            dissertation writer help for students worldwide.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-semibold">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At{" "}
            <span className="font-semibold text-blue-600">
              Dissertation Writer Help
            </span>
            , we are committed to helping students succeed in their dissertation
            writing. As a UK-based service, we specialize in guiding students
            through every step of the dissertation process. Our expert team
            provides personalized support to ensure that students achieve their
            academic goals with confidence and precision.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-4xl font-semibold">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Empowering Dissertation Success
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Our mission is to provide high-quality dissertation writer help
                that makes a real difference in students' academic journeys. We
                support every stage of the dissertation process, from selecting
                a topic to final submission, ensuring that students excel.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                A Student-Centric Approach
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                We understand the unique challenges students face. Our
                personalized dissertation writing services are tailored to meet
                individual needs, ensuring each dissertation meets academic
                standards and personal preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-4xl font-semibold">
            What We Offer
          </h2>
          <ul className="space-y-4">
            <li className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">Topic Selection:</span>{" "}
              Expert guidance to help you choose a relevant and impactful
              dissertation topic.
            </li>
            <li className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">
                Research Organization:
              </span>{" "}
              Structured templates to help streamline your research process and
              organize ideas effectively.
            </li>
            <li className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">
                Citation Management:
              </span>{" "}
              Professional support for citation styles such as APA, MLA, and
              Chicago.
            </li>
            <li className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">
                Editing & Proofreading:
              </span>{" "}
              Detailed editing and feedback to enhance clarity, coherence, and
              academic style.
            </li>
            <li className="text-lg text-gray-700">
              <span className="font-bold text-blue-600">
                Formatting Assistance:
              </span>{" "}
              Ensuring your dissertation meets all required academic formatting
              standards.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-semibold">
            Why Choose Dissertation Writer Help?
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            We go above and beyond to ensure your dissertation journey is smooth
            and successful. Here's why students trust us:
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-left">
              <h3 className="mb-4 text-2xl font-bold">
                Experienced Professionals
              </h3>
              <p className="text-lg text-gray-700">
                Our team consists of academic experts with years of experience
                in dissertation writing and editing.
              </p>
            </div>
            <div className="text-left">
              <h3 className="mb-4 text-2xl font-bold">Personalized Support</h3>
              <p className="text-lg text-gray-700">
                We tailor our dissertation writing services to meet your
                specific needs, providing one-on-one assistance throughout the
                process.
              </p>
            </div>
            <div className="text-left">
              <h3 className="mb-4 text-2xl font-bold">Affordable Solutions</h3>
              <p className="text-lg text-gray-700">
                Our competitive pricing ensures that our dissertation writing
                help is accessible to students from all backgrounds.
              </p>
            </div>
            <div className="text-left">
              <h3 className="mb-4 text-2xl font-bold">
                Commitment to Excellence
              </h3>
              <p className="text-lg text-gray-700">
                Our goal is to help you produce a dissertation that exceeds
                academic standards and showcases your hard work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Succeed?</h2>
          <p className="mb-8 text-lg">
            Join countless students who have trusted{" "}
            <span className="font-semibold">Dissertation Writer Help</span> to
            guide them to academic success. Let us take the stress out of your
            dissertation journey.
          </p>
          <a
            href="https://wa.me/+447543082041"
            className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg hover:bg-gray-100"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
