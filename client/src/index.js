import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';
import App from './components/App';
import AddBug from './components/AddBug';
import TopNav from './components/TopNav';
import Home from './components/Home';
import configureStore from './stores/index';
import styles from './styles.css';
const store = configureStore();

const root = document.querySelector('#root');

let AuthRoute = (props) => {
  let isLoggedIn = store.getState().isAuthenticated;
  if (isLoggedIn == null) return <div>Loading</div>;
  else if (!isLoggedIn) return <Redirect to="/auth" />;
  return <Route {...props} />;
};

let isLoggedIn = true;

const jsx = (
  <Provider store={store}>
    <Router>
      <TopNav isLoggedIn={isLoggedIn} />
      <aside>
        <nav>
          {isLoggedIn && (
            <ul>
              <li>
                <NavLink activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/addbug">
                  AddBug
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/addproject">
                  Add Project
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </aside>

      <Switch>
        <Route exact path="/" component={App} />
        <AuthRoute exact path="/home" component={Home} />
        <AuthRoute path="/addbug" component={AddBug} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(jsx, root);
