import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import UpdateTweet from "./UpdateTweet"
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
      console.log(response.data.records)
      setTweets(response.data.records);
    };
    getTweets();
  }, [fetchTweets]);

  return (
    <div>
      <h4>Home</h4>
      <Link to="/about"> <h5>About</h5></Link>
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
        <Switch>
            <Route path="/update">
             <UpdateTweet tweet={tweets}/>
            </Route>
      </Switch>
      </div>
    </div>
  );
};

export default Home;
