const getCSSTemplateValue = (template: string | number): string => {
  const templateAsNumber = Number(template);

  return !isNaN(templateAsNumber) && templateAsNumber > 0 ? `repeat(${template}, 1fr)` : String(template);
};

const columns = (template: string) => ({
  gridTemplateColumns: getCSSTemplateValue(template)
});

const rows = (template: string) => ({
  gridTemplateRows: getCSSTemplateValue(template)
});

export const grid = {
  columns,
  rows
};
