import React, { useState } from "react";
import { message } from "../config";

function ButtonLogin({ setAdresaWallet, setSemnatura }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const walletLoginHandler = async () => {
    try {
      if (!window.ethereum) {
        setErrorMessage("Instaleaza MetaMask!");
        return;
      }
      const result = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAdresaWallet(result[0]);

      const mesajSemnat = await window.ethereum.request({
        method: "personal_sign",
        params: [message, result[0]],
      });
      setSemnatura(mesajSemnat);
    } catch (err) {
      console.log(err);
      setErrorMessage("A aparut o eroare la conectare");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={walletLoginHandler}>Login</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default ButtonLogin;
