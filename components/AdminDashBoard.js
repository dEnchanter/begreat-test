import Head from "next/head";
import React from "react";
import DashBoardNav from "./common/DashBoardNav";

export default function AdminDashBoard({ title = "", children }) {
  return (
    <section>
      <Head>
        <title> {`Be-great Finance | ${title}`} </title>
      </Head>
      <div>
        <DashBoardNav/>
        {/* bg-[#F7F7F7] */}
        <div className=" bg-[#F6F6F6] min-h-screen py-5">{children}</div>
      </div>
    </section>
  );
}
