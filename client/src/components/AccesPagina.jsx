import { useState } from "react";
import { message } from "../config";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

function AccesPagina({ semnatura, adresa }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const accesPaginaHandler = async () => {
    try {
      const recoveredAdress = ethers.verifyMessage(message, semnatura);
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
        if (!response.ok) {
          const errorData = await response.json();
          console.error(errorData.error);
          return;
        }
        const data = await response.json();
        const token = data.token;
        navigate("/welcome");
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
