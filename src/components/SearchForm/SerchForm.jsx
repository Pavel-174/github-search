import React, { useState, useEffect } from "react";
import api from "../../utils/API";
import './SearchForm.scss';

const SearchForm = () => {

  const [login, setLogin] = useState('');

//   useEffect(() => {
//     setLogin(searchUsers);
//   }, [searchUsers]);

  function handleInputChange(event) {
    setLogin(event.target.value);
  }

  return (
    <form className="search">
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