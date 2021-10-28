import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import Routes from './Components/Common/Routes/Routes';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes/>
     <Footer/>
    </div>
  );
}

export default App;
