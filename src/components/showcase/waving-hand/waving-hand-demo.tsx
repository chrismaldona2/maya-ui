import WavingHand from "./waving-hand";

const WavingHandDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-semibold text-primary/70 dark:text-primary cursor-default text-end">
        Hello world!
      </span>
      <WavingHand />
    </div>
  );
};

export default WavingHandDemo;
