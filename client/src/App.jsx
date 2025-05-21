import ButtonLogin from "./components/ButtonLogin";
import Titlu from "./components/Titlu";
import AccesPagina from "./components/AccesPagina";
import FinalPage from "./components/FinalPage";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [adresaWallet, setAdresaWallet] = useState(null);
  const [semnatura, setSemnatura] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          {/* Folosește 'element' pentru a defini componentele */}
          <Route path="/welcome" element={<FinalPage />} />

          <Route
            path="/"
            element={
              <>
                <Titlu />
                <ButtonLogin
                  setAdresaWallet={setAdresaWallet}
                  setSemnatura={setSemnatura}
                />
                {semnatura && adresaWallet && (
                  <AccesPagina semnatura={semnatura} adresa={adresaWallet} />
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
