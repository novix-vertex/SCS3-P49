import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `import ComponentDemo from "../ComponentsDemo";
      <Navbar />
  `;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-gray-600 text-lg">
          Navbar component for header with standard styling.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Normal</h3>
          <ComponentDemo code={usageCode}>
            <Navbar />
          </ComponentDemo>
        </div>

      </section>

    </div>
  );
};

export default NavbarPage;
