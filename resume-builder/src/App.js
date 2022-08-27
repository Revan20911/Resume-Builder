
import React, {Component} from 'react';
import './App.css';
import Preview from './Components/Preview';
import Main from './Components/Main';
import Header from './Components/Header';

class App extends Component {
  constructor (){
    super();

  }


  render() {

    return (
      <>
        <Header />
        <Main />
        <Preview />
  
      </>
    );
  
  }
}
  

export default App;
