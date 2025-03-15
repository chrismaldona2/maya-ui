"use client";
import { cn } from "@/lib/utils";
import { MenuIcon } from "./icons";
import { useState } from "react";
import MobileMenu from "./layout/mobile-menu";

interface MobileMenuButtonProps {
  className?: string;
}

const MobileMenuButton = ({ className }: MobileMenuButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button
        className={cn(
          "cursor-pointer text-neutral-900 dark:text-neutral-300",
          className
        )}
        aria-label="Open menu"
        onClick={openMenu}
      >
        <MenuIcon />
      </button>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default MobileMenuButton;
