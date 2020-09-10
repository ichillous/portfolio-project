import React from "react";
import UpdateTweet from "./UpdateTweet";

const Tweet = (props) => {
    const name = props.tweet.fields.name
    const text = props.tweet.fields.text
  return (
    <div id="tweet">
        <h5>{name}</h5>
        <p>{text}</p> 
        <UpdateTweet tweet={props.tweet} setFetchTweets={props.setFetchTweets}
            fetchTweets={props.fetchTweets}/>
    </div>
  );
};

export default Tweet;
