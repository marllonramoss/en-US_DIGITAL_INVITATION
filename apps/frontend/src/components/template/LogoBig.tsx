import React from "react";
import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const LogoBig = () => {
  return (
    <Link
      href={"/"}
      className={`${font.className} flex flex-col items-center gap-2 cursor-default select-none`}
    >
      <Image src="/logo.svg" width={100} height={100} alt="" />
      <h1 className="text-5xl  ">
        DIGIT<span className="text-blue-500">4</span>L INVITATION
      </h1>
    </Link>
  );
};

export default LogoBig;
