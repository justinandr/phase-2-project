import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Home() {

    const [wardrobe, setWardrobe] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/wardrobe')
        .then(r => r.json())
        .then(data => setWardrobe(data))
      }, [])
    
      console.log(wardrobe)

    return(
        <>
            <header>
                <NavBar />
            </header>
            <h1>Home Page</h1>
        </>
    )
}

export default Home