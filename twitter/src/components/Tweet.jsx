import React from "react";
import {  Link } from "react-router-dom";
import UpdateTweet from "./UpdateTweet";

const Tweet = (props) => {
  const name = props.tweet.fields.name;
  const text = props.tweet.fields.text;
  
  return (
    <div id="tweet">
      <h5>{name}</h5>
      <p>{text}</p>
    <Link to="/update">
        Edit
    </Link>
    </div>
  );
};

export default Tweet;
