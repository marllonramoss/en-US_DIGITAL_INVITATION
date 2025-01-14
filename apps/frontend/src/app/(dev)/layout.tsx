import PageTemplate from "@/components/template/PageTemplate";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return <PageTemplate>{children}</PageTemplate>;
};

export default layout;
