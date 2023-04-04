import React from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

const Pagination = ({ totalCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
    return (  
        <div className="pagination">
  <ul className="pagination-pages">
    {pages.map(page => (
        <li 
        className= {page === currentPage? "pagination-page-active": "pagination-page"}
         key={page}>
            <NavLink onClick={() => onPageChange(page)} >{page}</NavLink>
        </li>
    ))}
  </ul>
</div>
    );
}
 
export default Pagination;