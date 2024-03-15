import { useOutletContext } from "react-router-dom";
import './Home.css'

function Home() {

    const [wardrobe] = useOutletContext()

    console.log(wardrobe)

    return(
        <div className="container">
            <h1>Wardrobe Manager</h1>
        </div>
    )
}

export default Home