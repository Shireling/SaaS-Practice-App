import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDqzemTCUpOSwvuctTbb2eO3kFZc6rurr8",
      authDomain: "manager-f70c3.firebaseapp.com",
      databaseURL: "https://manager-f70c3.firebaseio.com",
      projectId: "manager-f70c3",
      storageBucket: "manager-f70c3.appspot.com",
      messagingSenderId: "1028287083805"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
