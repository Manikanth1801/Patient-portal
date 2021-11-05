import { Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Common/Header';
import Routes from './Components/Common/Routes/Routes';
import Display from './Components/Display';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes/>
     <Display />
    </div>
  );
}

export default App;
