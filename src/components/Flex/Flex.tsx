import { mergeClasses } from "@fluentui/react-components";
import * as React from "react";
import * as _ from "lodash";

import { useFlexStyles } from "./Flex.styles";

// Simplified version from https://github.com/reach/reach-ui/blob/55d28eda39afc4c667e97f5f62a48d1de034b93f/packages/utils/src/polymorphic.ts
interface FlexComponent {
  /**
   * Infers props from JSX.IntrinsicElements based on "as" value. Explicitly avoids `React.ElementType` and manually
   * narrow the prop types so that events are typed when using JSX.IntrinsicElements.
   */
  <As extends keyof JSX.IntrinsicElements>(
    props: { as?: As } & FlexProps & JSX.IntrinsicElements[As]
  ): React.ReactElement | null;

  displayName: string;
}

export interface FlexProps {
  /** Defines if container should be inline element. */
  inline?: boolean;

  /** Sets vertical flow direction. */
  column?: boolean;

  /** Allows overflow items to wrap on the next container's line. */
  wrap?: boolean;

  /** Controls items alignment in horizontal direction. */
  hAlign?: "start" | "center" | "end" | "stretch";

  /** Controls items alignment in vertical direction. */
  vAlign?: "start" | "center" | "end" | "stretch";

  /** Defines strategy for distributing remaining space between items. */
  space?: "around" | "between" | "evenly";

  /** Defines gap between each two adjacent child items. */
  gap?: "gap.smaller" | "gap.small" | "gap.medium" | "gap.large";

  /** Defines container's padding. */
  padding?: "padding.medium";

  /** Enables debug mode. */
  debug?: boolean;

  /** Orders container to fill all parent's space available. */
  fill?: boolean;
}

export const flexClassName = "fui-Flex";

export const Flex = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement> & { as: "div" | "span" } & FlexProps
>(function Flex(props, ref) {
  const {
    as: Component = "div",
    children,
    column,
    debug,
    fill,
    gap,
    hAlign,
    inline,
    padding,
    space,
    vAlign,
    wrap,
    className,
    ...rest
  } = props;
  const classes = useFlexStyles();

  const classMaps = React.useMemo(
    () => ({
      alignItems: {
        start: classes.alignItemsFlexStart,
        center: classes.alignItemsCenter,
        end: classes.alignItemsFlexEnd,
        stretch: classes.alignItemsCenter
      },
      justifyContent: {
        start: classes.justifyContentFlexStart,
        center: classes.justifyContentCenter,
        end: classes.justifyContentFlexEnd,
        stretch: classes.justifyContentStretch
      },
      justifyContentSpace: {
        around: classes.justifyContentSpaceAround,
        between: classes.justifyContentSpaceBetween,
        evenly: classes.justifyContentSpaceEvenly
      },
      gapColumn: {
        "gap.smaller": classes.gapColumnSmaller,
        "gap.small": classes.gapColumnSmall,
        "gap.medium": classes.gapColumnMedium,
        "gap.large": classes.gapColumnLarge
      },
      gapRow: {
        "gap.smaller": classes.gapSmaller,
        "gap.small": classes.gapSmall,
        "gap.medium": classes.gapMedium,
        "gap.large": classes.gapLarge
      },
      paddings: {
        "padding.medium": classes.paddingMedium
      }
    }),
    [classes]
  );

  const flexClasses = mergeClasses(
    flexClassName,
    classes.flex,
    debug && classes.debug,
    inline && classes.inline,
    column && classes.column,
    hAlign &&
      (column
        ? classMaps.alignItems[hAlign]
        : classMaps.justifyContent[hAlign]),
    vAlign &&
      (column
        ? classMaps.justifyContent[vAlign]
        : classMaps.alignItems[vAlign]),
    space && classMaps.justifyContentSpace[space],
    wrap && classes.wrap,
    fill && classes.fill,
    gap && (column ? classMaps.gapColumn[gap] : classMaps.gapRow[gap]),
    padding && classMaps.paddings[padding],
    className
  );

  const content = React.Children.map(children, (child) => {
    const isFlexItemElement: boolean = _.get(child, "type.__isFlexItem");

    return isFlexItemElement
      ? React.cloneElement(child as React.ReactElement, {
          flexDirection: column ? "column" : "row"
        })
      : child;
  });

  return (
    <Component ref={ref} className={flexClasses} {...rest}>
      {content}
    </Component>
  );
}) as FlexComponent;

Flex.displayName = "Flex";
