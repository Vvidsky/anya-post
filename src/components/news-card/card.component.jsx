import React from 'react';
import { Link } from 'react-router-dom';


export default function Card({ news, bestMatch }) {
  const metadata = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatibus in quis tempore natus officiis, dicta cupiditate asperiores, odio, voluptatum mollitia sapiente culpa quam. Dolore minus architecto provident explicabo quos.";

  return (
    <div className='card border h-100' style={{ height: "450px" }}>
      <img className="card-img-top" src={news._source.thumbnail} alt="haha" />
      <div className="card-body p-3">
        <h5 className="card-title">{news._source.heading} {bestMatch ? <span>[Best Match]</span> : ""}</h5>
        <p className="card-text" style={{ overflow: "hidden", maxHeight: "9ch" }}>
          {metadata.substring(0, 100)}<span id="dots">...<Link to={`news/${news._id}`}>continue</Link></span>
        </p>


      </div>
      <div className='m-3 mt-0'><a href={news._source.url} target="_blank" rel="noreferrer" className="btn btn-primary align-self-end">Read at Crunchyroll</a></div>
    </div>
  )
}
