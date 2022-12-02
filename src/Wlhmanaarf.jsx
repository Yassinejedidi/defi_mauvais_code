import React, { useState } from "react";
import Card from "./Lkarta.jsx";
import { connect } from "react-redux";

import Checkbox from '@mui/material/Checkbox';
import ReactPaginate from "react-paginate";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const List = ({ list, titleSearched }) => {
  //FOR THE PAGINATION
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 6;
  const pagesVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(list.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // FILTER BY CATEGORY
  const [filter, setFilter] = useState(new Set());
  const filterCheck = (value) => {
    if (filter.has(value)) {
      setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.delete(value);
        return newSetFilter;
      });
    } else {
      setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.add(value);
        return newSetFilter;
      });
    }
  }
  return (
    <main className="main-content">
      {/* FILTER */}
      <h2>les symptômes sida</h2>
      <form className="filter-form">
        <div className="checkbox-select">
          <Checkbox {...label} selected={filter.has("syphilis")} data-testid="cheking" onClick={() => filterCheck("syphilis")} />

          <span class="label info">Syphilis</span>
          <Checkbox {...label} selected={filter.has("Infections à Chlamydiae")} onClick={() => filterCheck("Infections à Chlamydiae")} />
          <span class="label info">Infections à Chlamydiae</span>
          <Checkbox {...label} id="s2" selected={filter.has("Hépatite B")} onClick={() => filterCheck("Hépatite B")} />
          <span class="label info">Hépatite B</span>
          <Checkbox {...label} selected={filter.has("Herpès_génital")} onClick={() => filterCheck("Herpès_génital")} />
          <span class="label info">Herpès_génital</span>
          <Checkbox {...label} selected={filter.has("Mycose_génitale")} onClick={() => filterCheck("Mycose_génitale")} />
          <span class="label info">Mycose_génitale</span>
          <Checkbox {...label} selected={filter.has("Papillomavirus")} onClick={() => filterCheck("Papillomavirus")} />
          <span class="label info">Papillomavirus</span>
          <Checkbox {...label} selected={filter.has("chaude-pisse")} onClick={() => filterCheck("chaude-pisse")} />
          <span class="label info">chaude-pisse</span>

        </div>
      </form>
      <div className="movies">
        <div className="row">

          {list
            // FILTER BY MOVIEE TITLE
            .filter(
              el =>
                el.title
                  .toLocaleLowerCase()
                  .includes(titleSearched.toLocaleLowerCase())
            )
            // FILTER BY CATEGORY 
            .filter(el => {
              if (filter.size > 0 && !filter.has(el.category))
                return false;
              return true;
            })

            //THIS SLICE FOR THE PAGINATION
            .slice(pagesVisited, pagesVisited + moviesPerPage)

            .map((el) => {
              return <Card key={el.id} movie={el} />;
            })

          }

        </div >
        <div className="Containerrr">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>

    </main>
  );
};

const mapStateToProps = state => {
  return {
    list: state.movies,
    titleSearched: state.titleFilter
  };
};
const MovieListContainer = connect(mapStateToProps)(
  List
);

export default MovieListContainer;








