import { Event } from "@digital-invitation/core";
import React from "react";
import QRCode from "react-qr-code";

interface QrCodeProps {
  event: Event;
}

const QrCode = ({ event }: QrCodeProps) => {
  return (
    <div className="flex flex-col justify-center gap-4 border border-zinc-800 px-10 items-center">
      <span className="text-sm font-light text-zinc-400">
        Access from Mobile
      </span>
      <QRCode
        value={JSON.stringify({ id: event.id, password: event.password })}
        className="w-32 h-32"
      />
    </div>
  );
};

export default QrCode;
