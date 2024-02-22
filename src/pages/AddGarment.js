import { useOutletContext } from "react-router-dom"

function AddGarment() {

    const [wardrobe, setWardrobe] = useOutletContext()

    return(
        <>
            <h1>Add Garment Page</h1>
        </>
    )
}

export default AddGarment