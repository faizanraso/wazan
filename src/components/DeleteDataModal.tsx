import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "react-modal";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DeleteDataModal(props: any) {
  const [date, setDate] = useState<string>("");
  const [bodyWeight, setBodyWeight] = useState<boolean>();
  const [benchWeight, setBenchWeight] = useState<boolean>();
  const [squatWeight, setSquatWeight] = useState<boolean>();
  const [deadliftWeight, setDeadliftWeight] = useState<boolean>();
  const supabase = useSupabaseClient();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  async function deleteData(e) {}

  return (
    <div className={inter.className}>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <section className="">
          <div className="p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
              Add Data
            </p>
            <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div className="">
                <input
                  id="date-picker"
                  required
                  type="date"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm text-gray-400"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <input
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Body Weight"
                  onChange={(e) => {
                    setBodyWeight(Number(e.target.value));
                  }}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-gray-400"
                    height="1em"
                    width="1em"
                    {...props}
                  >
                    <path d="M12 3a4 4 0 014 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 01-2 2H4a2 2 0 01-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.89 3.89 0 018 7a4 4 0 014-4m0 2a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2m-6 6v8h5v-2H8v-6H6m7 0v8h3c1.11 0 2-.89 2-2v-.5c0-.57-.25-1.12-.68-1.5.43-.38.68-.93.68-1.5V13c0-1.11-.89-2-2-2h-3m2 2h1v1h-1v-1m0 3h1v1h-1v-1z" />
                  </svg>
                </span>
              </div>
              <button
                className="mt-8 inline-block w-3/4 rounded-full bg-sky-600 py-4 text-sm font-bold text-white shadow-xl"
                onClick={(e) => deleteData(e)}
              >
                Add Data
              </button>
            </form>
          </div>
        </section>
      </Modal>
    </div>
  );
}
