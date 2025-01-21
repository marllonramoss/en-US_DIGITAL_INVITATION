import Logo from "@/components/template/Logo";
import LogoBig from "@/components/template/LogoBig";
import PageTemplate from "@/components/template/PageTemplate";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/background-home.svg')] bg-cover gap-10">
      <div className="flex flex-col items-center gap-4 cursor-default">
        <LogoBig />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Create and management the invite of your event easily, faster, without
          complications!
        </p>
      </div>
      <Link href={"/event"} className="button blue uppercase">
        Create your Event!
      </Link>
    </div>
  );
};

export default Home;
