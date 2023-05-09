
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from  './Components/Home'
import RestaurentDetails from './Components/RestaurentDetails';


import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'

function App() {
  return (
   <Router>
      <Header />
     
        <main className='py-3'>
        
        <Routes>
          <Route path='/' element ={<Home />}/>
          <Route path='/restaurents/:id' element={<RestaurentDetails />}/>
         
        </Routes>
      </main>

        

      <Footer />
   </Router>
  );
}

export default App;
