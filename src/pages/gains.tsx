import React, { useEffect, useState } from "react";
import Head from "next/head";
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

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const bodyWeightData = PullBodyWeightData();
  const benchData = PullBenchData();
  const squatData = PullSquatData();
  const deadliftData = PullDeadliftData();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session) {
      push("/login");
    }
  }, [session]);

  function openModal() {
    setModalIsOpen(true);
  }
  
  function closeModal() {
    setModalIsOpen(false);
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
        <div className="flex flex-col px-4 py-3 mt-20 sm:px-6 lg:px-8 mx-auto">
          <section className="text-center">
            <div className="px-1 text-xs font-medium p-3 float-right">
              <button
                onClick={openModal}
                className="flex items-center p-2 justify-center text-indigo-100 transition-colors duration-150 bg-cyan-700 rounded-lg focus:shadow-outline hover:bg-cyan-800"
              >
                Add Data&nbsp;
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <AddDataModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            </div>
            {/* <WeeklyWorkouts /> */}
          </section>
          <section className="flex md:grid md:grid-cols-2 gap-4 justify-center items-center my-auto">
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
