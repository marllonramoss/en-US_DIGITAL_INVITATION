import { Guest } from "@digital-invitation/core";
import React from "react";

interface ItemGuestProps {
  guest: Guest;
}

const ItemGuest = ({ guest }: ItemGuestProps) => {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 border border-zinc-800 py-3">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{guest.name}</span>
        <span className="text-sm text-zinc-400">{guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-zinc-400 text-sm">Friends</span>
        <span className="text-xl font-bold">{guest.friendsQuantity}</span>
      </div>
    </li>
  );
};

export default ItemGuest;
