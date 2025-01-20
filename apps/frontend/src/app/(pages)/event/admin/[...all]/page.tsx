"use client";

import EventDashboard from "@/components/event/EventDashboard";
import PasswordFormEvent from "@/components/event/PasswordFormEvent";
import { Event, events, Guest } from "@digital-invitation/core";
import React, { use, useEffect, useState } from "react";

const page = (props: any) => {
  const params: any = use(props.params);

  const id = params.all[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string | null>(
    params.all[1] ?? null
  );

  const willGo = event?.guests.filter((g) => g.confirmed) ?? [];
  const notGo = event?.guests.filter((g) => !g.confirmed) ?? [];
  const total =
    willGo?.reduce((total: number, guest: Guest) => {
      return total + guest.friendsQuantity + 1;
    }, 0) ?? 0;

  function loadEvent() {
    const event = events.find((ev) => ev.id === id && ev.password === password);

    setEvent(event ?? null);
  }

  useEffect(() => {
    loadEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <EventDashboard
          event={event}
          confirmed={willGo}
          absent={notGo}
          totalPeople={total}
        />
      ) : (
        <PasswordFormEvent />
      )}
    </div>
  );
};

export default page;
