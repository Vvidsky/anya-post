import React from 'react';
import './card.component.css'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faStar, faFeather } from '@fortawesome/free-solid-svg-icons'
import  crunchyroll_logo  from '../../assets/crunchyroll_logo.png'
import CBR_logo  from '../../assets/cbr_logo.png'
import animeGeek_logo from '../../assets/animeGeek_logo.png'

function Card({ news, searchQuery }) {
  const data = news._source;
  searchQuery = searchQuery.replaceAll(' ', '|')
  const regexp = new RegExp(`(${searchQuery})`, "gi");

  function getHighlightedText(text, highlight) {
    // Split text on higlight term, include term itself into parts, ignore case
    if (text) {
      var parts = text.split(new RegExp(`(${highlight})`, "gi"));
      return parts.map((part) => (
        part.toLowerCase().match(regexp) ? (
          <b key={Math.random()} style={{ backgroundColor: "rgb(237, 110, 160, 0.75)", color: "white", padding: "2px", borderRadius: "5px" }}>{part}</b>
        ) : (
          part
        )
      ));
    }
  }

  function displayLogo(publisher) {
    const selectorElement = document.getElementById("logo_img");
    // Conditional Images (logo)
    if (publisher === "Crunchyroll") {
      selectorElement.innerHTML = <img src={crunchyroll_logo} alt="crunchyroll_logo" />;
    } else if (publisher === "CBR") {
      selectorElement.innerHTML = <img src={CBR_logo} alt="CBR_logo" />
    } else if (publisher === "Anime Geek") {
      selectorElement.innerHTML = <img src={animeGeek_logo} alt="animeGeek_logo" />;
    }
    return selectorElement;
  }

  return (
    <div className='card border h-100 shadow-sm p-3 bg-white rounded' style={{ height: "500px" }}>
      <img className="thumbnail card-img-top" src={data.thumbnail} alt="thumbnail" />
      <div className="card-body p-3">
        <h5 className="heading card-title">
          {getHighlightedText(data.heading, searchQuery)}
        </h5>
        <b style={{ color: "#ff5291" }}>
          <FontAwesomeIcon className="feather-icon" icon={faFeather} />
          {data.date_created}
        </b>
        <b className='author_name'>
          {data.author}
        </b>
        <p className="metadata card-text" style={{ overflow: "hidden" }}>
          {getHighlightedText(data.metadata, searchQuery)}<span id="dots">...</span>
        </p>
        <button type="button" className="btn-hover color" style={{ marginTop: "0.5em" }}>
          <a href={data.url} target="_blank" rel="noreferrer" className="stretched-link">Read News</a>
        </button>
      </div>

      <div className="card-footer">
        <p className="text-muted"><FontAwesomeIcon className="star-icon" icon={faStar} />Score {news._score}</p>
        <div id="logo_img">
          { displayLogo(data.publisher) }
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card)
