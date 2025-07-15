function PrivateInfo({ plant }) {
  return (
    <div className="private-info">
      <p>
        <strong>Plant No:</strong> {plant['Plant No']}
      </p>
      <p>
        <strong>Plantation Date:</strong> {plant['Plantation Date']}
      </p>
      <p>
        <strong>Association:</strong> {plant['Association Name']}
      </p>
      <p>
        <strong>Location:</strong> {plant['Location']}
      </p>
      <p>
        <strong>Remarks:</strong> {plant['Remarks']}
      </p>
      <img
        src={plant['Buyer Image Link']}
        alt="Buyer"
        className="buyer-photo"
      />
    </div>
  );
}

export default PrivateInfo;
