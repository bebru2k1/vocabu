import { ColorModeScript, theme, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import DetailVocabulary from './component/DetailVocabulary.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header.jsx';
import SadGNNB from './component/SadGNNB.jsx';

ReactDOM.render(
  <StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Switch>
          <Route exact path="/">
            <Header />
            <App />
          </Route>
          <Route path="/vocabulary/:course">
            <Header />
            <DetailVocabulary />
          </Route>
          <Route path="/gnnb">
            <SadGNNB />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
