import "./styles/HeaderStyle.css";
const Header = ({ listName, setListName }) => {
  const saveNameList = () => {
    localStorage.setItem("listName", JSON.stringify(listName));
  };
  return (
    <header>
      <input
        type="text"
        autoComplete="off"
        value={listName}
        onChange={(e) => {
          setListName(e.target.value);
          saveNameList();
        }}
        onClick={(e) => {
          setListName("");
          saveNameList();
        }}
        onBlur={(e) => {
          e.target.value ? setListName(e.target.value) : setListName("List");
          saveNameList();
        }}
      />
    </header>
  );
};
export default Header;
