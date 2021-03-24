import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/friends';
import FriendForm from './components/friendform';
import { axiosWithAuth } from './components/axiosWithAuth'
function App() {

  const logout = () => {
    axiosWithAuth()
      .post('api/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = '/login'

      })
      .catch(err => {
        console.log(err)
      })

  }
  return (
    <Router>
      <div className="App">

        <Link to="/login">Login   </Link>
        <Link to="/friends">Friends   </Link>
        <Link onClick={logout}>Logout</Link>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
        </Switch>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    </Router>
  );
}

export default App;
