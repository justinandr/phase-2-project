import { useOutletContext } from "react-router-dom"
import GarmentCard from "../components/GarmentCard"
import './Wardrobe.css'

function Wardrobe() {

    const [wardrobe] = useOutletContext()

    return(
        <div className="container">
            {wardrobe.map((garment) => <GarmentCard key={garment.id} garment={garment} />)}
        </div>
    )
}

export default Wardrobe