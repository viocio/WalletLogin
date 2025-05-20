const express = require("express");
const cors = require("cors");

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

  // Pentru exemplu, răspundem cu succes
  res.json({ token: "exemplu.jwt.token" });
});

// Pornește serverul pe portul 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server ascultă pe http://localhost:${PORT}`);
});