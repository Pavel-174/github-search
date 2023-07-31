import React from "react";
import PagePagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";
import "./Pagination.scss";


const Pagination = ({ totalResults, onPageChange, pageNumber }) => (

  <div
    className={
      "pagination_box" + (totalResults === 0 ? " hide" : " show")
    }
  > 
    <p className="pagination_count">Users: {totalResults}</p>
    <PagePagination
      onChange={ onPageChange }
      current={ pageNumber }
      total={ totalResults }
      pageSize={ 30 }
      showLessItems
      locale={ localeInfo }
    />
  </div> 
);

export default Pagination;
