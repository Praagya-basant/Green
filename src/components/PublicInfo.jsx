function PublicInfo({ plant }) {
  return (
    <div className="public-info">
      <img
        src={plant['Plant Photo']}
        alt="Plant"
        className="plant-photo"
      />
      <p>
        <strong>Plant Name:</strong> {plant['Plant Name']}
      </p>
      <p>
        <strong>Scientific Name:</strong> {plant['Scientific Name']}
      </p>
      <p>
        <strong>Planter Name:</strong> {plant['Planter Name']}
      </p>
    </div>
  );
}

export default PublicInfo;
