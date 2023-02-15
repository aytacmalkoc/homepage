import { HTMLAttributeAnchorTarget } from "react";
// @ts-ignore
import hexToRgb from "hex-to-rgb";

//TODO: fix file type
export const openFile = (
  file: any,
  target: HTMLAttributeAnchorTarget = "_blank"
) => window.open(file, target);

export const scrollTo = (
  to: string,
  position: number,
  behavior: ScrollBehavior = "smooth"
) => window.scrollTo({ [to]: position, behavior });

// source: https://github.com/scottcorgan/contrast
export const contrast = (hex: string | undefined) => {
  const rgb = hexToRgb(hex);

  const o = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );

  return o <= 180 ? "#FFFFFF" : "#000000";
};
