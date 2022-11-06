const { Client } = require("@elastic/elasticsearch");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());

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
      index: "test-anime",
      query: {
        query_string: {
          query: String(req.query.query_string),
        },
      },
      size: 20
    });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

app.get("/:newsId", async (req, res) => {
  console.log(req.params.newsId)
  try {
    const result = await client.get({
      index: "test-anime",
      id: req.params.newsId
    });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
