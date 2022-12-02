import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
function App() {
  return (
    <div className="bg-black h-screen w-screen  text-slate-200">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
