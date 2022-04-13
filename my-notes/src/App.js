import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import "./styles.css";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) => note.text.includes(searchText))}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}

export default App;
