import "./styles/HeaderStyle.css";
const Header = (atr) => {
  return (
    <header>
      <h1>{atr.title}</h1>
    </header>
  );
};
Header.defaultProps = { title: "123123" };
export default Header;
