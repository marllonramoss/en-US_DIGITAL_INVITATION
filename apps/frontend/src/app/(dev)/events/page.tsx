import React from "react";
import { events } from "@digital-invitation/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
const EventPage = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {events.map((e) => (
        <div
          key={e.id}
          className="bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden text-center"
        >
          <div className="relative w-full h-52">
            <Image src={e.image} fill alt={e.name} className="object-cover" />
          </div>
          <div className="flex flex-col flex-1 p-7 gap-5">
            <div>
              <span className="text-lg font-black">{e.name}</span>
              <p className="flex-1 text-sm text-zinc-400">{e.description}</p>
            </div>
            <div className="flex justify-center items-center w-full h-44 ">
              <QRCode
                value={JSON.stringify({ id: e.id, password: e.password })}
                className="w-full h-full"
              />
            </div>
            <div className="flex gap-5 justify-center">
              <Link
                className="button red flex-1"
                href={`/event/admin/${e.id}/${e.password}`}
              >
                Admin
              </Link>
              <Link
                className="button green flex-1"
                href={`/invitation/${e.alias}`}
              >
                Invitation
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
