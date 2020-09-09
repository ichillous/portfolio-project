import React, { useState } from "react";
import axios from "axios";

const UpdateTweet = (props) => { 
    const [name, setName] = useState(props.name);
    const [text, setText] = useState(props.text);
    console.log(props)
  
const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      name,
      text
    };
    
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/twitter/${props}`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.setFetchTweets(!props.fetchTweets);
  };
    console.log(props.tweet)
  // (label+input)*3 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">User Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}/>
      <br />
      <label htmlFor="text">Text:</label>
      <textarea
        name="text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      > Type Here</textarea>
      <button type="submit">Edit</button>
    </form>
  );
};

export default UpdateTweet;
