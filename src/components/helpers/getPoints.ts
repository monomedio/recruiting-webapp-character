import getModifier from "./getModifier";

export default function getPoints(intelligence) {
  return Math.max(0, 10 + 4 * getModifier(intelligence));
}
