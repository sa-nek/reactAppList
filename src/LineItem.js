import "./styles/LineItemStyle.css";
import { FaTrashAlt } from "react-icons/fa";
import { useRef } from "react";
const LineItem = ({ item, handleCheckbox, handleDelete }) => {
  const liRef = useRef();
  return (
    <li className="defaultLi" ref={liRef}>
      <input
        type={"checkbox"}
        onChange={() => {
          handleCheckbox(item.id);
          liRef.current.classList.toggle("checkedLi");
        }}
        checked={item.isDone}
      />
      <div className="capDes">
        <h3>{item.itemName}</h3>
        <p>{item.itemDescription}</p>
      </div>
      <div className="deleteBtn">
        <FaTrashAlt
          className="delIcon"
          onClick={() => handleDelete(item.id)}
          role={"button"}
        />
      </div>
    </li>
  );
};

export default LineItem;
