import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";
import logo from "../../public/wazan-logo-with-background.png";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={inter.className}>
      <div className="mx-auto max-w-screen px-4 py-8 fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md border b-1 sm:pt-6 sm:pb-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/gains">
              <div className="flex text-center sm:text-left inline-block items-center">
                <div className="rounded-lg truncate">
                  <Image src={logo} alt="Wazan logo" height={30} />
                </div>
                <h1 className="text-xl font-bold text-gray-900 sm:text-2xl px-2">
                  Wazan
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex">
            {/* <nav className="flex flex-row text-black text-xs gap-3 font-semibold justify-center items-center">
              <a
                href="/gains"
                className="block border-b-4 border-transparent hover:border-current hover:text-sky-600"
              >
                My Gains{" "}
                <span aria-hidden="true" role="img">
                  🏋️‍♂️
                </span>
              </a>
            </nav> */}
          </div>
          <div className="flex ">
            <a href="/">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-8 w-8 rounded-full object-cover hover:drop-shadow-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
