export const VinResult = ({ data }) => {
  const { vin, details } = data;

  return (
    <div className="results-container">
      <p><strong>VIN:</strong> {vin}</p>
      <ul>
        <li><strong>Make:</strong> {details.Make}</li>
        <li><strong>Model:</strong> {details.Model}</li>
        <li><strong>Year:</strong> {details["Model Year"]}</li>
          <li><strong>Doors:</strong> {details.Doors}</li>
          <li><strong>Drive Type:</strong> {details["Drive Type"]}</li>
      </ul>
    </div>
  );
};
