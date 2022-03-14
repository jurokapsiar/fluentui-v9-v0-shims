import * as React from "react";

import { Flex, FlexProps } from "@fluentui/react-northstar";
import { Placeholder } from "../Placeholder";

export const FlexAlignV0 = () => {
  return (
    <>
      <Flex column gap="gap.large" hAlign="center" vAlign="center" debug>
        {[
          {
            key: "start",
            items: [
              {
                hAlign: "start",
                vAlign: "start"
              } as FlexProps,
              {
                hAlign: "start",
                vAlign: "center"
              } as FlexProps,
              {
                hAlign: "start",
                vAlign: "end"
              } as FlexProps
            ]
          },
          {
            key: "center",
            items: [
              {
                hAlign: "center",
                vAlign: "start"
              } as FlexProps,
              {
                hAlign: "center",
                vAlign: "center"
              } as FlexProps,
              {
                hAlign: "center",
                vAlign: "end"
              } as FlexProps
            ]
          },
          {
            key: "end",
            items: [
              {
                hAlign: "end",
                vAlign: "start"
              } as FlexProps,
              {
                hAlign: "end",
                vAlign: "center"
              } as FlexProps,
              {
                hAlign: "end",
                vAlign: "end"
              } as FlexProps
            ]
          }
        ].map((rowOfAlignmentProps) => (
          <Flex gap="gap.large" key={rowOfAlignmentProps.key}>
            {rowOfAlignmentProps.items.map((alignmentProps) => (
              <Flex
                inline
                {...alignmentProps}
                key={alignmentProps.vAlign}
                style={{
                  width: "100px",
                  height: "100px"
                }}
                debug
              >
                <Placeholder>V:{alignmentProps.vAlign}<br />H:{alignmentProps.hAlign}</Placeholder>
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    </>
  );
};
