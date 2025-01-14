import { Event } from "@digital-invitation/core";
import React from "react";
import Information from "../shared/Information";

interface EventInformationProps {
  event: Event;
  className?: string;
}

const EventInformation = ({ event, className }: EventInformationProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{event.name}</span>
        <span className="text-xl text-zinc-300">{event.alias}</span>
      </div>
      <div className="flex gap-2">
        <Information label="Date: ">
          <span>
            {new Date(event.date!).toLocaleString()}
            {" at "}
            {new Date(event.date!).toLocaleTimeString()}
          </span>
        </Information>
        <Information label="Local: ">{event.local}</Information>
      </div>

      <Information label="Description: ">{event.description}</Information>
    </div>
  );
};

export default EventInformation;
