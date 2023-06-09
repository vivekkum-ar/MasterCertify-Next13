"use client";
// import '@/app/globals.css'
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import 'animate.css';
import { useEffect, useState } from "react";
import Image from "next/image";
// import { start } from "repl";
import Navbar from "./component/navbar";
import Head from "next/head";
import { Providers } from './providers';
import Footer from "./component/footer";

/* -------------------------- Font poppins setting -------------------------- */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400','600','800','900'],
});
/* ------------------------- Metadata goes like this ------------------------ */
export const metadata = {
  title: "MasterCertify",
  description: "Generated by MasterCertify",
};
/* -------------------------- RootLayout goes here -------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="">
 {/* ------- Marking childrens here can be used to load child components ------  */}
 {/* ------- while nav and other elements from main layout remains same -------  */}
        <Providers>
        <Navbar></Navbar>
          {children}
          <Footer></Footer>          
          </Providers>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
