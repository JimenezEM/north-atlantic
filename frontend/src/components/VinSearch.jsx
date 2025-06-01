import { useState, useEffect } from 'react';
import api from '../api.js';
import { VinResult } from './VinResult';
import QRCode from 'qrcode';

export const VinSearch = () => {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setQrUrl('');
    try {
      const res = await api.get(`/decode-vin?vin=${vin}`);
      setResult(res.data);
      generateQrCode(vin);
    } catch (err) {
      setError('Could not decode VIN. Please try again!');
    }
  };

  const generateQrCode = async (text) => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrUrl(url);
    } catch (err) {
      console.error(err);
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
        {result && (
          <div className="results-flex">
            <VinResult data={result} />
            {qrUrl && (
              <div className="qr-code">
                <img src={qrUrl} alt="VIN QR Code" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
