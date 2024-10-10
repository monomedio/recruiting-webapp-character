import { SKILL_LIST } from "../consts";
import getPoints from "./helpers/getPoints";
import getModifier from "./helpers/getModifier";

function Skills({ attributes, skills, onChange }) {
  const intelligence = attributes["Intelligence"];
  const points = getPoints(intelligence);

  return (
    <>
      <h1>Skills</h1>
      <div>Total skill points available: {points}</div>
      <ul style={{ paddingLeft: 0 }}>
        {SKILL_LIST.map((skill) => (
          <li key={skill["name"]} style={{ listStyleType: "none" }}>
            {skill["name"]}: {skills[skill["name"]]}
            (Modifier: {skill["attributeModifier"]}):
            {getModifier(attributes[skill["attributeModifier"]])}
            <button
              onClick={() =>
                onChange(skill["name"], skills[skill["name"]] + 1, "skill")
              }
            >
              +
            </button>
            <button
              onClick={() =>
                onChange(skill["name"], skills[skill["name"]] - 1, "skill")
              }
            >
              -
            </button>
            Total:
            {skills[skill["name"]] +
              getModifier(attributes[skill["attributeModifier"]])}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
