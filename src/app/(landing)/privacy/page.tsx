export default function TermsOfServicePage(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-600">
            The terms and conditions for using{" "}
            <span className="font-semibold text-blue-600">
              Dissertation Writer Help
            </span>
            .
          </p>
        </header>

        {/* Content Section */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Introduction
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            By accessing and using our services, you agree to the terms and
            conditions outlined here. These terms may be updated periodically,
            so please review them regularly.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Service Usage
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Our services are intended for academic assistance only. Clients are
            prohibited from submitting our work as their own.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Payment and Refunds
          </h2>
          <p className="text-lg text-gray-600">
            Payments are required upfront unless agreed otherwise. Refunds are
            only processed under specific circumstances, such as failure to
            deliver the promised service.
          </p>
        </div>
      </div>
    </div>
  )
}
