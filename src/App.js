import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const [wardrobe, setWardrobe] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/wardrobe')
        .then(r => r.json())
        .then(data => setWardrobe(data))
      }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={[wardrobe, setWardrobe]} />
    </>
  );
}

export default App;