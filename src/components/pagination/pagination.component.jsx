import React from 'react'
import { Link } from 'react-router-dom'
import './pagination.component.css'

export default function Pagination({ nPages, currentPage, setCurrentPage }) {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    let active = "page-item active";
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <Link className="page-link"
                        onClick={prevPage}
                        href='#'>
                        {'<<'}
                    </Link>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}

                        className={`page-item ${currentPage === pgNumber ? active : 'page-item'} `}>
                        <Link onClick={() => setCurrentPage(pgNumber)} className='page-link' href='#'>{pgNumber}</Link>
                    </li>
                ))}
                <li className="page-item">
                    <Link className="page-link" onClick={nextPage} href='#'>{'>>'}</Link>
                </li>
            </ul>
        </nav>
    )
}
