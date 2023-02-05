import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheckbox, handleDelete }) => {
  return (
    <li>
      <input
        type={"checkbox"}
        onChange={() => handleCheckbox(item.id)}
        checked={item.isDone}
      />
      <div>
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
