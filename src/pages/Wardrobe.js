import { useOutletContext } from "react-router-dom"
import GarmentCard from "../components/GarmentCard"

function Wardrobe() {

    const [wardrobe] = useOutletContext()

    return(
        <>
            {wardrobe.map((garment) => <GarmentCard key={garment.id} garment={garment} />)}
        </>
    )
}

export default Wardrobe