"use client";
import { docsLinks } from "@/config/navigation";
import { useState } from "react";
import Modal from "./showcase/modal/modal";
import Link from "next/link";
import AnimateOnHeightChange from "./animate-on-height-change";
import { ArrowIcon, SearchIcon } from "./icons";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = docsLinks
    .map((section) => ({
      ...section,
      links: section.links.filter((link) =>
        link.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.links.length > 0);

  return (
    <>
      <button
        className="py-1.5 w-full pl-3 pr-6 bg-neutral-50 dark:bg-neutral-925 border border-neutral-250 dark:border-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-pointer rounded-lg overflow-ellipsis flex items-center gap-2 min-w-0 whitespace-nowrap text-sm"
        onClick={openModal}
      >
        <SearchIcon className="size-[0.8rem] text-[#b9b5b5] dark:text-neutral-500 shrink-0" />
        <span className="hidden sm:inline-block">Search documentation...</span>
        <span className="inline-block sm:hidden">Search...</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="p-0 dark:bg-neutral-900 overflow-clip"
        showCloseButton={false}
      >
        <AnimateOnHeightChange>
          <div className="p-4 border-b border-b-neutral-200 dark:border-b-neutral-800">
            <input
              type="text"
              value={searchQuery}
              className="bg-neutral-100 dark:bg-neutral-850 px-3.5 py-2 rounded-lg outline-none w-full dark:text-neutral-300"
              placeholder="Search documentation..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="max-h-[300px] h-full overflow-auto flex flex-col gap-5 p-4">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((section) => (
                <div key={section.title}>
                  <h2 className="text-sm ml-1 mb-1 text-neutral-450 dark:text-neutral-500">
                    {section.title}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeModal}
                          className="flex gap-2 items-center p-2 transition-colors duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-neutral-800 dark:text-neutral-400"
                        >
                          <ArrowIcon className="size-2.5 text-neutral-400" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="mx-auto py-1.5 text-neutral-500">
                No result found.
              </p>
            )}
          </div>
        </AnimateOnHeightChange>
      </Modal>
    </>
  );
};

export default SearchBar;
