import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({news}) {

  return (
    <div className='border h-100'>
      <img className="card-img-top" src={news._source.Thumbnail} alt="haha" />
      <div className="card-body p-3">
        <h5 className="card-title">{news._source.Heading}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link href="#" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  )
}
