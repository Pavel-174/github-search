import React, { useState } from "react";
import './SearchForm.scss';

const SearchForm = ({ handleInputChange, onSubmit, showMaxRepos, showRepos }) => {

  const [selector, setSelector] = useState(false);

  function handleReposSelector() {
    const newSelector = !selector;
    setSelector(newSelector);
    selector === true ? showRepos() : showMaxRepos();
  } //показывает наибольшее колличество репозиторив в поиске или наиболее точный результат поиска

  return (
    <form className="search" onSubmit={onSubmit}>
      <div className="search__box">
        <input className="search__input" 
          placeholder="User login" 
          type="text" 
          required 
          onChange={ handleInputChange }
        />
        <button 
          type="submit" 
          className="search__button" 
        >Search</button>
      </div>
      <div className="search__check">
        <input type="checkbox" checked={selector} onChange={handleReposSelector}></input>
        <span>Max repositories</span>
      </div>
    </form>
  );
};

export default SearchForm;
