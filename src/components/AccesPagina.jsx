import { useState } from "react";
import { message } from "../config";

function AccesPagina({ semnatura, adresa }) {
  const accesPaginaHandler = async () => {
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
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      {adresa && (
        <button onClick={accesPaginaHandler}>Acces pentru: {adresa}</button>
      )}
    </div>
  );
}

export default AccesPagina;
