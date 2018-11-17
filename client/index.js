import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';
import App from './components/App'
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  // when mutation occurs song id updates along with the component
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList}></IndexRoute>  
          </Route>
          <Route path="/songs/new" component={SongCreate}/>
          <Route path="/songs/:id" component={SongDetail}></Route>
        </Router>
      </ApolloProvider>
    )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
