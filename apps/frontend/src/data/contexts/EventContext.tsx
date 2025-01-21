"use client";

import {
  Guest,
  Event,
  createEmptyEvent,
  createEmptyGuest,
} from "@digital-invitation/core";
import { createContext, useCallback, useEffect, useState } from "react";

import useApi from "../hooks/useApi";
import { useRouter } from "next/navigation";

const EventContext = createContext<eventContextProps>({} as any);

interface eventContextProps {
  event: Partial<Event>;
  guest: Partial<Guest>;
  avaibleAlias: boolean;

  changeEvent(event: Partial<Event>): void;
  changeGuest(guest: Partial<Guest>): void;

  loadEvent(idOrAlias: string): Promise<void>;
  saveEvent(): Promise<void>;

  addGuest(): void;
}

export function EventContextProvider(props: any) {
  const { httpGet, httpPost } = useApi();
  const router = useRouter();

  const CreateEmptyEvent = new createEmptyEvent().execute();
  const CreateEmptyGuest = new createEmptyGuest().execute();

  const [avaibleAlias, setAvaibleAlias] = useState(true);
  const [event, setEvent] = useState<Partial<Event>>(CreateEmptyEvent);
  const [guest, setGuest] = useState<Partial<Guest>>(CreateEmptyGuest);

  const saveEvent = useCallback(
    async function () {
      try {
        const createdEvent = await httpPost("/events", event);
        router.push("/events/success");
        setEvent({
          ...createdEvent,
        });
      } catch (error) {
        // TODO: ERROR LOGIC
        console.error(error);
      }
    },
    [event, httpPost, router]
  );

  const loadEvent = useCallback(
    async function (idOrAlias: string) {
      try {
        const event = await httpGet(`/events/${idOrAlias}`);
        setEvent({
          ...event,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [httpGet, setEvent]
  );

  const addGuest = useCallback(
    async function () {
      await httpPost(`/events/${event.alias}/guest`, guest);
      router.push("/invitation/thankyou");
    },
    [httpPost, event, guest, router]
  );

  const validateAlias = useCallback(
    async function () {
      try {
        const { valid } = await httpGet(`/events/validate/${event.alias}`);
        setAvaibleAlias(valid);
      } catch (error) {
        console.error(error);
      }
    },
    [httpGet, event]
  );

  useEffect(() => {
    if (event?.alias) validateAlias();
  }, [event?.alias, validateAlias]);

  return (
    <EventContext.Provider
      value={{
        event,
        guest,
        avaibleAlias,
        changeEvent: setEvent,
        changeGuest: setGuest,
        saveEvent,
        loadEvent,
        addGuest,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContext;
