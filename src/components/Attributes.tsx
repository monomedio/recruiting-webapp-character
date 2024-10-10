import { ATTRIBUTE_LIST } from "../consts";
import getModifier from "./helpers/getModifier";

function Attributes({ attributes, onChange }) {
  return (
    <>
      <h1>Attributes</h1>
      <ul style={{ paddingLeft: 0 }}>
        {ATTRIBUTE_LIST.map((attr) => (
          <li key={attr} style={{ listStyleType: "none" }}>
            <span>{attr}: </span>
            <span>{attributes[attr]} </span>
            <span>(Modifier: {getModifier(attributes[attr])}) </span>
            <button
              onClick={() => onChange(attr, attributes[attr] + 1, "attribute")}
            >
              +
            </button>
            <button
              onClick={() => onChange(attr, attributes[attr] - 1, "attribute")}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Attributes;
