import "./App.css";
import Header from "./Common/Header/Header";
import Routes from "./Router/Routes";
import { useLocation } from "react-router-dom";
import LeftNav from "./Common/LeftNav/LeftNav";
import Footer from "./Common/Footer/Footer";

function App() {
  const location = useLocation();
  const showHeader =
    location.pathname.includes("patient") ||
    location.pathname.includes("admin") ||
    location.pathname.includes("physician");

    localStorage.setItem('authToken', '12345')
  return (
    <div className="Ap">
      {showHeader && (
      <>
        <Header />
        <LeftNav />
      </>
      )}
      <div style={{float:"left"}}>
          <Routes />
      </div>
        {showHeader && (
          <Footer/>
        )}
      {/* </div> */}
    </div>
  );
}

export default App;
