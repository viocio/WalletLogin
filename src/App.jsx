import ButtonLogin from "./components/ButtonLogin";
import Titlu from "./components/Titlu";
import AccesPagina from "./components/AccesPagina";
import { useState } from "react";
import "./App.css";

function App() {
  const [adresaWallet, setAdresaWallet] = useState(null);
  const [semnatura, setSemnatura] = useState(null);

  return (
    <div>
      <Titlu />
      <ButtonLogin
        setAdresaWallet={setAdresaWallet}
        setSemnatura={setSemnatura}
      />
      {semnatura && adresaWallet && (
        <AccesPagina semnatura={semnatura} adresa={adresaWallet} />
      )}
    </div>
  );
}

export default App;
