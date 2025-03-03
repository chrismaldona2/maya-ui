import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurredCircleProps {
  className: string;
  style?: CSSProperties;
}

const BlurredCircle = ({ className, style }: BlurredCircleProps) => {
  return (
    <div
      className={cn(
        "-z-20 absolute animate-rotate origin-[70%_50%] rounded-full blur-[75px]",
        className
      )}
      style={style}
    />
  );
};

export default BlurredCircle;
