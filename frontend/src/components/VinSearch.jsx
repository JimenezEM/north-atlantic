import { useState } from 'react';
import api from '../api.js';
import { VinResult } from './VinResult';


export const VinSearch = () => {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    try {
      const res = await api.get(`/decode-vin?vin=${vin}`);
      setResult(res.data);
      //console.log("API response:", res.data); // 👀

    } catch (err) {
      setError('Could not decode VIN. Please try again!');
    }
  };

  return (
      <div className="decoder-container">
        <h1>VIN NUMBER</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter VIN number"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
          /><br />
          <button type="submit">DECODE</button>
        </form>

        <div className="results">
          {error && <p className="error">{error}</p>}
          {result && <VinResult data={result} />}
        </div>
      </div>
  );
}
