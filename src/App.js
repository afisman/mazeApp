import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Directions from './components/directions';
import Start from './components/start';
import './App.css';

function App() {


  return (
    <div className="App">
      <input type="file" multiple onChange={(e) => convertToBase64(e.target.files)} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />}></Route>
          <Route path='https://mazegame.plingot.com/Room/current' element={<Directions />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
