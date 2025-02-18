import { Button } from "@/components/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex-1 min-w-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl text-neutral-800 dark:text-neutral-300 font-bold">
          404
        </h1>
        <span className="text-base text-neutral-700 dark:text-neutral-400">
          Not found
        </span>
        <Link href="/">
          <Button>Return to home page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
