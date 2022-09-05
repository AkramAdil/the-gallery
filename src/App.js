import './App.css';
import{Routes, Route} from "react-router-dom";
import Home from './pages/Home/home';
import Artwork from './pages/Artwork/artwork';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:artName" element={<Artwork/>}/>
      </Routes>
    </div>
  );
}

export default App;
