import axios from 'axios';
import React, { useState } from 'react';
import './Home.styles.css';
import Card from '../components/news-card/card.component';
import Pagination from '../components/pagination/pagination.component';
import SearchForm from '../components/searchform/search-form.component.jsx'
import not_match from '../assets/not_match.png'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(query);
    setSearchQuery(query);
    setCurrentPage(1);
  }

  const queryButton = (e) => {
    e.preventDefault();
    const { value } = e.target;
    fetchData(value);
    setSearchQuery(value);
    setQuery(value)
    setCurrentPage(1);
  }

  return (
    <div className="d-flex flex-column bd-highlight justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="container mt-3">
        <SearchForm handleChange={(e) => handleChange(e)} handleSelectChange={(e) => handleSelectChange(e)} handleSubmit={(e) => handleSubmit(e)} query={query} queryButton={(e) => queryButton(e)}></SearchForm>
      </div>

      {searchQuery ? <h3 className="text-center">Search result for <b>"{searchQuery}"</b></h3> : null}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 g-4 mt-1 mb-3">
        {currentRecords.map((news) => {
          return (
            <div key={news._id} className="col">
              <Card news={news} searchQuery={searchQuery} />
            </div>)
        })}
      </div>


      {found ? searchResult.length > 0 ? <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> : null : <div className='col-md-12'>
        <img width="100%" src={not_match} className="d-block mx-auto" style={{ maxWidth: "800px" }} alt='not_match' />
      </div>}
    </div>
  )
}
