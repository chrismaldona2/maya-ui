import BentoGrid from "./bento-grid";
import CenteredWrapper from "./centered-wrapper";
import ComponentCard from "./component-card";
import ContainerWithTabs from "./container-with-tabs";
import RotatingThemeToggle from "./showcase/rotating-theme-toggle";
import WavingHand from "./showcase/waving-hand";

const Examples = () => {
  return (
    <BentoGrid>
      <ComponentCard
        className="lg:col-span-2"
        component={<RotatingThemeToggle />}
        title="Rotating theme toggle"
        codeLink="/components/rotating-theme-toggle"
      />
      <ComponentCard
        className="md:col-span-2"
        component={
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary/70 dark:text-primary cursor-default text-end">
              Hello world!
            </span>
            <WavingHand />
          </div>
        }
        title="Waving hand"
        codeLink="/components/waving-hand"
      />
    </BentoGrid>
  );
};

const ExamplesContainer = () => {
  return (
    <CenteredWrapper>
      <ContainerWithTabs
        tabs={[{ label: "Examples", content: <Examples /> }]}
      />
    </CenteredWrapper>
  );
};

export default ExamplesContainer;
