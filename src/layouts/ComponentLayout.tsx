import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";
import { useSelector } from "react-redux";

type Props = {};

const ComponentLayout = ({ }: Props) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  console.log("this is theme->", mode);

  const components = [
    "Button",
    "Card",
    "Modal",
    "Input",
    "Navbar",
    "Carousel",
    "Tooltip",
    "Layout",
  ];

  return (
    <div
      className={`flex min-h-screen ${mode === "dark"
        ? "bg-black text-white"
        : "bg-white text-gray-900"
        }`}
    >
      <aside
        className={`
          w-64 p-6 flex flex-col
          border-r
          fixed md:static top-0 left-0 h-full z-20
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${mode === "dark"
            ? "border-gray-800 bg-black"
            : "border-gray-200 bg-white"
          }
        `}
      >
        <h2 className="text-md font-bold mb-6">Components</h2>
        <ul className="flex flex-col gap-2">
          {components.map((item) => (
            <li
              onClick={() => navigate(item.toLowerCase())}
              key={item}
              className={`cursor-pointer ${mode === "dark" ? "hover:text-white" : "hover:text-black"} text-md hover:translate-x-1 transition-all duration-200 ease-in-out ${location.pathname === `/components/${item.toLowerCase()}`
                ? `${mode === "dark" ? "text-white" : "text-black"}`
                : "text-gray-400"
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 overflow-auto min-h-screen p-6">
        <button
          className={`md:hidden mb-4 ${mode === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ComponentLayout;
