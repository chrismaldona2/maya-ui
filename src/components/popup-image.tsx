"use client";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const PopUpImage = (props: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoadCallback = () => setLoaded(true);

  return (
    <div className={cn("inline-block", loaded ? "animate-popup" : "opacity-0")}>
      <Image {...props} alt={props.alt} onLoadingComplete={onLoadCallback} />
    </div>
  );
};

export default PopUpImage;
