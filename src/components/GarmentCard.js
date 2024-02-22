function GarmentCard({garment}) {
    return (
        <div className="card">
          <img src={garment.image} alt="card" className="card-image" />
          <div className="card-description">{garment.brand}</div>
        </div>
      )
}

export default GarmentCard