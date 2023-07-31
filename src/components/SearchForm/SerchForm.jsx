import './SearchForm.scss';
import React, { useState } from "react";

const SearchForm = () => {

  return (
    <form className="search">
      <div className="search__box">
        <input className="search__input" 
          placeholder="User login" 
          type="text" 
          required 
        />
        <button 
          type="submit" 
          className="search__button" 
        >Search</button>
      </div>
    </form>
  );
};

export default SearchForm;