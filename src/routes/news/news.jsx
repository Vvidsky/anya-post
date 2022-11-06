import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function News() {
    let { newsId } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        async function loadNews() {
            const result = await axios.get(`http://localhost:4000/${newsId}`);
            console.log("result", result.data);
            setNews(result.data._source);
        }
        loadNews();
    }, []);

    return (
        // <div className="container-fluid">
            <div className="container" id="test">
                <h1>{news.heading}</h1>
                <h3>{news.sub_heading}</h3>
                <p>{news.date_created} {news.author}</p>
                <hr></hr>
                <div className="newsbie " dangerouslySetInnerHTML={{ __html: news.body_content }}></div>
            </div>
        // </div>
    )
}
