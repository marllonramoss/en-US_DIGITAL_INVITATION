import Image from "next/image";
import React from "react";

interface StatisticProps {
  text: string;
  value: any;
  image: string;
}

const Statistic = ({ text, value, image }: StatisticProps) => {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-400">{text}</span>
        <span className="text-2xl font-black">{value}</span>
      </div>
      <Image src={image} width={80} height={80} alt="" />
    </div>
  );
};

export default Statistic;
