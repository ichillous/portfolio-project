import React, { useEffect } from "react";
import axios from "axios";
import UpdateTweet from "./UpdateTweet";
import { baseURL } from "../services/constants";

const Tweet = (props) => {
    const { fetchTweets, setFetchTweets, tweets } = props;
    const name = props.tweet.fields.name
    const text = props.tweet.fields.text
    console.log(props.tweet.fields.name)
    const handleTweet = async () => {
        const airtableURL = `${baseURL}${tweets}`;
        await axios.delete(airtableURL, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`, //Authorizing app to contact AIRTABLE
        },
        });
        setFetchTweets(!fetchTweets);
  };
  console.log(tweets)
  return (
    <div>
        <h5>{name}</h5>
        <p>{text}</p> 
        
    </div>
  );
};

export default Tweet;
