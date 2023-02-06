import "./styles/FooterStyle.css";
const Footer = ({ counter }) => {
  return <footer>{`${counter} ${counter === 1 ? "item" : "items"}`}</footer>;
};

export default Footer;
