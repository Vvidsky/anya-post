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
  try {
    const result = await client.search({
      index: "anime-news",
      "query": {
          "query_string": {
            "query": String(req.query.query_string)
          }
        }
    });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
  
  
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
