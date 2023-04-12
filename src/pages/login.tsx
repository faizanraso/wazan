import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "../../public/wazan-logo-with-background.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Head>
        <title>Login to Wazan</title>
        <meta
          name="description"
          content="Wazan - workout tracker. Login to your account."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
              <a
                href="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 gap-2"
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={35}
                  className="rounded-lg"
                />
                Wazan
              </a>
              <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                    Enter your email below
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-black rounded focus:ring-3 focus:ring-primary-300 "
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="text-gray-600">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full border border-5 text-black bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition hover:text-white hover:bg-black focus:ring-4 focus:outline-none focus:ring "
                    >
                      Lets do This 🏋️‍♂️
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
