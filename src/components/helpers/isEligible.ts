import { CLASS_LIST as CLASS_OBJECT } from "../../consts";

export default function isEligible(classType, attributes) {
  return Object.keys(attributes).every(
    (key) => CLASS_OBJECT[classType][key] <= attributes[key],
  );
}
