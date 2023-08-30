
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>

      <Router>

        <Navbar/>
        <AllRoutes/>
        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
