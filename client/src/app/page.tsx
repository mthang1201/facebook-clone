"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import NewsFeed from "@/app/components/newsFeed/newsFeed";
import MenuPane from "@/app/components/menuPane/menuPane";
import SidePane from "@/app/components/sidePane";
import ContactsPane from "@/app/components/contactsPane";

export default function Home() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //       .get("http://localhost:8080/")
  //       .then((response) => setData(response.data))
  //       .catch((error) => console.error("Error fetching data", error));
  // }, []);

  return (
    <div className="h-full grid grid-rows-[auto_1fr] grid-cols-[1fr_2fr_1fr] bg-zinc-900 text-white">
      <div className="row-start-1 row-end-2 col-start-1 col-end-4 bg-zinc-800">
        <MenuPane />
      </div>
      <div className="row-start-2 row-end-3 col-start-1 col-end-2">
        <SidePane />
      </div>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3">
        <NewsFeed data={data} />
      </div>  
      <div className="row-start-2 row-end-3 col-start-3 col-end-4">
        <ContactsPane />
      </div>
    </div>
  );
}
