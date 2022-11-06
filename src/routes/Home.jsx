import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Card from '../components/news-card/card.component';

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
      <h1 className='text-center'>Home</h1>
      <form className="m-3 p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" type="text" name="news-search" placeholder='search news' onChange={handleChange} value={query}></input>
        </div>
        <button className="form-control" type="Submit">Search</button>
      </form>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
        {searchResult.map((news, index) => {
          return (
            <div key={news._id} className="col"><Card news={news} bestMatch={index===0? true: false} /></div>)
        })}
      </div>



    </div>
  )
}
