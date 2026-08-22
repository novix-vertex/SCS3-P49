import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Button } from "@/components/Button";

type Props = {};

const HomePage = ({ }: Props) => {
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const dark = mode === "dark";

  return (
    <main className={dark ? "text-white" : "text-gray-900"}>
      {/* Intro */}
      <section
        className={`border-b ${dark ? "border-gray-800" : "border-gray-200"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left */}
            <div>
              <p
                className={`mb-5 text-sm font-medium ${dark ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                EaseUI / React Component Library
              </p>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                UI components,
                <br />
                <span
                  className={dark ? "text-gray-500" : "text-gray-400"}
                >
                  without the busywork.
                </span>
              </h1>

              <p
                className={`mt-6 max-w-xl text-lg leading-8 ${dark ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                A growing collection of reusable React components built with
                Tailwind CSS. Copy what you need, customize it, and keep
                building.
              </p>

              <div className="mt-8">
                <Button asChild variant="dark" size="sm">
                  <Link to="/components">Browse components</Link>
                </Button>
              </div>
            </div>

            {/* Component Preview */}
            <div
              className={`rounded-2xl border p-5 ${dark
                  ? "border-gray-800 bg-black"
                  : "border-gray-200 bg-gray-50"
                }`}
            >
              {/* Editor header */}
              <div
                className={`mb-4 flex items-center gap-2 border-b pb-4 ${dark ? "border-gray-800" : "border-gray-200"
                  }`}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span
                  className={`ml-2 text-xs ${dark ? "text-gray-500" : "text-gray-400"
                    }`}
                >
                  Button.tsx
                </span>
              </div>

              {/* Preview */}
              <div
                className={`rounded-xl border p-8 ${dark
                    ? "border-gray-800 bg-black"
                    : "border-gray-200 bg-white"
                  }`}
              >
                <p
                  className={`mb-6 text-sm ${dark ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  A simple component, ready to use.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="dark" size="sm">
                    Primary
                  </Button>

                  <Button variant="outline" size="sm">
                    Secondary
                  </Button>

                  <Button variant="ghost" size="sm">
                    Ghost
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p
                className={`text-sm font-medium ${dark ? "text-gray-500" : "text-gray-400"
                  }`}
              >
                01
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                What's inside
              </h2>

              <p
                className={`mt-2 ${dark ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                Start with the building blocks you need.
              </p>
            </div>

            <Link
              to="/components"
              className={`text-sm font-medium ${dark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
                }`}
            >
              View all →
            </Link>
          </div>

          <div
            className={`mt-10 grid grid-cols-2 border-l border-t sm:grid-cols-4 ${dark ? "border-gray-800" : "border-gray-200"
              }`}
          >
            {[
              "Button",
              "Card",
              "Modal",
              "Input",
              "Navbar",
              "Tooltip",
              "Carousel",
              "Layout",
            ].map((component, index) => (
              <Link
                key={component}
                to={`/components/${component.toLowerCase()}`}
                className={`group border-b border-r p-5 transition ${dark
                    ? "border-gray-800 hover:bg-gray-900"
                    : "border-gray-200 hover:bg-gray-50"
                  }`}
              >
                <span
                  className={`text-xs ${dark ? "text-gray-600" : "text-gray-400"
                    }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {component}
                  </span>

                  <span
                    className={`transition group-hover:translate-x-1 ${dark
                        ? "text-gray-600 group-hover:text-white"
                        : "text-gray-300 group-hover:text-gray-700"
                      }`}
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className={`border-t ${dark
            ? "border-gray-800 bg-gray-950"
            : "border-gray-200 bg-gray-50"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p
                className={`text-sm font-medium ${dark ? "text-gray-500" : "text-gray-400"
                  }`}
              >
                02
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                Built to be used
              </h2>
            </div>

            <p
              className={`text-sm leading-7 ${dark ? "text-gray-400" : "text-gray-600"
                }`}
            >
              EaseUI focuses on practical components rather than trying to
              provide every possible UI pattern. Each component is designed
              to be understandable and easy to adapt.
            </p>

            <p
              className={`text-sm leading-7 ${dark ? "text-gray-400" : "text-gray-600"
                }`}
            >
              The library is actively evolving. Some components are ready to
              use, while others are still under development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;