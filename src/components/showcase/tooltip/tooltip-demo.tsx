import Button from "@/components/button";
import Tooltip from "./tooltip";

const TooltipDemo = () => {
  return (
    <Tooltip
      content="I'm a tooltip! 😎"
      placement="top"
      className="max-w-[300px] bg-violet-700 text-neutral-50 "
      disableUseSelect
      showArrow
      arrowClassName="text-violet-700"
      offset={12}
    >
      <Button>Hover me</Button>
    </Tooltip>
  );
};

export default TooltipDemo;
