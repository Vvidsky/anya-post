const { Client } = require("@elastic/elasticsearch");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config()

app.use(cors())

const client = new Client({
  node: "https://localhost:9200",
  auth: {
    username: "elastic",
    password: process.env.ELASTIC_PASSWORD,
  },
  tls: {
    ca: fs.readFileSync("./http_ca.crt"),
    rejectUnauthorized: false,
  },
});

app.get("/", async (req, res) => {
  const result = await client.search({
    index: "anime-news",
    "query": {
        "query_string": {
          "query": "Kaguya sama ultra romantic"
        }
      }
  });
  res.send(result);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
