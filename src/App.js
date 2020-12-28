import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


class App extends Component {
  state = {
    username: 'Joy Wanjiku'
  }
  render (){
    return (
      <div className="App">
        <UserInput />
        <UserOutput  userName={this.state.username}/>
        <UserOutput userName="Matt"/>
        <UserOutput userName="Jane"/>
  
      </div>
    );

  }

  
}

export default App;
