import { ReactNode } from "react";

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sticky w-full max-w-screen-xl mx-auto grid md:grid-cols-[250px_minmax(0,1fr)] ">
      <div className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-neutral-200 dark:border-neutral-900 md:sticky md:block">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full overflow-auto py-6 px-4 lg:py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-1 text-sm">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-300 mx-2">
                Title
              </h2>
              <div className="flex flex-col text-neutral-500 ">
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-300 mx-2">
                Title
              </h2>
              <div className="flex flex-col text-neutral-500">
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
                <div className="hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300">
                  Example
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      {children}
    </div>
  );
};

export default Components;
