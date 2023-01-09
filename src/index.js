import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Show from './pages/Show';
import Header from './components/header/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ShoppingCartPage from './pages/ShoppingCartPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={< App />}></Route>
        <Route exact path='/account' element={{/*link to account us*/}}></Route>
        <Route exact path='/programmering' element={{/*link to programmering us*/}}></Route>
        <Route exact path='/show/:showId' element={<Show/>}></Route>
        <Route exact path='/ticket' element={{/*link to ticket us*/}}></Route>
        <Route exact path='/begunstigers' element={{/*link to begunstigers us*/}}></Route>
        <Route exact path='/admin' element={{/*link to admin us*/}}></Route>
        <Route exact path='/winkelwagen' element={<ShoppingCartPage/>}></Route>
      </Routes>
      {/* footer */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
