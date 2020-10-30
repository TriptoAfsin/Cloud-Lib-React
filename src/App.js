import './App.css';
import Navbar from './components/pages/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Submit from './components/pages/static pages/Submit';
import Request from './components/pages/static pages/Request';
import WebApps from './components/pages/static pages/WebApps';
import About from './components/pages/static pages/About';
import Team from './components/pages/static pages/Team';
import Help from './components/pages/static pages/Help';
import Home from './components/pages/dynamic pages/Home';
import BookSuggestor from './components/pages/dynamic pages/BookSuggestor';
import BrowseBooks from './components/pages/dynamic pages/BrowseBooks';

function App() {
  return (
    <Router >
     <Navbar></Navbar>
     <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Cloud-Lib-React/books-suggestor' exact component={BookSuggestor}></Route>
          <Route path='/Cloud-Lib-React/browse-books' exact component={BrowseBooks}></Route>
          <Route path='/Cloud-Lib-React/help' exact component={Help}></Route>
          <Route path='/Cloud-Lib-React/team' exact component={Team}></Route>
          <Route path='/Cloud-Lib-React/about' exact component={About}></Route>
          <Route path='/Cloud-Lib-React/apps' exact component={WebApps}></Route>
          <Route path='/Cloud-Lib-React/submit' exact component={Submit}></Route>
          <Route path='/Cloud-Lib-React/request' exact component={Request}></Route>
      </Switch>
    </Router>
  );
}

export default App;
