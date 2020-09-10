import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { baseURL } from "../services/constants";
import axios from "axios";
import CreateTweet from "./CreateTweet";
import SideBar from "./SideBar";

const Home = (props) => {
  const [tweets, setTweets] = useState([]);
  const [fetchTweets, setFetchTweets] = useState(false);

  useEffect(() => {
    const getTweets = async () => {
      const airtableURL = `${baseURL}`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setTweets(response.data.records);
    };
    getTweets();
  }, [fetchTweets]);

  return (
    <div>
      <h4>Home</h4>
      <SideBar/>
      <div id="home">
        <CreateTweet />
        {
        tweets.map((tweet) => (
            <Tweet
            tweet={tweet}
            key={tweet.id}
            setFetchTweets={setFetchTweets}
            fetchTweets={fetchTweets}
            />
            
        ))}
      </div>
    </div>
  );
};

export default Home;
