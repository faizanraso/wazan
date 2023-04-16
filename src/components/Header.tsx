import Link from "next/link";
import Image from "next/image";

import { Inter } from "next/font/google";
import logo from "../../public/wazan-logo-with-background.png";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={inter.className}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md border b-1 sm:py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <div className="flex text-center sm:text-left inline-block items-center">
              <div className="rounded-lg truncate">
                <Image src={logo} alt="Wazan logo" height={30} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl px-2">
                Wazan
              </h1>
            </div>
          </Link>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center sticky top-0"></div>
        </div>
      </div>
    </header>
  );
}
