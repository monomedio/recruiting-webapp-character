import { CLASS_LIST as CLASS_OBJECT } from "../consts";

function ClassRequirements({ classType, setShowRequirements }) {
  const classData = CLASS_OBJECT[classType];

  return (
    <>
      <h1>{classType} Minimum Requirements</h1>
      <ul style={{ paddingLeft: 0 }}>
        {Object.keys(classData).map((attribute) => (
          <li key={attribute} style={{ listStyleType: "none" }}>
            {attribute}: {classData[attribute]}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowRequirements(false)}>
        Close Requirement View
      </button>
    </>
  );
}

export default ClassRequirements;
