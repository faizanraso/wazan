import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
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
    </>
  );
}
