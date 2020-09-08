import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Home from './components/Home'
import Tweet from './components/Tweet'
import { baseURL } from './services/constants';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const [fetchTweets, setFetchTweets] = useState(false)

  useEffect(() => {
    const getTweets = async () => {
      const airtableURL = `${baseURL}`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      })
      setTweets(response.data.records);
    }
    getTweets()
  }, [fetchTweets])

  return (
    <div className="App">
     
       <Home />
       <Tweet />
       
    </div>
  );
}

export default App;
