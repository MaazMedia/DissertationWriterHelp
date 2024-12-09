export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn how{" "}
            <span className="font-semibold text-blue-600">
              Dissertation Writer Help
            </span>{" "}
            handles your personal information.
          </p>
        </header>

        {/* Content Section */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Data Collection
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            We collect personal information such as your name, email address,
            and payment details to provide our services effectively.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Data Usage
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Your information is used solely for service delivery, customer
            support, and improving our offerings. We do not sell or share your
            data with third parties.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Data Security
          </h2>
          <p className="text-lg text-gray-600">
            We use industry-standard security measures to protect your data.
            However, no system is entirely secure, and we encourage safe
            browsing practices.
          </p>
        </div>
      </div>
    </div>
  )
}
