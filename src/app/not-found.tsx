import { buttonVariants } from "@/components/button";
import PopUpImage from "@/components/popup-image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center my-6">
      <div className="flex flex-col items-center text-center -mt-4">
        <PopUpImage
          src="/images/face-with-spirals-eyes.gif"
          alt="Animated face with spiral eyes emoji"
          aria-label="Face with spiral eyes emoji"
          width={80}
          height={80}
          className="drop-shadow-lg animate-popup mb-4"
          unoptimized
        />
        <h1 className="text-5xl text-neutral-800 dark:text-neutral-300 font-bold">
          404
        </h1>
        <span className="text-base text-neutral-700 dark:text-neutral-400">
          Not found
        </span>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "filled", className: "mt-4" })
          )}
        >
          Return to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
