import { useState } from "react";

function AddNote() {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = (e) => {};

  return (
    <>
      <div className="note new">
        <textarea
          placeholder="Type to add a note..."
          cols="10"
          rows="8"
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small onClick={handleSaveClick}>200 Remaining</small>
          <button className="save">Save</button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
