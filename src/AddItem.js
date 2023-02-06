import "./styles/AddItemStyle.css";
import { FaPlusCircle } from "react-icons/fa";
import { useRef } from "react";
const AddItem = ({
  newItemCaption,
  setNewItemCaption,
  newItemDescription,
  setNewItemDescription,
  handleAdd,
}) => {
  const CaptionRef = useRef();
  return (
    <form
      className="addForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
    >
      <label htmlFor="caption">Caption</label>
      <input
        autoFocus
        className="inp"
        required
        ref={CaptionRef}
        type="text"
        id="caption"
        autoComplete="off"
        value={newItemCaption}
        onChange={(e) => setNewItemCaption(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        className="inp"
        required
        type="text"
        id="description"
        autoComplete="off"
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
      />
      <button
        type="submit"
        className="addBtn"
        onClick={() => CaptionRef.current.focus()}
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default AddItem;
