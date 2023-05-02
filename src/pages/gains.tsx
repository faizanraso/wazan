import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeeklyWorkouts from "@/components/WeeklyWorkouts";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session) {
      push("/login");
    }
  }, [session]);

  const data = [
    {
      name: "Page A",
      data: 4000,
    },
    {
      name: "Page B",
      data: 3000,
    },
    {
      name: "Page C",
      data: 2000,
    },
    {
      name: "Page D",
      data: 2780,
    },
    {
      name: "Page E",
      data: 1890,
    },
    {
      name: "Page F",
      data: 2390,
    },
    {
      name: "Page G",
      data: 3490,
    },
  ];

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
        <div className="flex flex-col px-4 py-3 mt-20 min-h-screen sm:px-6 lg:px-8">
          <section className="text-center">
            <h1 className="text-black text-2xl font-bold pb-8">
              My Gains{" "}
              <span aria-hidden="true" role="img">
                🏋️‍♂️
              </span>
            </h1>
            {/* <WeeklyWorkouts /> */}
            <div className="w-1/2 text-center justify-center items-center mx-auto">
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="natural" dataKey="data" stroke="#7bb0b9" />
                <CartesianGrid stroke="#cccc" strokeDasharray="2 2" />
                <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
                <YAxis padding={{ top: 10, bottom: 10 }} />
                <Tooltip />
              </LineChart>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
