import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SerchForm';
import User from './components/User/User';
import './App.scss';

const App = () => {

  return (
    <div className="app">
      <main className="main">
        <h2>GitHub Search</h2>
        <SearchForm        />
        <div>
          {/* {results.map((user) => (
            <User
              key={user.login}
              avatar={user.avatar_url}
              login={user.login}
            />
          ))} */}
        </div>
      </main>
    </div>
  );
};

export default App;
