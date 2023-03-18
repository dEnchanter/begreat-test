import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import DashBoardNav from "./common/DashBoardNav";

export default function AdminDashBoard({ title = "", children }) {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <Head>
        <title> {`Be-great Finance | ${title}`} </title>
      </Head>
      <div>
        <DashBoardNav/>
        {/* bg-[#F7F7F7] */}
        <div className={`${theme=="dark"?'bg-[#000] animate__animated animate__fadeIn animate__delay-2s':'bg-[#F6F6F6] animate__animated animate__fadeIn animate__delay-2s'}min-h-screen py-5`}>{children}</div>
      </div>
    </section>
  );
}
