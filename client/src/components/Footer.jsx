import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to={`/`}>
        <img src="/assets/DEALIO_nbg.png" />
      </Link>
      <div id="linksFooter">
        <div>
          <Link to="about">About Us</Link>
        </div>
        <div>
          <Link to="formpage">Add a Discount</Link>
        </div>
      </div>
      <div>
        <p>Dealio &copy; 2023</p>
      </div>
    </footer>
  );
}
