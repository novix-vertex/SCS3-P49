import { useSelector } from "react-redux";
import { Card } from "@/components/Card";

const ComingSoonPage = () => {
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const dark = mode === "dark";

  return (
    <div
      className={`min-h-[70vh] flex items-center justify-center px-4 py-12 ${dark ? "text-white" : "text-gray-900"
        }`}
    >
      <div className="w-full max-w-2xl">
        <Card
          variant={dark ? "dark" : "light"}
          size="lg"
          hoverAnimation="none"
          className="relative text-center"
        >
          {/* Decorative background */}
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl ${dark ? "bg-gray-700/10" : "bg-gray-200/40"
              }`}
          />

          <div
            className={`pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl ${dark ? "bg-gray-700/10" : "bg-gray-200/40"
              }`}
          />

          <div className="relative">
            {/* Icon */}
            <div
              className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border shadow-sm ${dark
                  ? "border-gray-700 bg-gray-900 text-gray-300"
                  : "border-gray-200 bg-gray-100 text-gray-600"
                }`}
            >
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
            <div className="mb-4">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${dark
                    ? "border-gray-700 bg-gray-900 text-gray-400"
                    : "border-gray-200 bg-gray-100 text-gray-700"
                  }`}
              >
                Under Development
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-gray-900"
                }`}
            >
              Coming Soon
            </h1>

            {/* Description */}
            <p
              className={`mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg ${dark ? "text-gray-400" : "text-gray-500"
                }`}
            >
              We're currently working on this section to make it better,
              more flexible, and ready for production. Documentation and
              examples will be available soon.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoonPage;