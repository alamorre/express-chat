require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
var cors = require("cors");
var axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/login", async (req, res) => {
  const { username } = req.body;
  const accessToken = generateAccessToken(username);

  // Fetch user on Chat Engine
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": process.env.CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": accessToken,
      },
    });
    res.json({ accessToken });
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/register", async (req, res) => {
  const { username, email, first_name, last_name } = req.body;
  const accessToken = generateAccessToken(username);

  // Create user on Chat Engine
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, email, first_name, last_name, secret: accessToken },
      { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.json({ accessToken });
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

app.listen(4000);
