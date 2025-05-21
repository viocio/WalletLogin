const express = require("express");
const cors = require("cors");
const ethers = require("ethers");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;


const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.post("/api/login", (req, res) => {
  const { address, signature, message } = req.body;
  console.log("Am primit:", address, signature, message);

  // Aici faci validarea semnăturii (exemplu simplu)
  if (!address || !signature || !message) {
    return res.status(400).json({ error: "Lipsesc date necesare" });
  }

  // TODO: verifică semnătura cu ethers.js și dacă e validă, emite JWT
  try {
  const recoveredAddress = ethers.verifyMessage(message, signature);
  if(recoveredAddress.toLowerCase() === address.toLowerCase()) {
    const token = jwt.sign({address: address}, jwtSecret);
    res.json({token});
  } else {
      res.status(401).json({error: "Semnatura invalida"});
  }
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: "Eroare la procesarea semnăturii." });
  };
});

// Pornește serverul pe portul 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server ascultă pe http://localhost:${PORT}`);
});