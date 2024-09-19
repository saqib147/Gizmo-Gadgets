import React from "react";
import Dealbg from "./Assets/Deal.png";

export default function Deal() {
  return (
    <>
      <div
        class="w-full my-10 h-96 rounded-3xl flex gap-9 flex-col items-start p-8 justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Dealbg})` }}
      >
        <div className="flex flex-col  gap-5 w-1/2 text-white">
          <h2 className="text-3xl font-semibold">Get the deal</h2>
          <p>
            Gadget Gizmo has brought a new dimension to learning – it
            effortlessly unlocks the doors to knowledge”
          </p>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit"
          >
            View Sale Products
          </button>
        </div>
      </div>
    </>
  );
}
