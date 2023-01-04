import { React } from 'react'
import Navigation from './components/Navigation';
import ErrorComponent from './components/ErrorComponent';
import Main from './components/Main/Main';
import Gallery from './components/Gallery/Gallery';
import Posts from './components/Posts/Posts'
import ContactsComponent from './components/Contacts/ContactsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='contacts' element={<ContactsComponent/>}/>
          <Route path='*' errorElement={<ErrorComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
