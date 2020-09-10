import React, { useState } from "react";
import axios from "axios";
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
  render() {
    const { name, text } = this.props;
    return (
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
    );
  }
}

export default UpdateTweet;
