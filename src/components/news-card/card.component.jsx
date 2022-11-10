import React from 'react';
import './card.component.css'


export default function Card({ news, bestMatch }) {
  const data = news._source

  return (
    <div className='card border h-100' style={{ height: "500px" }}>
      <img className="thumbnail card-img-top h-100" src={data.thumbnail} alt="thumbnail" />
      <div className="card-body p-3">
        <h5 className="heading card-title">{data.heading}</h5>
        <p className="metadata card-text" style={{ overflow: "hidden" }}>
          {data.metadata}<span id="dots">...</span>
        </p>
        <a href={data.url} target="_blank" rel="noreferrer" className="stretched-link btn btn-primary btn-sm mt-2">Read News</a>
      </div>
      
      <div className="card-footer">
        <p className="text-muted">Score {news._score} {bestMatch ? "[Best Match]" : ""}</p>
      </div>
    </div>
  )
}
