import React from "react";

const page = async ({ params }: { params: Promise<{ alias: string }> }) => {
  const { alias } = await params;

  return (
    <div>
      <span>ALIAS: {alias}</span>
    </div>
  );
};

export default page;
