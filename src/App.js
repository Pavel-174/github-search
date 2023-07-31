import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SerchForm';
import User from './components/User/User';
import fetchResults from './utils/API';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  const [login, setLogin] = useState('');
  const [results, setResults] = useState([]);

  function handleInputChange(event) {
    setLogin(event.target.value);
    console.log(login)
  }

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    const results = await fetchResults(login);
    // настроить пагинацию
    setResults(results.splice(0, 30));
  };

  return (
    <div className="app">
      <main className="main">
        <SearchForm
          handleInputChange = { handleInputChange }
          onSubmit = { onSearchSubmit }
        />
        <div className='results'>
          {results.map((user) => (
            <User
              key = { user.login }
              url = { user.url }
              avatar = { user.avatar_url }
              login = { user.login }
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
