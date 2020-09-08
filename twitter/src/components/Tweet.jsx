import React from "react";
import axios from "axios";
import { baseURL } from '../services/constants';


const Tweet = (props) => {
  const { name, text } = props.tweet;
  const { fetchTweets, setTweets, tweet } = props;
  
  const handleTweet = async () => {

  }


 
  return (
    <div>
      <h5>{name}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Tweet;
