import React, { useState } from "react";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import DateSelector from "@/components/DateSelector";

const inter = Inter({ subsets: ["latin"] });

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
      <main className={inter.className}>
        <div className="flex flex-col px-4 py-8 mt-20 min-h-screen sm:px-6 lg:px-8">
          <form className="items-center justify-center mx-auto">
            <DateSelector />
            {/* create a form that takes inputs for what muscle group the user trained today (multi select drop down), their body weight, PR for bench, squat and deadlift */}
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="muscle-group"
                  className="text-sm font-medium text-gray-700"
                >
                  Muscle Group
                </label>
                <select
                  id="muscle-group"
                  name="muscle-group"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Legs</option>
                  <option>Back</option>
                  <option>Chest</option>
                  <option>Shoulders</option>
                  <option>Arms</option>
                  <option>Core</option>
                </select>

                <label
                  htmlFor="body-weight"
                  className="mt-4 text-sm font-medium text-gray-700"
                >
                  Body Weight
                </label>
                <input
                  type="number"
                  name="body-weight"
                  id="body-weight"
                  placeholder="lbs"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />

                <label
                  htmlFor="bench-press"
                  className="mt-4 text-sm font-medium text-gray-700"
                >
                  Bench Press
                </label>
                <input
                  type="number"
                  name="bench-press"
                  id="bench-press"
                  placeholder="lbs"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />

                <label
                  htmlFor="squat"
                  className="mt-4 text-sm font-medium text-gray-700"
                >
                  Squat
                </label>
                <input
                  type="number"
                  name="squat"
                  id="squat"
                  placeholder="lbs"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />

                <label
                  htmlFor="deadlift"
                  className="mt-4 text-sm font-medium text-gray-700"
                >
                  Deadlift
                </label>
                <input
                  type="number"
                  name="deadlift"
                  id="deadlift"
                  placeholder="lbs"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
