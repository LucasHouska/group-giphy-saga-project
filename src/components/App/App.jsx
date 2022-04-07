import React, { useEffect } from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App(props) {
  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>
        <nav>
          <ul>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>

      </div>
    </Router>
  );
}

export default App;
