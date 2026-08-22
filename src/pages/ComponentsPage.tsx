import { Link } from "react-router";
import { useSelector } from "react-redux";

const components = [
  {
    name: "Button",
    description: "Actions, links, and interactive controls.",
    status: "Available",
  },
  {
    name: "Card",
    description: "Flexible containers for grouping related content.",
    status: "Available",
  },
  {
    name: "Modal",
    description: "Dialogs and focused interactions.",
    status: "Available",
  },
  {
    name: "Input",
    description: "Form controls for collecting user input.",
    status: "Available",
  },
  {
    name: "Navbar",
    description: "Navigation and header layouts.",
    status: "In development",
  },
  {
    name: "Tooltip",
    description: "Contextual information displayed on interaction.",
    status: "Available",
  },
  {
    name: "Carousel",
    description: "Scrollable content and media presentations.",
    status: "In development",
  },
  {
    name: "Layout",
    description: "Structural components for page composition.",
    status: "In development",
  },
];

const ComponentsPage = () => {
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const dark = mode === "dark";

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <section
        className={`border-b pb-10 ${
          dark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <p
          className={`text-sm font-medium ${
            dark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          EaseUI / Components
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Components
        </h1>

        <p
          className={`mt-4 max-w-2xl text-base leading-7 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          A collection of reusable React components built for everyday
          interfaces. Explore the components, view examples, and learn how
          to use them in your projects.
        </p>
      </section>

      {/* Quick intro */}
      <section
        className={`border-b py-8 ${
          dark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold">
              Browse the library
            </h2>

            <p
              className={`mt-1 text-sm ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Select a component to view its documentation and examples.
            </p>
          </div>

          <div
            className={`w-fit rounded-md px-3 py-2 font-mono text-xs ${
              dark
                ? "bg-gray-900 text-gray-400"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            @/components
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-10">
        <div
          className={`grid border-l border-t sm:grid-cols-2 ${
            dark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          {components.map((component, index) => {
            const available = component.status === "Available";

            return (
              <Link
                key={component.name}
                to={`/components/${component.name.toLowerCase()}`}
                className={`group border-b border-r p-6 transition-colors ${
                  dark
                    ? "border-gray-800 hover:bg-gray-900"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-xs font-medium ${
                      dark ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`text-[11px] font-medium ${
                      available
                        ? "text-green-500"
                        : "text-amber-500"
                    }`}
                  >
                    {component.status}
                  </span>
                </div>

                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-semibold">
                      {component.name}
                    </h3>

                    <p
                      className={`mt-2 max-w-sm text-sm leading-6 ${
                        dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {component.description}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 text-lg transition-transform duration-200 group-hover:translate-x-1 ${
                      dark
                        ? "text-gray-600 group-hover:text-white"
                        : "text-gray-300 group-hover:text-gray-900"
                    }`}
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <section
        className={`border-t py-8 ${
          dark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p
            className={`text-sm ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            More components are being added as EaseUI evolves.
          </p>

          <p
            className={`text-xs ${
              dark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {components.length} components
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComponentsPage;