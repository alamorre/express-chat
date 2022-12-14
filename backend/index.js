require("dotenv").config();

const express = require("express");
var cors = require("cors");
var axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // Fetch user from DB...

  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": process.env.CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // Write user into DB...

  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// Docs at rest.chatengine.io

app.listen(3001);
