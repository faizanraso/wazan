import React, { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "react-modal";
import {
  ToastContainer,
  toast,
  ToastOptions,
  ToastPosition,
} from "react-toastify";

import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function DeleteDataModal(props: any) {
  const [date, setDate] = useState<string>("");
  const [deleteBodyWeight, setDeleteBodyWeight] = useState<boolean>(false);
  const [deleteBench, setDeleteBench] = useState<boolean>(false);
  const [deleteSquat, setDeleteSquat] = useState<boolean>(false);
  const [deleteDeadlift, setDeleteDeadlift] = useState<boolean>(false);

  const supabase = useSupabaseClient();

  const toastOptions: ToastOptions = {
    position: "top-right" as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

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

  async function deleteData(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (date === "") {
      toast.error("Please enter a date 📅", toastOptions);
      return;
    } else if (
      deleteBodyWeight === false &&
      deleteBench === false &&
      deleteSquat === false &&
      deleteDeadlift === false
    ) {
      toast.error(
        "You must select at least one record to delete!",
        toastOptions
      );
    } else {
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      if (deleteBodyWeight) {
        const { data, error } = await supabase
          .from("body_weight_data")
          .delete()
          .eq("user_id", user_id)
          .eq("date", date);
        if (error) {
          toast.error(
            "Looks like theres no record for your body weight on that day",
            toastOptions
          );
        }
      }
      if (deleteBench) {
        const { data, error } = await supabase
          .from("pr_data")
          .delete()
          .eq("user_id", user_id)
          .eq("date", date)
          .eq("exercise", "bench");
        if (error) {
          toast.error(
            "Looks like theres no record for a Bench PR on that day",
            toastOptions
          );
        }
      }
      if (deleteSquat) {
        const { data, error } = await supabase
          .from("pr_data")
          .delete()
          .eq("user_id", user_id)
          .eq("date", date)
          .eq("exercise", "squat");
        if (error) {
          toast.error(
            "Looks like theres no record for a Bench PR on that day",
            toastOptions
          );
        }
      }
      if (deleteDeadlift) {
        const { data, error } = await supabase
          .from("pr_data")
          .delete()
          .eq("user_id", user_id)
          .eq("date", date)
          .eq("exercise", "deadlift");
        if (error) {
          toast.error(
            "Looks like theres no record for a Bench PR on that day",
            toastOptions
          );
        }
      }
      document.location.reload();
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
              <div className="select-menu flex flex-col items-center mb-4 pb-3">
                <h3 className="my-4 text-xs font-medium text-red-700">
                  Select the records you wish to delete 🗑️
                </h3>
                <ul className="w-48 text-sm font-medium text-black bg-white border border-gray-200 rounded-lg">
                  <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center pl-3">
                      <input
                        id="bw-checkbox"
                        type="checkbox"
                        onChange={(e) => setDeleteBodyWeight(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 0"
                      />
                      <label
                        htmlFor="bw-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                      >
                        Body Weight
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center pl-3">
                      <input
                        id="benc-checkbox"
                        type="checkbox"
                        onChange={(e) => setDeleteBench(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="bench-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                      >
                        Bench PR
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center pl-3">
                      <input
                        id="squat-checkbox"
                        type="checkbox"
                        onChange={(e) => setDeleteSquat(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="squat-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                      >
                        Squat PR
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 rounded-t-lg">
                    <div className="flex items-center pl-3">
                      <input
                        id="deadlift-checkbox"
                        type="checkbox"
                        onChange={(e) => setDeleteDeadlift(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="deadlift-checkbox"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                      >
                        Deadlift PR
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex text-center items-center mx-auto justify-center">
                <button
                  onClick={(e) => deleteData(e)}
                  className="flex items-center p-3 justify-center text-white text-xs transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                >
                  Delete Data &nbsp;
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>
      </Modal>
      <ToastContainer />
    </div>
  );
}
