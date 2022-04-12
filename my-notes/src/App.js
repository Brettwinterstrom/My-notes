import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import "./styles.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note for the day",
      date: "4/11/2022",
    },
    {
      id: nanoid(),
      text: "second note for the day",
      date: "4/11/2022",
    },
    {
      id: nanoid(),
      text: "third note for the day",
      date: "4/11/2022",
    },
    {
      id: nanoid(),
      text: "fourth note for the day",
      date: "4/11/2022",
    },
  ]);

  return (
    <>
      <div className="container">
        <NotesList notes={notes} />
      </div>
    </>
  );
}

export default App;
