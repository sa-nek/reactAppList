import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import "./style.css";

function App() {
  const setSave = (data) => {
    setItems(data);
    localStorage.setItem("itemsList", JSON.stringify(data));
  };
  const [items, setItems] = useState(
    localStorage.getItem("itemsList")
      ? JSON.parse(localStorage.getItem("itemsList"))
      : []
  );
  const [newItemCaption, setNewItemCaption] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const handleCheckbox = (id) => {
    const newArr = items.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : { ...item }
    );
    setSave(newArr);
  };
  const handleDelete = (id) => {
    const newArr = items.filter((item) => item.id !== id);
    setSave(newArr);
  };
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
  return (
    <div className="App">
      <Header title="Tasks" />
      <Content
        items={items}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
        newItemCaption={newItemCaption}
        setNewItemCaption={setNewItemCaption}
        newItemDescription={newItemDescription}
        setNewItemDescription={setNewItemDescription}
        handleAdd={handleAdd}
      />
      <Footer counter={items.length} />
    </div>
  );
}

export default App;
