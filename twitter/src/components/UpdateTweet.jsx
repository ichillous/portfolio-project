import React from "react";
import { Component } from "react";

class UpdateTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.name = "";
    this.text = "";
  }
  toggle = (updateTweet) => {
    const e = document.getElementById(updateTweet);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
  }
  render() {
    const { name, text } = this.props;
    return (
    <div>
        <form>
        <p>Name :</p>
        {this.state.editing ? (
          <span className="name">{name}</span>
        ) : (
          <input
            type="text"
            defaultValue={name}
            ref={(node) => {
              this.name = node;
            }}
          />
        )}
        <p>Text :</p>
        {this.state.editing ? (
          <span className="text">{text}</span>
        ) : (
          <input
            type="text"
            defaultValue={text}
            ref={(node) => {
              this.text = node;
            }}
          />
        )}
        <div>
          <button
            onClick={() => {
              this.setState({ editing: true });
            }}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
      
    );
  }
}

export default UpdateTweet;
