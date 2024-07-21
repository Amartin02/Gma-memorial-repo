import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;
  //   const currentPage = "";
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          AboutHer
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Memories"
          className={
            currentPage === "/Memories" ? "nav-link active" : "nav-link"
          }
        >
          Memories
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li> */}
    </ul>
  );
}

export default NavTabs;
