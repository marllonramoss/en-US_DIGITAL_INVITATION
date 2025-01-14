import React from "react";
import Logo from "./Logo";

interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

const PageTemplate = ({ children, className }: PageTemplateProps) => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')]">
      <Logo />
      <main
        className={`${className ?? ""}  flex-1 flex flex-col py-10 justify-center container `}
      >
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
