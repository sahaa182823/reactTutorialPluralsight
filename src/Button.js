
   

    import React from 'react';
class Button extends React.Component {
  afterClick = () => {
    this.props.onFunction(this.props.incrementValue);
  };
  
  render() {
    return(

  <button onClick={this.afterClick}>
+{this.props.incrementValue}
  </button>


    );
  }
  }

  export default Button;
    
   
    