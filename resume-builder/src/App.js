
import React, {Component} from 'react';
import Preview from './Components/Preview';
import Main from './Components/Main';
import Header from './Components/Header';

class App extends Component {

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
