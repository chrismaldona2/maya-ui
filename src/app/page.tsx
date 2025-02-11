import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="min-h-[200vh]">
      <HomeSection>
        <div className="mt-24">
          <Hero />
        </div>
      </HomeSection>
    </main>
  );
};

export default Home;

import { ReactNode } from "react";
const HomeSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" overflow-hidden py-5 md:py-14">
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
};
