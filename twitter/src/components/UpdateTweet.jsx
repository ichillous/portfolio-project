import React, { useState } from "react";
import axios from "axios";

const UpdateTweet = (props) => {
  const [name, setName] = useState(props.name);
  const [text, setText] = useState(props);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      name,
      text,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/twitter/${props.fields.id}`;
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

  // (label+input)*3 with emmet
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">User Name:</label>
      <input
        name="title"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="text">Text:</label>
      <textarea
        name="text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">tweet</button>
    </form>
  );
};

export default UpdateTweet;
