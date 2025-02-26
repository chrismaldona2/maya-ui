import BentoGrid from "./bento-grid";
import CenteredWrapper from "./centered-wrapper";
import ComponentCard from "./component-card";
import { TabPanel, Tabs } from "./container-with-tabs";
import RotatingThemeToggle from "./showcase/rotating-theme-toggle/rotating-theme-toggle-tailwind";
import WavingHand from "./showcase/waving-hand/waving-hand";

const ExamplesContainer = () => {
  return (
    <CenteredWrapper>
      <Tabs innerContainerClassName="px-[1.7rem] py-[1.85rem]">
        <TabPanel label="Examples">
          <BentoGrid>
            <ComponentCard
              className="lg:col-span-2"
              title="Rotating theme toggle tailwind"
              codeLink="/components/rotating-theme-toggle"
            >
              <RotatingThemeToggle />
            </ComponentCard>
            <ComponentCard
              className="md:col-span-2"
              title="Waving hand"
              codeLink="/components/waving-hand"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-primary/70 dark:text-primary cursor-default text-end">
                  Hello world!
                </span>
                <WavingHand />
              </div>
            </ComponentCard>
          </BentoGrid>
        </TabPanel>
      </Tabs>
    </CenteredWrapper>
  );
};

export default ExamplesContainer;
