import axios from 'axios';
import React, { useState } from 'react';
import './Home.styles.css';
import Card from '../components/news-card/card.component';
import Pagination from '../components/pagination/pagination.component';

export default function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('')

  // src: https://levelup.gitconnected.com/a-simple-guide-to-pagination-in-react-facd6f785bd0
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const indexOfLastRecord = currentPage * pageSize;
  const indexOfFirstRecord = indexOfLastRecord - pageSize;
  const currentRecords = searchResult.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(searchResult.length / pageSize)

  const [found, setFound] = useState(true);

  async function fetchData(query) {
    const params = new URLSearchParams([['query_string', query]]);
    const result = await axios.get(`http://localhost:4000/`, { params });
    console.log("result", result.data.hits.hits);
    setSearchResult(result.data.hits.hits);
    if (result.data.hits.hits.length === 0) {
      setFound(false);
    } else {
      setFound(true);
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setPageSize(e.target.value);
    setCurrentPage(1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(query);
    setSearchQuery(query);
    setCurrentPage(1);
  }

  return (
    <div className="d-flex flex-column bd-highlight justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="container mt-3">
        <form className="row g-3 out" onSubmit={handleSubmit}>
          <div className="col-md-6 col-xl-9 ">
            <div className="input-group">
              <input className="form-control" type="text" name="news-search" placeholder='search news' onChange={handleChange} value={query}></input>
              <button className="btn btn btn-outline-dark" onClick={handleSubmit}><i className="bi bi-search"> Search</i></button>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="input-group mb-2">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Items per page</label>
              <select className="form-select" id="inputGroupSelect01" onChange={handleSelectChange}>
                <option defaultValue={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-1 mb-3">
        {currentRecords.map((news) => {
          return (
            <div key={news._id} className="col">
              <Card news={news} searchQuery={searchQuery}/>
            </div>)
        })}
      </div>


      {found ? searchResult.length > 0 ? <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> : null : <div className='text-center'>No matched result</div>}
    </div>
  )
}
