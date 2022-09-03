
import React, {Component} from 'react';
import Preview from './Components/Preview';
import Main from './Components/Main';
import Header from './Components/Header';
import styled from 'styled-components';

class App extends Component {

  render() {

    return (
      <>
        <Header />
        <Main />
      </>
    );
  
  }
  
}

const ContentWrapper = styled.div

`
display: flex;
flex-direction: row;

`;


export default App;
