import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, SKILL_LIST, API_URL } from "./consts";
import Attributes from "./components/Attributes";
import Classes from "./components/Classes";
import ClassRequirements from "./components/ClassRequirements";
import Skills from "./components/Skills";
import SaveButton from "./components/SaveButton";

const DEFAULT_ATTRIBUTES = Object.fromEntries(
  ATTRIBUTE_LIST.map((attr) => [attr, 10]),
);
const DEFAULT_SKILLS = Object.fromEntries(
  SKILL_LIST.map((skill) => [skill["name"], 0]),
);

function App() {
  const [attributes, setAttributes] = useState(DEFAULT_ATTRIBUTES);
  const [skills, setSkills] = useState(DEFAULT_SKILLS);
  const [showRequirements, setShowRequirements] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setAttributes(data.body.attributes || DEFAULT_ATTRIBUTES);
      setSkills(data.body.skills || DEFAULT_SKILLS);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ attributes, skills }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      alert("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = useCallback((name, value, type) => {
    switch (type) {
      case "attribute":
        setAttributes((prev) => ({ ...prev, [name]: value }));
        break;
      case "skill":
        setSkills((prev) => ({ ...prev, [name]: value }));
        break;
      default:
        break;
    }
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Sam Hui</h1>
      </header>
      <section className="App-section">
        <SaveButton isSaving={isSaving} handleSave={handleSave} />
        <Attributes attributes={attributes} onChange={handleChange} />
        <Classes
          attributes={attributes}
          setSelectedClass={setSelectedClass}
          setShowRequirements={setShowRequirements}
        />
        {showRequirements && (
          <ClassRequirements
            classType={selectedClass}
            setShowRequirements={setShowRequirements}
          />
        )}
        <Skills
          attributes={attributes}
          skills={skills}
          onChange={handleChange}
        />
      </section>
    </div>
  );
}

export default App;
