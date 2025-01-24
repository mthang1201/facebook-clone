"use client";

import { useState } from "react";
import PostNewThings from "@/app/components/newsFeed/postNewThings";
import Stories from "@/app/components/newsFeed/stories";
import Posts from "@/app/components/newsFeed/posts";

export default function NewsFeed(data: any) {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  }

  return (
      <div className="flex justify-center">
        {/* <p>{counter}</p>
        <p>{data.data}</p>
        <input value={value} onChange={handleChange}/>
        <br></br>
        <button type="button" onClick={() => {setCounter(counter + 1)}}>Click me!</button>
        <p>You entered: {value}</p> */}
        <div className="flex flex-col w-3/4 bg-black items-center gap-4 h-screen">
          <div className="bg-yellow-600 rounded w-full mt-4">
            <PostNewThings />
          </div>
          <div className="bg-pink-400 w-full">
            <Stories />
          </div>
          <div className="bg-orange-400 w-full">
            <Posts />
          </div>
        </div>
      </div>
  );
}