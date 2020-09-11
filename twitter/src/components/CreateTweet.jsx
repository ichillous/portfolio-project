import React, { useState } from "react";
import axios from "axios";

const CreateTweet = (props) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      name,
      text,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/twitter`;
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
    
    setName('');
    setText('');
  };
  return (
    <form id="formsubmit" onSubmit={handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input 
      name="name" 
      type="text" 
      value={name} 
      onChange={(event)=> setName(event.target.value)}></input>
      <label htmlFor="text">Type Here</label>
      <input name="text" type="text" value={text}
      onChange={(event) => setText(event.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Tweet</button>
      
    </form>
  );
};

export default CreateTweet;
