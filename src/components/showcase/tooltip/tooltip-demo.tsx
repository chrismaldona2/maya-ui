import Button from "@/components/button";
import Tooltip from "./tooltip";

export const TooltipDemo = () => {
  return (
    <Tooltip
      offset={12}
      content="I'm a tooltip! 😎"
      placement="top"
      className="max-w-[300px] bg-violet-700 text-neutral-50 "
      disableUserSelect
      showArrow
      arrowClassName="size-2"
    >
      <Button>Hover me</Button>
    </Tooltip>
  );
};
