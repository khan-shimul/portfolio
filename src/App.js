import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Details from './pages/Details/Details';
import Blogs from './pages/Blogs/Blogs/Blogs';
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/project-details/:id' element={<Details />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
