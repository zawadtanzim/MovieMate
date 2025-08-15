
import Home from './pages/Home';
import Favorites from './pages/Favotites';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom"
import { MovieContextProvider } from './context/MovieContext';


function App() {

  return (
    <MovieContextProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/favorites' element={ <Favorites/> } />
        </Routes>
      </main>

    </MovieContextProvider>
  );
}

export default App