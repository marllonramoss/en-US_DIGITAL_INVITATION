import { Guest } from "@digital-invitation/core";
import React from "react";
import ItemGuest from "./ItemGuest";

interface ListGuestProps {
  guests: Guest[];
}

const ListGuest = ({ guests }: ListGuestProps) => {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {guests.map((g) => (
          <ItemGuest key={g.id} guest={g} />
        ))}
      </ul>
    </div>
  );
};

export default ListGuest;
