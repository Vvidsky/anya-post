import React from 'react';
import './card.component.css'


function Card({ news, searchQuery }) {
  const data = news._source;

  console.log(searchQuery);

  function getHighlightedText(text, higlight) {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b style={{ backgroundColor: "#e8bb49" }}>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }

  return (
    <div className='card border h-100' style={{ height: "500px" }}>
      <img className="thumbnail card-img-top" src={data.thumbnail} alt="thumbnail" />
      <div className="card-body p-3">
        <h5 className="heading card-title">{getHighlightedText(data.heading, searchQuery)}</h5>
        <p className="metadata card-text" style={{ overflow: "hidden" }}>
          {data.metadata}<span id="dots">...</span>
        </p>
        <a href={data.url} target="_blank" rel="noreferrer" className="stretched-link">Read News</a>
      </div>
      
      <div className="card-footer">
        <p className="text-muted">Score {news._score}</p>
      </div>
    </div>
  )
}

export default React.memo(Card)
