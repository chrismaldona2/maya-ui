import Link from "next/link";
import { BearSvg } from "@/components/icons";

const Logo = ({
  redirectToMainPage = false,
}: {
  redirectToMainPage?: boolean;
}) => {
  if (redirectToMainPage)
    return (
      <Link href="/" aria-label="Go to main page">
        <div className="bg-linear-to-br from-[#484848] to-[#050505] dark:from-neutral-900 dark:to-neutral-950 p-1.5 rounded-md shadow-inner shadow-gray-50/5">
          <BearSvg className="size-5" />
        </div>
      </Link>
    );

  return (
    <div className="bg-linear-to-br from-[#2C2B2B] to-[#050505] dark:from-neutral-900 dark:to-neutral-950 p-1.5 rounded-md shadow-inner shadow-gray-50/5">
      <BearSvg className="size-5" />
    </div>
  );
};

export default Logo;
