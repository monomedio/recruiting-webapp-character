import { CLASS_LIST as CLASS_OBJECT } from "../consts";
import isEligible from "./helpers/isEligible";

const STYLES = {
  NOT_ELIGIBLE: { listStyleType: "none" },
  ELIGIBLE: { listStyleType: "none", color: "red" },
};

function Classes({ attributes, setSelectedClass, setShowRequirements }) {
  function displayRequirements(classType) {
    setShowRequirements(true);
    setSelectedClass(classType);
  }

  return (
    <>
      <h1>Classes</h1>
      <ul style={{ paddingLeft: 0 }}>
        {Object.keys(CLASS_OBJECT).map((classType) => (
          <li
            key={classType}
            style={
              isEligible(classType, attributes)
                ? STYLES.ELIGIBLE
                : STYLES.NOT_ELIGIBLE
            }
            onClick={() => displayRequirements(classType)}
          >
            <span>{classType}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Classes;
