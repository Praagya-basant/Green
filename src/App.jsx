import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import PublicInfo from './components/PublicInfo';
import PrivateInfo from './components/PrivateInfo';
import './App.css';

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/1wePsX0oxIO5nqyiSgV4j_PmVsLWcB8wC65ESl7hb7FA/gviz/tq?tqx=out:csv';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const qrId = urlParams.get('qrId');

  const [data, setData] = useState([]);
  const [code, setCode] = useState('');
  const [showPrivate, setShowPrivate] = useState(false);

  useEffect(() => {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  }, []);

  const plant = data.find((item) => item['QR ID'] === qrId);

  const handleCodeSubmit = () => {
    if (code === 'basant123') {
      setShowPrivate(true);
    } else {
      alert('Wrong code');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Plant Information</h2>

      {plant ? (
        <div>
          <PublicInfo plant={plant} />

          {!showPrivate && (
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter access code"
              />
              <button onClick={handleCodeSubmit}>View Full Info</button>
            </div>
          )}

          {showPrivate && <PrivateInfo plant={plant} />}
        </div>
      ) : (
        <p>Plant not found</p>
      )}
    </div>
  );
}

export default App;
