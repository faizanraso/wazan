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
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
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
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
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
