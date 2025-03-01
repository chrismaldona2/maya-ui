import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurredCircleProps {
  className: string;
  style?: CSSProperties;
}

const BlurredCircle = ({ className, style }: BlurredCircleProps) => {
  const classes = cn(
    "-z-20 absolute animate-float rounded-full blur-[75px]",
    className
  );

  return <div className={classes} style={style} />;
};

export default BlurredCircle;
