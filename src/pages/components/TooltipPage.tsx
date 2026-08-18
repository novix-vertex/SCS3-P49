import ComponentDemo from '../ComponentsDemo';
import { Tooltip } from '@/components/Tooltip';
import { Button } from '@/components';
import PropsTable from '@/components/Personal/PropsTable';


const TooltipPage = () => {
    const usageCode = `import { Button } from "@/components/Button/Button"
  
    <Tooltip content="Button1" position="top" variant="dark">
        <Button variant="primary" animation="bounceIn" hoverAnimation="jiggle" size="xl">Hover me</Button>
    </Tooltip>
    <Tooltip content="Button1" position="right" variant="light">
        <Button variant="dark" animation="bounceIn" hoverAnimation="bounce" size="lg">Hover me</Button>
    </Tooltip>`;

    const propsData = [
        {
            prop: "variant",
            type: '"dark" | "light" | "primary" | "glass"',
            default: '"dark"',
            description: "The visual style variant of the tooltip",
        },
        {
            prop: "position",
            type: '"top" | "bottom" | "right" | "left"',
            default: '"top"',
            description: "The direction of the tooltip",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-12">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
                <p className="text-gray-600 text-lg">
                    Tooltip component to display a message on hover over component.
                </p>
            </div>

            <section className="space-y-4 flex flex-col gap-10">
                <h2 className="text-2xl font-semibold">Example</h2>

                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Normal</h3>
                    <ComponentDemo code={usageCode}>
                        <div className="flex gap-4 flex-wrap">

                            <Tooltip content="Button1" position="top" variant="dark">
                                <Button variant="primary" animation="bounceIn" hoverAnimation="jiggle" size="xl">Hover me</Button>
                            </Tooltip>
                            <Tooltip content="Button1" position="right" variant="light">
                                <Button variant="dark" animation="bounceIn" hoverAnimation="bounce" size="lg">Hover me</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>
                </div>

            </section>
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">API Reference</h2>
                <PropsTable data={propsData} />
            </section>
        </div>
    )
}

export default TooltipPage;