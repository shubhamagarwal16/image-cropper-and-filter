import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage';
import ImageCapture from './components/CaptureImage';
import Header from './components/header';
import Tool from './components/tool';

function App() {

  return (
    <>
      <Header />
      {/* <div className='container'> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/capture-image' component={ImageCapture} />
        <Route path='/tool' component={Tool} />
      </Switch>
      {/* </div> */}
    </>
  );
}

export default App;
