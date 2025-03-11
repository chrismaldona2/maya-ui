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

const top = {
  tooltipClassName: "bg-[#7c58c5] text-neutral-50 text-center",
  buttonClassName: "bg-[#563a88] text-white font-medium",
};
const right = {
  tooltipClassName: "bg-[#ca388a] text-neutral-50 max-w-[16ch] text-center",
  buttonClassName: "bg-[#ae286f] text-white font-medium",
};
const bottom = {
  tooltipClassName: "bg-[#f57780] text-neutral-50 text-center",
  buttonClassName: "bg-[#ee5d6c] text-white font-medium",
};
const left = {
  tooltipClassName: "bg-[#fc562a] text-neutral-50 max-w-[16ch] text-center",
  buttonClassName: "bg-[#fd8631] text-white font-medium",
};

export const TooltipPositionsDemo = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 py-6 px-4 gap-8">
      <div className="flex flex-col gap-4 items-center">
        <Tooltip
          offset={12}
          content="I'm at the top 😀"
          placement="top"
          className={top.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={top.buttonClassName}>Top</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the top start 😀"
          placement="top-start"
          className={top.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={top.buttonClassName}>Top-start</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the top end 😀"
          placement="top-end"
          className={top.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={top.buttonClassName}>Top-end</Button>
        </Tooltip>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Tooltip
          offset={12}
          content="I'm at the right 🥳"
          placement="right"
          className={right.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={right.buttonClassName}>Right</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the right start 🥳"
          placement="right-start"
          className={right.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={right.buttonClassName}>Right-start</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the right end 🥳"
          placement="right-end"
          className={right.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={right.buttonClassName}>Right-end</Button>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <Tooltip
          offset={12}
          content="I'm at the bottom 🙃"
          placement="bottom"
          className={bottom.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={bottom.buttonClassName}>Bottom</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the bottom start 🙃"
          placement="bottom-start"
          className={bottom.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={bottom.buttonClassName}>Bottom-start</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the bottom end 🙃"
          placement="bottom-end"
          className={bottom.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={bottom.buttonClassName}>Bottom-end</Button>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <Tooltip
          offset={12}
          content="I'm at the left 😵‍💫"
          placement="left"
          className={left.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={left.buttonClassName}>Left</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the left start 😵‍💫"
          placement="left-start"
          className={left.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={left.buttonClassName}>Left-start</Button>
        </Tooltip>
        <Tooltip
          offset={12}
          content="I'm at the left end 😵‍💫"
          placement="left-end"
          className={left.tooltipClassName}
          disableUserSelect
          showArrow
        >
          <Button className={left.buttonClassName}>Left-end</Button>
        </Tooltip>
      </div>
    </div>
  );
};
