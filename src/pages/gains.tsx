import React, { use, useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Graph from "@/components/Graph";
import PullBodyWeightData from "@/functions/PullBodyWeightData";
import PullBenchData from "@/functions/PullBenchData";
import PullSquatData from "@/functions/PullSquatData";
import PullDeadliftData from "@/functions/PullDeadliftData";
import AddDataModal from "@/components/AddDataModal";
import DeleteDataModal from "@/components/DeleteDataModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const bodyWeightData = PullBodyWeightData();
  const benchData = PullBenchData();
  const squatData = PullSquatData();
  const deadliftData = PullDeadliftData();

  const [addDataModalIsOpen, setAddDataModalIsOpen] = useState(false);
  const [deleteDataModalIsOpen, setDeleteDataModalIsOpen] = useState(false);
  const supabase = useSupabaseClient();

  useEffect(() => {
    async function isLoggedIn() {
      const sessoionStatus = (await supabase.auth.getSession()).data.session;
      if (sessoionStatus === null) {
        Router.push("/login");
      }
    }
    isLoggedIn();
  }, [supabase.auth]);

  function openAddDataModal() {
    setAddDataModalIsOpen(true);
  }

  function closeAddDataModal() {
    setAddDataModalIsOpen(false);
  }

  function openDeleteDataModal() {
    setDeleteDataModalIsOpen(true);
  }

  function closeDeleteDataModal() {
    setDeleteDataModalIsOpen(false);
  }

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
        <div className="flex flex-col px-4 py-5 md:py-3 mt-20 sm:px-6 lg:px-8 mx-auto">
          <section className="text-center">
            <div className="px-1 text-xs font-medium flex flex-row gap-2 p-3 float-right">
              <button
                onClick={openAddDataModal}
                className="flex items-center p-2 justify-center text-white transition-colors duration-150 bg-cyan-700 rounded-lg focus:shadow-outline hover:bg-cyan-800"
              >
                Add Data&nbsp;
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                onClick={openDeleteDataModal}
                className="flex items-center p-2 justify-center text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                </svg>
              </button>
              <AddDataModal
                isOpen={addDataModalIsOpen}
                onRequestClose={closeAddDataModal}
              />
              <DeleteDataModal
                isOpen={deleteDataModalIsOpen}
                onRequestClose={closeDeleteDataModal}
              />
            </div>
            {/* <WeeklyWorkouts /> */}
          </section>
          <section className="flex flex-col md:grid md:grid-cols-2 gap-4 justify-center items-center my-auto">
            <div className="body-weight-div text-center rounded-xl bg-white p-3 border border-2 border-gray-100">
              <h2 className="text-xs text-black text-xl font-semibold py-5">
                Body Weight
              </h2>
              <Graph data={bodyWeightData} />
            </div>
            <div className="bench-PR-div text-center rounded-xl bg-white p-3 border border-2 border-gray-100">
              <h2 className="text-xs text-black text-xl font-semibold py-5">
                Bench
              </h2>
              <Graph data={benchData} />
            </div>
            <div className="squat-PR-div text-center rounded-xl bg-white p-3 border border-2 border-gray-100">
              <h2 className="text-xs text-black text-xl font-semibold py-5">
                Squat
              </h2>
              <Graph data={squatData} />
            </div>
            <div className="deadlift-PR-div text-center rounded-xl bg-white p-3 border border-2 border-gray-100">
              <h2 className="text-xs text-black text-xl font-semibold py-5">
                Deadlift
              </h2>
              <Graph data={deadliftData} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
