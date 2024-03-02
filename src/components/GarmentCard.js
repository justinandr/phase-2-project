import './GarmentCard.css'

function GarmentCard({garment}) {

    return (
        <div className="card">
          <img src={garment.image} alt="card" className="card-image" />
          <div className="card-description">
            <ul>
              <li>Brand: {garment.brand}</li>
              <li>Category: {garment.category}</li>
              <li>Size: {garment.size}</li>
              <li>Color: {garment.color}</li>
            </ul>
          </div>
        </div>
      )
}

export default GarmentCard