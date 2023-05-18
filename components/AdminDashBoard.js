import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import { ProtectedRoute } from "../Hoc/ProctectedRoute";
import DashBoardNav from "./common/DashBoardNav";

export default function AdminDashBoard({ title = "", children,change,bgDark }) {
  const { theme, setTheme } = useTheme();

  return (
    <ProtectedRoute>
      <Head>
        <title> {`Be Great Finance | ${title}`} </title>
        <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/Bicon.png" />
      </Head>
      <div>
        <DashBoardNav change={change}/>
        {/* bg-[#F7F7F7] */}
        <div className={`${theme=="dark"?`bg-[${bgDark}||#000] animate__animated animate__fadeIn animate__delay-2s`:'bg-[#F6F6F6] animate__animated animate__fadeIn animate__delay-2s'}min-h-screen py-5`}>{children}</div>
      </div>
    </ProtectedRoute>
  );
}
