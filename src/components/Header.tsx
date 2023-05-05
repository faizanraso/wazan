import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";
import logo from "../../public/wazan-logo-with-background.png";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const supabase = useSupabaseClient();
  const [userEmail, setUserEmail] = useState<string>();
  const [dropdownVisiblbe, setDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    async function getUserEmail() {
      setUserEmail((await supabase.auth.getUser()).data.user?.email);
    }
    getUserEmail();
  }, []);

  useEffect(() => {
    if (dropdownVisiblbe) {
      document
        .getElementById("dropdownInformation")
        ?.classList.remove("hidden");
    } else {
      document.getElementById("dropdownInformation")?.classList.add("hidden");
    }
  }, [dropdownVisiblbe]);

  async function signOut() {
    supabase.auth.signOut();
    router.push("/");
  }

  return (
    <header className={inter.className}>
      <div className="mx-auto max-w-screen px-4 py-8 fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md border b-1 sm:pt-6 sm:pb-4 sm:px-6 lg:px-8 z-50">
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
          <div className="flex items-center text-center justify-center text-xs font-medium">
            <div className="px-1 flex flex-row items-center justify-center">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-8 w-8 rounded-full object-cover hover:drop-shadow-2xl"
              />
              <p className="ms-2 hidden text-left text-xs sm:block">
                <span className="text-gray-500 text-xs"> {userEmail} </span>
              </p>
            </div>
            <div>
              <button
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                className="text-gray-700 hover:text-gray-900 font-medium rounded-lg text-xs px-1 py-1 text-center inline-flex items-center"
                type="button"
                onClick={() => setDropdownVisible(!dropdownVisiblbe)}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownInformation"
                className="absolute z-10 hidden right-1 mt-2 md:mt-0 bg-white rounded-lg shadow"
              >
                <ul
                  className="py-1 text-xs text-gray-700 w-30"
                  aria-labelledby="dropdownInformationButton"
                >
                  <li>
                    <button
                      className="block px-2 py-1 text-red-700 hover:bg-gray-100 w-20"
                      onClick={signOut}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
