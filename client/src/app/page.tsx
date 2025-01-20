"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "@/app/newsFeed";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
        .get("http://facebook-backend:8080/")
        .then((response) => setData(response.data))
        .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div className="">
      <h1>Hello from Home Page!</h1>
      <NewsFeed data={data} />
    </div>
  );
}
