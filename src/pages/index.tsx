import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

import logo from "../../public/wazan-logo-with-background.png";
import screenshot from "../../public/screenshot.png";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  const { push } = useRouter();

  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <>
      <Head>
        <title>Wazan - Fitness Tracker</title>
        <meta
          name="description"
          content="A simple and elegant workout tracker"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={inter.className}>
        <div className="mx-auto max-w-screen px-4 py-8 fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md border b-1 sm:py-10 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex text-center sm:text-left inline-block items-center">
                <div className="rounded-lg truncate">
                  <Image src={logo} alt="Wazan logo" height={45} />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl px-2">
                  Wazan
                </h1>
              </div>
            </Link>
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center sticky top-0">
              <Link href="https://github.com/faizanraso/wazan">
                <button
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-700 transition hover:border-black hover:text-gray-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <span className="text-sm font-medium"> View on Github </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1.5"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </button>
              </Link>
              <Link href="/login">
                <button
                  className="hidden sm:flex block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white border transition hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring"
                  type="button"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className={inter.className}>
        <div className="flex flex-col px-20 py-16 mt-32 min-h-screen text-center ">
          <section className="justify-center">
            <h1 className="text-7xl font-bold text-black py-5 font-extrabold">
              Track Your Fitness Progress.{" "}
              <span className="text-sky-600">Simply.</span>
            </h1>
            <p className="mt-1.5 text-lg text-gray-600 py-5">
              Say goodbye to complicated workout trackers and hello to a simpler
              way to track your fitness progress. Wazan makes it easy to log
              {"PR's"} and bodyweight - the two things people really want to
              track - in one convenient place.
            </p>
            <Link href="/login">
              <button className="mx-auto mt-5 gap-2 rounded-xl border-4 border-black text-black px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-cyan-50">
                Track my Gains{" "}
                <span aria-hidden="true" role="img">
                  💪🏽
                </span>
              </button>
            </Link>
            <div className="screenshot-div mt-10">
              <Image
                src={screenshot}
                alt="website-screenshot"
                className="rounded-lg shadow-xl dark:shadow-gray-600 min-w-full h-auto"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
