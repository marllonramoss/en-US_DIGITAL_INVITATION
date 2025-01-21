"use client";
import EventContext from "@/data/contexts/EventContext";
import { useContext } from "react";

const page = () => {
  const { event } = useContext(EventContext);

  return (
    <div>
      <span>Event page</span>
      <span>{event.id}</span>
    </div>
  );
};

export default page;
