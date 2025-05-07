import { useState } from 'react';

function App() {
  const [mesaj, setMesaj] = useState("Salut!");

  function schimbaMesajul() {
    setMesaj("Ai apăsat pe buton! 🎉");
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{mesaj}</h1>
      <button onClick={schimbaMesajul}>
        Apasă-mă
      </button>
    </div>
  );
}

export default App;
