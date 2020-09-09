import React, { useState } from "react";
import axios from "axios";
import { Component } from "react";

class UpdateTweet extends Component { 
  constructor(props){
      super(props);
      this.state = {
          editing: false
      }
      this.name = "";
      this.text = "";
  }  
  render(){
      const {name, text} = this.props
    return (
    <form>
        <p>Name :</p>
        {this.state.editing ? ()}
    </form>
  );  
  }
  
};

export default UpdateTweet;
