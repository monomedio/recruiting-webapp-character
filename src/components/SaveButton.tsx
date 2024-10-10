function SaveButton({ isSaving, handleSave }) {
  return (
    <button onClick={handleSave} disabled={isSaving}>
      {isSaving ? "Saving..." : "Save Data"}
    </button>
  );
}

export default SaveButton;
