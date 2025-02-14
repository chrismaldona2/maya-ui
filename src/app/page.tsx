import Hero from "@/components/sections/hero";
import ExamplesContainer from "@/components/sections/examples-container";

const Home = () => {
  return (
    <main className="pb-28 md:pb-36 xl:pb-44 flex flex-col gap-40">
      <div className="mt-32">
        <Hero />
      </div>
      <ExamplesContainer />
    </main>
  );
};

export default Home;
