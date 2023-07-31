import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SerchForm';
import User from './components/User/User';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import Header from './components/Header/Header';
import Popup from './Popup/Popup';
import './App.scss';

const App = () => {
  const [login, setLogin] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [resultsPerPage] = useState(30);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [maxRepos, setMaxRepos] = useState(null)

  function handleInputChange(event) {
    setLogin(event.target.value);
  }

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.github.com/search/users?q=${login}&page=1&per_page=30&sort=${maxRepos}`
    const results = await fetchResults(url);
    setResults(results);
  };

  const onPageChange = async (page) => {
    const url = `https://api.github.com/search/users?q=${login}&page=${page}&per_page=30&sort=${maxRepos}`
    const results = await fetchResults(url);
    setPageNumber(page);
    setResults(results);
  };

  async function fetchResults(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setTotalResults(json.total_count);
      return json.items || [];
    } catch (e) {
      throw new Error(e);
    }
  }

  function popupClose() {
    setPopupOpen(false);
  }

  function openPopup() {
    setPopupOpen(true);
  }

  function handleCardClick(user) {
    setSelectedUser(user);
  }

  function showMaxRepos() {
    setMaxRepos('repositories');
  }

  function showRepos() {
    setMaxRepos(null);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <SearchForm
          handleInputChange = { handleInputChange }
          onSubmit = { onSearchSubmit }
          showMaxRepos = {showMaxRepos}
          showRepos = { showRepos }
        />
        <div className='results'>
          {results.map((user) => (
            <User
              user = { user }
              key = { user.login }
              url = { user.html_url }
              avatar = { user.avatar_url }
              login = { user.login }
              openPopup = { openPopup }
              onCardClick={handleCardClick}
            />
          ))}
        </div>
        <Pagination
          resultsPerPage = { resultsPerPage }
          totalResults = { totalResults }
          pageNumber = { pageNumber }
          onPageChange = { onPageChange }
        />
      </main>
      <Footer />
      <Popup  
          isOpen = { popupOpen } 
          onClose = { popupClose }
          user = { selectedUser }
      />
    </div>
  );
};

export default App;
