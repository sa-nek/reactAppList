import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import "./styles/AppStyle.css";

function App() {
  const [listName, setListName] = useState(
    localStorage.getItem("listName")
      ? JSON.parse(localStorage.getItem("listName"))
      : "List"
  );
  const [items, setItems] = useState(
    localStorage.getItem("itemsList")
      ? JSON.parse(localStorage.getItem("itemsList"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(items));
    console.log("items changed");
  }, [items]);

  const handleCheckbox = (id) => {
    const newArr = items.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : { ...item }
    );
    setItems(newArr);
  };
  const handleDelete = (id) => {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  };
  return (
    <div className="App">
      <Header listName={listName} setListName={setListName} />
      <Content
        items={items}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
        setItems={setItems}
      />
      <Footer counter={items.length} />
    </div>
  );
}

export default App;
