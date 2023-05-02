import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Graph from "@/components/Graph";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session) {
      push("/login");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Wazan - Gains</title>
        <meta
          name="description"
          content="A simple and elegant workout tracker"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={inter.className}>
        <div className="flex flex-col px-4 py-3 mt-20 min-h-screen sm:px-6 lg:px-8 mx-auto">
          <section className="text-center">
            <h1 className="text-black text-2xl font-bold pb-8">
              My Gains{" "}
              <span aria-hidden="true" role="img">
                🏋️‍♂️
              </span>
            </h1>
            {/* <WeeklyWorkouts /> */}
          </section>
          <section>
            <Graph />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
