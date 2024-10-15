import { ReactComponent as Logo } from './logo.svg';  // Import SVG as React component
import reactLogo from './assets/react.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetch data based on environment variable
    fetch(`${import.meta.env.VITE_API_URL}/data`)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  console.log(import.meta.env.VITE_API_URL); // Access variables prefixed with VITE_

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo style={{ width: '200px', height: '200px' }} />  {/* Use the SVG as a component */}
          
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     <div>
      <h1>{import.meta.env.VITE_APP_MODE} Environment</h1>
      <p>API URL: {import.meta.env.VITE_API_URL}</p>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
    </>
  );
}

export default App;
