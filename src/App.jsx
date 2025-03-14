import { Outlet } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/Navbar";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}
export default App;
