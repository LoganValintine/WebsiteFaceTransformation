import React from 'react';


class ClassComponent extends React.Component{
    render(){
      return <h1>Hi my name is {this.props.first_name}!</h1>
    }
  }


  export default ClassComponent;