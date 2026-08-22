const ComingSoonPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 text-center shadow-sm sm:p-12">
          {/* Decorative background */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gray-200/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gray-200/30 blur-3xl" />

          {/* Icon */}
          <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-200 bg-gray-100 text-gray-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.7 6.3a4.5 4.5 0 0 0-5.9 5.9L4.5 16.5a2.12 2.12 0 1 0 3 3l4.3-4.3a4.5 4.5 0 0 0 5.9-5.9l-2.4 2.4-2.5-.5-.5-2.5 2.4-2.4Z"
              />
            </svg>
          </div>

          {/* Badge */}
          <div className="relative mb-4">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
              Under Development
            </span>
          </div>

          {/* Heading */}
          <h1 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Coming Soon
          </h1>

          {/* Description */}
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            We're currently working on this section to make it better,
            more flexible, and ready for production. Documentation and
            examples will be available soon.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;