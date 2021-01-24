import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import store from './redux/store';
import Title from './components/Title';
import AddAncestor from './components/AddAncestor';
import ViewAncestors from './components/ViewAncestors';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container maxWidth="sm">
        <Title />
        <AddAncestor />
        <ViewAncestors />
      </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
