import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Track() {
  return (
    <>
      <Head>
        <title>Wazan - Track</title>
        <meta
          name="description"
          content="A simple and elegant workout tracker"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </>
  );
}
