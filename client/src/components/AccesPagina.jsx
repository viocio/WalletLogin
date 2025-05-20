import { useState } from "react";
import { message } from "../config";

function AccesPagina({ semnatura, adresa }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const accesPaginaHandler = async () => {
    try {
      const recoveredAdress = ethers.utils.verifyMessage(message, semnatura);
      if (adresa.toLowerCase() === recoveredAdress.toLowerCase()) {
        const response = await fetch("http://localhost:3001/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            address: adresa,
            signature: semnatura,
            message: message,
          }),
        });
        const data = await response.json();
      } else {
        setErrorMessage("Semnatura nu este valida.");
      }
    } catch (err) {
      setErrorMessage("Eroare la procesarea autentificării.");
      console.error(err);
    }
  };
  return (
    <div style={{ margin: "20px" }}>
      {!errorMessage ? (
        adresa && (
          <button onClick={accesPaginaHandler}>Acces pentru: {adresa}</button>
        )
      ) : (
        <div style={{ color: "red" }}>{errorMessage}</div>
      )}
    </div>
  );
}

export default AccesPagina;
