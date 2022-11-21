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
    username: process.env.ELASTIC_USER,
    password: process.env.ELASTIC_PASSWORD,
  },
  tls: {
    ca: fs.readFileSync("./http_ca.crt"),
    rejectUnauthorized: false,
  },
});

const index = "anya-post";

app.get("/", async (req, res) => {
  let { query_string } = req.query;
  try {
    const result = await client.search({
      index: index,
      query: {
        query_string: {
          query: query_string,
          fields: ["heading^2", "metadata^2", "body_content"],
        },
      },
      size: 10000
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
      index: index,
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
