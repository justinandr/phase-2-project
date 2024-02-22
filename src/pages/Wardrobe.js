import { useOutletContext } from "react-router-dom"

function Wardrobe() {

    const [wardrobe] = useOutletContext()

    return(
        <>
            <h1>Wardrobe Page</h1>
        </>
    )
}

export default Wardrobe