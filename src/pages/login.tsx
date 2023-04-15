import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { Inter } from "next/font/google";
import logo from "../../public/wazan-logo-with-background.png";
import { customTheme } from "@/styles/LoginUITheme";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session) {
      console.log(session);
    }
  }, [session]);

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
      <main className={inter.className}>
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
              <div className="w-full bg-white rounded-lg shadow p-10 md:mt-0 sm:max-w-md xl:p-0 ">
                <Auth
                  supabaseClient={supabase}
                  appearance={{
                    theme: customTheme,
                    extend: true,
                    className: {
                      container: "w-full",
                      label: "text-sm font-medium text-gray-900",
                      button: "font-medium",
                      input: "tracking-normal",
                    },
                  }}
                  localization={{
                    variables: {
                      sign_in: {
                        email_input_placeholder: "name@company.com",
                        password_input_placeholder: "* * * * * * * * *",
                      },
                    },
                  }}
                  theme="default"
                  providers={["github"]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
