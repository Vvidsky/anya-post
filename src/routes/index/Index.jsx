import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import logo from '../../assets/Logo.png';
import Card from '../../components/news-card/card.component';

export default function Index() {
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
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="d-flex flex-column align-items-center justify-content-center m-auto">
        <img src={logo} alt="Logo" style={{width: "50%"}}/>
        <form onSubmit={handleSubmit} className="m-3 w-50">
          <input className="form-control" type="text" name="news-search" placeholder='search news' onChange={handleChange} value={query}></input>
          <button className="form-control" type="Submit" >Search</button>
        </form>
      </div>


      <div className="row row-cols-1 row-cols-md-4 row-cols-xl-5 g-4">
        {searchResult.map((news) => {
          return (
            <div className="col"><Card key={news._id} news={news} /></div>)
        })}
      </div>
      <div>

      </div>


    </div>
  )
}
