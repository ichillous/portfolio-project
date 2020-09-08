import React from "react";
import axios from "axios";
import UpdateTweet from "./UpdateTweet"
import { baseURL } from '../services/constants';


const Tweet = (props) => {
  const { name, text } = props;
  const { fetchTweets, setFetchTweets, tweet } = props;
  
  const handleTweet = async () => {
    const airtableURL = `${baseURL}${tweet.id}`;
    await axios.delete(airtableURL, {
        headers: {
            'Authorization' : `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`, //Authorizing app to contact AIRTABLE
          },
    });
    setFetchTweets(!fetchTweets)
  }
 
  return (
    <div>
      <h5>{name}</h5>
      <p>{text}</p>
      <UpdateTweet />
      <button onClick={handleTweet}>Delete</button>
    </div>
  );
};

export default Tweet;
