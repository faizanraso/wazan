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
              <div className="select-menu"></div>
            </form>
          </div>
        </section>
      </Modal>
      <ToastContainer />
    </div>
  );
}
