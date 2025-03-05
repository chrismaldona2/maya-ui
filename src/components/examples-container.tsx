import BentoGrid from "./bento-grid";
import CenteredWrapper from "./layout/centered-wrapper";
import ComponentCard from "./component-card";
import { TabPanel, Tabs } from "./container-with-tabs";
import { ModalDemo } from "./showcase/modal/modal-demo";
import RotatingThemeToggle from "./showcase/rotating-theme-toggle/rotating-theme-toggle-tailwind";
import WavingHandDemo from "./showcase/waving-hand/waving-hand-demo";
import { TooltipDemo } from "./showcase/tooltip/tooltip";

const ExamplesContainer = () => {
  return (
    <CenteredWrapper>
      <Tabs innerContainerClassName="px-[1.7rem] py-[1.85rem]">
        <TabPanel label="Examples">
          <BentoGrid>
            <ComponentCard
              title="Rotating theme toggle"
              codeLink="/components/rotating-theme-toggle"
            >
              <RotatingThemeToggle />
            </ComponentCard>
            <ComponentCard
              className="md:col-span-2"
              title="Waving hand"
              codeLink="/components/waving-hand"
            >
              <WavingHandDemo />
            </ComponentCard>
            <ComponentCard
              title="Modal"
              className="col-span-full md:col-span-2 lg:col-span-1"
              codeLink="/components/modal"
            >
              <ModalDemo />
            </ComponentCard>
            <ComponentCard
              title="Tooltip"
              className="col-span-full md:col-span-1 lg:col-span-full"
              showOverflow
            >
              <TooltipDemo />
            </ComponentCard>
          </BentoGrid>
        </TabPanel>
      </Tabs>
    </CenteredWrapper>
  );
};

export default ExamplesContainer;
