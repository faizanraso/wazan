import React, { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function DeleteDataModal(props: any) {
  const [date, setDate] = useState<string>("");
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

  async function deleteData(e) {
    if (date === "") {
      toast.error("Please enter a date 📅", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

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
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
              Delete Data
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
              <div className="select-menu flex flex-col items-center mb-4">
                <h3 className="my-4 text-xs font-medium text-red-700">
                  Select the records you wish to delete 🗑️
                </h3>
                <ul className="w-48 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg">
                  <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center pl-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 0"
                      />
                      <label
                        htmlFor="vue-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                      >
                        Body Weight
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center pl-3">
                      <input
                        id="react-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="react-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                      >
                        Bench PR
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center pl-3">
                      <input
                        id="angular-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="angular-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        Squat PR
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center pl-3">
                      <input
                        id="laravel-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="laravel-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                      >
                        Deadlift PR
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center"></div>
            </form>
          </div>
        </section>
      </Modal>
      <ToastContainer />
    </div>
  );
}
