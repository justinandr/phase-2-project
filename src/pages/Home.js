import { useOutletContext } from "react-router-dom";
import './Home.css'

function Home() {

    const [wardrobe] = useOutletContext()

    return(
        <div className="home-container">
            <h1>Welcome to Wardrobe Manager</h1>
            <p>You have {wardrobe.length} articles of clothing in your wardrobe.</p>
        </div>
    )
}

export default Home