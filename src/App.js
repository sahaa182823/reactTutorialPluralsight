import React from 'react';
import Button from './Button';
import Text from './Text';



class App extends React.Component {
  state = {counter : 0 };
  
  handleClick = (incrementValue) => {
  this.setState((prevState) => {
  return {
   counter : prevState.counter + incrementValue
  };
  });
  };
    render() {
      return (
        <div>
          <Button incrementValue={1} onFunction={this.handleClick}/>
          <Button incrementValue={5} onFunction={this.handleClick}/>
          <Button incrementValue={50} onFunction={this.handleClick}/>
          <Button incrementValue={100} onFunction={this.handleClick}/>
          <Text counter={this.state.counter}/>
        </div>
        
      );
    }
  }

export default App;
