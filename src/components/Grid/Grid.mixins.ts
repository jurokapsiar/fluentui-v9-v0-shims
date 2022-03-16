import { GriffelStyle } from "@griffel/core";

const getCSSTemplateValue = (template: string | number): string => {
  const templateAsNumber = Number(template);

  return !isNaN(templateAsNumber) && templateAsNumber > 0
    ? `repeat(${template}, 1fr)`
    : String(template);
};

const columns: (template: string) => GriffelStyle = template => ({
  gridTemplateColumns: getCSSTemplateValue(template),
});

const rows: (template: string) => GriffelStyle = template => ({
  gridTemplateRows: getCSSTemplateValue(template),
});

export const grid = {
  columns,
  rows,
};
