"use client";

import { useState } from "react";

export default function NewsFeed(data: any) {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
      <div className="">
        <p>{counter}</p>
        <p>{data.data}</p>
        <input value={value} onChange={handleChange}/>
        <br></br>
        <button type="button" onClick={() => {setCounter(counter + 1)}}>Click me!</button>
        <p>You entered: {value}</p>
      </div>
  );
}