import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from './news/card.component';

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState('');

  async function fetchData(query) {
    const result = await axios.get(`http://localhost:4000/?query_string=${query}`);
    console.log("result", result.data.hits.hits);
    setSearchResult(result.data.hits.hits);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(query);
    setQuery('');
  }

  console.log(query);

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <input className="form-control" type="text" name="news-search" placeholder='search news' onChange={handleChange} value={query}></input>
        <button className="form-control" type="Submit">Search</button>
      </form>
      <div class="row row-cols-1 row-cols-md-4 row-cols-xl-5 g-4">
          {searchResult.map((news) => {
            return (
            <div className="col"><Card key={news._id} news={news} /></div>)
          })}
      </div>



    </div>
  )
}
