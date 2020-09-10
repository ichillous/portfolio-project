import React, { useState } from "react";
import axios from "axios";

const UpdateTweet = (props) => {
    console.log(props)
    const [name, setName] = useState(props.tweet.fields.name);
    const [text, setText] = useState(props.tweet.fields.text);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const fields = {
        name,
        text,
      };
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/twitter/${props.tweet.id}`;
      await axios.put(
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
    return (
      <form id="formsubmit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="text">Type Here</label>
        <input
          name="text"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Tweet</button>
      </form>
    );
  };
export default UpdateTweet;
