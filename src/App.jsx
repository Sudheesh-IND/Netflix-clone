
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Startpage from './Components/Startpage';
import Moviespage from './Components/Moviespage';
import Viewmovie from './Components/Viewmovie';

function App() {
  return (
    <div className="App">

{/* for holding route */}
      <Routes>

        {/* start page */}
        <Route path='/' element={<Startpage/>}/>
        {/* movie list page */}
        <Route path='movies' element={<Moviespage/>}/>
        {/* to view a specific movie */}
        <Route path='movie/:id' element={<Viewmovie/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
