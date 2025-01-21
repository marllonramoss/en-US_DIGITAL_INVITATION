import PageTemplate from "@/components/template/PageTemplate";
import { EventContextProvider } from "@/data/contexts/EventContext";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <EventContextProvider>
      <PageTemplate>{children}</PageTemplate>;
    </EventContextProvider>
  );
};

export default layout;
