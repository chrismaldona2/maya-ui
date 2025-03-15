import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Logo from "@/components/logo";
import CenteredWrapper from "@/components/layout/centered-wrapper";
import SearchBar from "../searchbar";
import MobileMenuButton from "../mobile-menu-btn";

const Header = () => {
  return (
    <>
      <div className="bg-linear-to-r from-[#ffffff] to-[#e8e5eb] dark:from-[#0a0a0a] dark:to-[#1b1b1c] text-neutral-800 dark:text-slate-100 py-[0.6rem] w-full text-center text-sm shadow-xs shadow-neutral-800/10 z-60">
        ✨ Bring your website to life with Maya UI
      </div>
      <header className="w-full z-50 bg-white/75 dark:bg-neutral-950/85 backdrop-blur-md flex flex-col mx-auto items-center sticky top-0 border-b border-neutral-300 dark:border-neutral-900">
        <CenteredWrapper className="px-4 ">
          <div className="py-4 w-full flex items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <Logo redirectToMainPage />
              <HeaderLinks />
            </div>
            <div className="flex gap-4.5 items-center grow-1 sm:grow-0">
              <SearchBar />
              <ThemeToggle className="shrink-0 text-neutral-450 dark:text-neutral-300" />
              <MobileMenuButton className="sm:hidden" />
            </div>
          </div>
        </CenteredWrapper>
      </header>
    </>
  );
};

export default Header;

const HeaderLinks = () => {
  return (
    <nav className="hidden sm:flex gap-5 text-sm ml-6">
      <ul>
        <li>
          <Link
            href="/components"
            className="p-1 font-medium text-neutral-450 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 transition-colors duration-300"
          >
            Components
          </Link>
        </li>
      </ul>
    </nav>
  );
};
