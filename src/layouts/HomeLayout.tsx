import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Navbar from "../components/Personal/Navbar";

type Props = {};

const HomeLayout = ({}: Props) => {
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const dark = mode === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col ${
        dark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar />

      <main className="grow p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;