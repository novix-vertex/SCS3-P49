import React, { forwardRef, useState, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const tooltipVariants = cva(
    `absolute z-50 px-3 py-1.5 text-xs font-medium rounded-md shadow-md pointer-events-none transition-all`,
    {
        variants: {
            variant: {
                dark: "bg-slate-900 text-white",
                light: "bg-white text-gray-900 border border-gray-200",
                primary: "bg-indigo-600 text-white",
                glass: "backdrop-blur-md bg-white/10 text-black border border-white/20",

            },
            position: {
                top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
                bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
                left: "right-full mr-2 top-1/2 -translate-y-1/2",
                right: "left-full ml-2 top-1/2 -translate-y-1/2",
            }
        },
        defaultVariants: {
            variant: "dark",
            position: "top",
        },
    }
);

interface TooltipProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof tooltipVariants> {
 }

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    (
        {
            className,
            variant,
            position,
            content,
            children,
            ...props
        },
        ref
    ) => {
        const [isVisible, setIsVisible] = useState(false);
        const tooltipRef = useRef<HTMLDivElement | null>(null);

        const handleMouseEnter = () => {
            setIsVisible(true);
            if (tooltipRef.current) {
                gsap.fromTo(
                    tooltipRef.current,
                    { opacity: 0, scale: 0.95, y: position === "top" ? 5 : -5 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.15, ease: "power2.out" }
                );
            }
        };

        const handleMouseLeave = () => {
            if (tooltipRef.current) {
                gsap.to(tooltipRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.1,
                    onComplete: () => setIsVisible(false),
                });
            } else {
                setIsVisible(false);
            }
        };

        return (
            <div
                className="relative inline-flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}

                {isVisible && (
                    <div
                        ref={(node) => {
                            tooltipRef.current = node;
                            if (typeof ref === "function") ref(node);
                            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
                        }}
                        role="tooltip"
                        className={cn(tooltipVariants({ variant, position }), className)}
                        {...props}
                    >
                        {content}
                    </div>
                )}
            </div>
        );
    }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };