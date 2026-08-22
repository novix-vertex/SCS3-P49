import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";
import { useSelector } from "react-redux";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );


  return (
    <div className={`border ${mode==="dark"?"border-gray-700 bg-gray-700":"border-gray-200 bg-gray-200"} rounded-lg overflow-hidden shadow-sm`}>
      <div className={`flex items-center justify-between px-4 py-2 border-b ${mode==="dark"?"border-gray-900 bg-gray-900":"border-gray-200 bg-gray-50"}`}>
        <span className={`text-sm font-medium ${mode==="dark"?"text-gray-100":"text-gray-700"}`}>Preview</span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className={`flex items-center gap-1 px-3 py-1 text-sm ${mode==="dark"?"bg-gray-600 hover:bg-gray-700":"bg-gray-100 hover:bg-gray-200"} rounded transition-colors`}
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="py-20 px-4 flex items-center justify-center">{children}</div>

      {isCodeVisible && (
        <div className={`border-t ${mode==="dark"?"border-gray-700 bg-gray-700":"border-gray-200 bg-gray-200"}`} >
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
