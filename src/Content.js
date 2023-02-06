import ItemList from "./ItemList";
import AddItem from "./AddItem";
import { useState } from "react";
import "./styles/ContentStyle.css";
import "./SearchItem.js";
import SearchItem from "./SearchItem.js";
const Content = ({ items, handleCheckbox, handleDelete, setSave }) => {
  const [newItemCaption, setNewItemCaption] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const handleAdd = () => {
    const newItemObj = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      itemName: newItemCaption,
      itemDescription: newItemDescription,
      isDone: false,
    };
    const newArr = [...items, newItemObj];
    setSave(newArr);
    setNewItemCaption("");
    setNewItemDescription("");
  };
  const searchHadler = (item) =>
    item.itemName.toLowerCase().includes(searchItem.toLowerCase()) ||
    item.itemDescription.toLowerCase().includes(searchItem.toLowerCase());
  return (
    <main>
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      {items.length ? (
        <ItemList
          items={items.filter(searchHadler)}
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
