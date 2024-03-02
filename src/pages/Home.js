import { useOutletContext } from "react-router-dom";
import GarmentCard from "../components/GarmentCard";

function Home() {

    const [wardrobe] = useOutletContext()

    console.log(wardrobe)

    return(
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default Home