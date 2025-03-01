import Hero from "@/components/hero";
import ExamplesContainer from "@/components/examples-container";

const Home = () => {
  return (
    <main className="flex-1 pb-28 md:pb-36 xl:pb-44 flex flex-col gap-40 overflow-hidden">
      <div className="mt-32">
        <Hero />
      </div>
      <ExamplesContainer />
    </main>
  );
};

export default Home;
