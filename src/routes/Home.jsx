import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:4000");
      console.log("result", result.data.hits.hits);
      setSearchResult(result.data.hits.hits);
    }
    fetchData();
  }, []);
  console.log(searchResult);

  return (
    <div>
      <h1>Home</h1>
      {searchResult.map((news) => {
        return <p key={news._id}>{news._source.Heading}</p>
      })}


    </div>
  )
}
