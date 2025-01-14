import React from "react";
import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link href={"/"} className={`${font.className} flex items-center gap-2`}>
      <Image src="/logo.svg" width={50} height={50} alt="" />
      <h1 className="leading-5 flex flex-col items-center text-lg  ">
        <div>
          DIGIT<span className="text-blue-500">4</span>{" "}
        </div>
        <div>INVITATION</div>
      </h1>
    </Link>
  );
};

export default Logo;
