import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Carousel from './carousel/Carousel';
import {useState,useEffect} from "react"
import giphy from './asserts/1496.gif'
import Heading from './header/Heading';
import {Form} from './login/Form';
import MovieContent from './mainContent/MovieContent';
function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
    },5000)
  },[])
  return (
    <div className="App">
    {isLoading?<img src={giphy} alt="loader" width="500px" height="100vh"></img>:
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Heading/>}></Route> 
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
      </BrowserRouter> 
      <MovieContent/>  
      <Carousel/>
      </div>

    }
      
      
    </div>
  );
}

export default App;
