import { MdDeleteForever } from "react-icons/md";

function Note() {
  return (
    <>
      <div className="note">
        <span>Note #1</span>
        <div className="note-footer">
          <small>4/11/2022</small>
          <MdDeleteForever className="delete-icon" size="1.3em" />
        </div>
      </div>
    </>
  );
}

export default Note;
