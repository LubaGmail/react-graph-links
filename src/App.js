import './App.css';
import React from 'react'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    useQuery,
    useMutation,
    gql
} from "@apollo/client";

import LinkList from './links/LinkList';
import Launch from './launch/Launch';
import Events from './events/Events';

const client = new ApolloClient({
  uri: 'http://localhost:9000/',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h4>App</h4>
        {/* <LinkList /> */}

        {/* <Launch /> */}

        <Events 
        />

      </div>
    </ApolloProvider>

  );
}

export default App;
