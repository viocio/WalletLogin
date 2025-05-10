import React, { useState } from "react";

function ButtonLogin() {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const walletLoginHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage("A apărut o eroare la conectare.");
        });
    } else {
      setErrorMessage("Instalează MetaMask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={walletLoginHandler}>Login</button>
      {defaultAccount && <p>Wallet conectat: {defaultAccount}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default ButtonLogin;
