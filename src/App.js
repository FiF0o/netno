import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router';
import AppRoutes from './components/shell/AppRoutes';
import store from './store';
import { Provider } from 'react-redux';
// import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store }>
          <Router history={ hashHistory }>
            { AppRoutes }
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
//
// <Button bsStyle="primary" bsSize="large" active>
//           Primary button
// </Button>