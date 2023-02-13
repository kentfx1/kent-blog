
import Navbar from './Navbar'
import React, { Component } from 'react'
// import Form from './Form'
// import Test from './Test';
// import Article from './Article';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home'
import Create from './Create';

class App extends Component {

  
  render() {

    
    return (
      <Router>
        
          <div className='content'>
          <Navbar/>
          </div>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>

          <Route path="/Contact">
            <Contact/>
          </Route>
          
          <Route path="/Create">
            <Create/>
          </Route>

        </Switch>
      </Router>
  );
  }
  }
export default App;



