import React, { Component } from 'react';
import Basic from './Basic';
import BasicWithStyle from './BasicWithStyle';

class App extends Component {
  handleClickSaveForm(values){
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  }
  render() {
    return (
      <div>
        <Basic></Basic>
        <hr />
        <BasicWithStyle handleSaveForm={this.handleClickSaveForm}></BasicWithStyle>
      </div>
    );
  }
}

export default App;
