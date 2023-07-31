import React from "react";
import './SearchForm.scss';

const SearchForm = ({ handleInputChange, onSubmit }) => {

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
    </form>
  );
};

export default SearchForm;
