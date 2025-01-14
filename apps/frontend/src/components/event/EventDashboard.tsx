import { Event, Guest } from "@digital-invitation/core";
import React from "react";
import EventInformation from "./EventInformation";
import QrCode from "./QrCode";
import Statistic from "../shared/Statistic";
import ListGuest from "./ListGuest";

interface EventDashboardProps {
  event: Event;
  confirmed: Guest[];
  absent: Guest[];
  totalPeople: number;
}

const EventDashboard = ({
  event,
  confirmed,
  absent,
  totalPeople,
}: EventDashboardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <EventInformation event={event} className="flex-1" />
        <QrCode event={event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic
          text="People Expected: "
          value={event.quantityEstimated}
          image={"/icons/guests.svg"}
        />
        <Statistic
          text="Confirmed: "
          value={confirmed.length}
          image={"/icons/confirmed.svg"}
        />
        <Statistic
          text="Total: "
          value={totalPeople}
          image={"/icons/friends.svg"}
        />
      </div>

      <button className="button blue self-end mt-12 ">
        <span>Refresh Guest List</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Guests with are confirmed
      </span>
      <ListGuest guests={confirmed} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Guests with aren`t confirmed
      </span>
      <ListGuest guests={absent} />
    </div>
  );
};

export default EventDashboard;
