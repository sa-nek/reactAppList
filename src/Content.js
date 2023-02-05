import ItemList from "./ItemList";
import AddItem from "./AddItem";
const Content = ({
  items,
  handleCheckbox,
  handleDelete,
  newItemCaption,
  setNewItemCaption,
  newItemDescription,
  setNewItemDescription,
  handleAdd,
}) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
        />
      ) : (
        <p>There are no items</p>
      )}
      <AddItem
        newItemCaption={newItemCaption}
        setNewItemCaption={setNewItemCaption}
        newItemDescription={newItemDescription}
        setNewItemDescription={setNewItemDescription}
        handleAdd={handleAdd}
      />
    </main>
  );
};

export default Content;
