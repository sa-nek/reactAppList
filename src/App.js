import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import "./styles/AppStyle.css";

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
  return (
    <div className="App">
      <Header title="Tasks" />
      <Content
        items={items}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
        setSave={setSave}
      />
      <Footer counter={items.length} />
    </div>
  );
}

export default App;
