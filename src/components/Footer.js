import { Link } from "react-router-dom";

function Footer(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <footer>
      <nav style={navStyle}>
        <Link to="/">
          <div>Email address</div>
        </Link>
        <Link to="/about">
          <div>Website</div>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;