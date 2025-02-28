import { VirtualItem, Virtualizer } from "@tanstack/react-virtual";
import { createElement, CSSProperties, ReactNode } from "react";

interface VirtualizedCodeRendererProps {
  rows: rendererNode[];
  stylesheet: Record<string, CSSProperties>;
  useInlineStyles: boolean;
  virtualItems: VirtualItem[];
  virtualizer: Virtualizer<HTMLDivElement, Element>;
}

type InlineStyles = Record<string, React.CSSProperties>;

const VirtualizedCodeRenderer = ({
  rows,
  stylesheet,
  useInlineStyles,
  virtualItems,
  virtualizer,
}: VirtualizedCodeRendererProps): ReactNode => {
  const inlineStyles: InlineStyles = stylesheet
    ? Object.keys(stylesheet).reduce((acc, key) => {
        acc[key] = { ...stylesheet[key] };
        return acc;
      }, {} as InlineStyles)
    : {};

  return (
    <div
      className="absolute"
      style={{
        transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
      }}
    >
      {virtualItems.map((vItem) => {
        const row = rows[vItem.index];
        if (!row) return null;
        return (
          <div
            key={vItem.index}
            data-index={vItem.index}
            ref={virtualizer.measureElement}
          >
            {row.children?.map((token, i) =>
              renderToken(token, i, useInlineStyles, inlineStyles)
            )}
          </div>
        );
      })}
    </div>
  );
};

const renderToken = (
  token: rendererNode | string,
  key: number,
  useInlineStyles: boolean,
  inlineStyles: InlineStyles
): ReactNode => {
  if (typeof token === "string") return token;

  const { properties, tagName, children = [], value = "" } = token;

  const className = properties?.className || [];

  const tokenStyle: CSSProperties =
    className.length > 0 && useInlineStyles
      ? className.reduce(
          (styles, cls) => ({ ...styles, ...(inlineStyles[cls] || {}) }),
          {} as CSSProperties
        )
      : {};

  const TagName = tagName || "span";
  const props = {
    key,
    style: useInlineStyles ? tokenStyle : undefined,
    className: useInlineStyles ? undefined : className.join(" "),
  };

  return createElement(
    TagName,
    props,
    children.length === 0
      ? value
      : children.map((child, i) =>
          renderToken(child, i, useInlineStyles, inlineStyles)
        )
  );
};

export default VirtualizedCodeRenderer;
