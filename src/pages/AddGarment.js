import { useOutletContext } from "react-router-dom"
import './AddGarment.css'
import { useState } from "react"

function AddGarment() {

    const [formData, setFormData] = useState({
        brand: '',
        category: '',
        color: '',
        fit: '',
        image: '',
        size: '',
        style: ''
    })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value 

        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        fetch('http://localhost:4000/wardrobe', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    console.log(formData)

    return(
        <div className="container">
            <h2>New Garment</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="brand"
                value={formData.brand}
                placeholder="Brand name"
                onChange={handleChange}
            />
            <input
                type="text"     
                name="category"
                value={formData.category}
                placeholder="Category"
                onChange={handleChange}
            />
            <input
                type="text"
                name="color"
                value={formData.color}
                placeholder="Color"
                onChange={handleChange}
            />
            <input
                type="text"
                name="fit"
                value={formData.fit}
                placeholder="Fit"
                onChange={handleChange}
            />
            <input
                type="text"
                name="image"
                value={formData.image}
                placeholder="Image"
                onChange={handleChange}
            />
            <input
                type="text"
                name="size"
                value={formData.size}
                placeholder="Size"
                onChange={handleChange}
            />
            <input
                type="text"
                name="style"
                value={formData.style}
                placeholder="Style"
                onChange={handleChange}
            />
            <button type="submit">Add Garment</button>
            </form>
        </div>
    )
}

export default AddGarment