import { FaPlusCircle } from "react-icons/fa";
const addItem = ({
  newItemCaption,
  setNewItemCaption,
  newItemDescription,
  setNewItemDescription,
  handleAdd,
}) => {
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
        className="inp"
        required
        type="text"
        id="caption"
        value={newItemCaption}
        onChange={(e) => setNewItemCaption(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        className="inp"
        required
        type="text"
        id="description"
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
      />
      <button type="submit" className="addBtn">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default addItem;
