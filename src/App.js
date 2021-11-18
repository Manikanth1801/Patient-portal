import "./App.css";
import Header from "./Common/Header/Header";
import Routes from "./Router/Routes";
import { useLocation } from "react-router-dom";
import LeftNav from "./Common/LeftNav/LeftNav";

function App() {
  const location = useLocation();
  const showHeader =
    location.pathname.includes("patient") ||
    location.pathname.includes("admin") ||
    location.pathname.includes("physician");
  return (
    <div className="Ap">
      {showHeader && (
        <>
          <Header />
        </>
      )}
      <div className="d-flex">
        {showHeader && (
          <>
            <LeftNav />
          </>
        )}
        <Routes />
      </div>
    </div>
  );
}

export default App;
