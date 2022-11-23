import React from 'react'
import front_main from '../../assets/front_main.png'
import './search-form.styles.css'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm(props) {
  const { handleSubmit, handleChange, handleSelectChange, query, queryButton } = props;
  const [startDate, setStartDate] = React.useState(new Date("2000/01/01"));
  const [endDate, setEndDate] = React.useState(new Date());
  const exampleQueries = [
    "anya", "ball", "spy fam", "kaguya sama spring",
    "evangelion 3.0 thrice", "chainsaw man", "pokemon",
    "Anime Geek", "Crunchyroll", "CBR", "basketball",
    "Mikikazu Komatsu", "Liam", "Cordell McWilliams",
    "jojo's bizarre one punch", "collaboration", "new season",
    "slime", "Iruma", "Forger family"
  ]
  return (
    <form className="row g-3 out" onSubmit={handleSubmit}>
      {/* Front Image */}
      <div className="front_main">
        <img width="100%" src={front_main} className="d-block mx-auto" style={{ maxWidth: "800px" }} alt="front_image" />
      </div>
      <div className="col-md-12 col-xl-8">
        <div className="input-group">
          <input className="form-control" type="text" name="query" placeholder='Search news' onChange={handleChange} value={query}></input>
          <button className="btn btn btn-outline-dark" onClick={handleSubmit}><i className="bi bi-search"> Search</i></button>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Items per page</label>
          <select className="form-select" id="inputGroupSelect01" onChange={handleSelectChange}>
            <option defaultValue={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="input-group mb-2">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="input-group mb-2">
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
      </div>
      <div className="col-md-12">
        <div className="example-query">
          <p><b>Example Query:</b></p>
          {exampleQueries.map(keyword =>
            <button key={keyword}
              className="btn border-bottom tag"
              onClick={queryButton}
              value={keyword}>
              {keyword}
            </button>)}
        </div>
      </div>
    </form>
  )
}
