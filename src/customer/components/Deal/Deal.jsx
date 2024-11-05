import React from "react";
import Dealbg from "./Assets/Deal.png";
import Deal2bg from "./Assets/Deal2.png";
import Deal3bg from "./Assets/Deal3.png";
import { useCallback, useEffect, useState } from "react";
export default function Deal() {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 1,
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <>
      <div
        class="w-auto my-10 margin-x h-96 rounded-3xl flex gap-9 flex-col items-start p-8 justify-center bg-cover bg-center sm:bg-left xs:bg-left"
        style={{ backgroundImage: `url(${Dealbg})` }}
      >
        <div className="flex flex-col margin-x gap-5 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full text-white">
          <h2 className="text-3xl font-semibold">Get the deal</h2>
          <p className="text-lg">
            Gadget Gizmo has brought a new dimension to learning – it
            effortlessly unlocks the doors to knowledge”
          </p>
          <div className="flex gap-3 sm:gap-8">
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-16 sm:h-16 lg:w-30 lg:h-30 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-3xl sm:text-xl text-3xl font-semibold text-[#a5b4fc]">
                  {countDownTime?.days}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-white text-xl sm:text-xs text-center capitalize">
                {countDownTime?.days == 1 ? "Day" : "Days"}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-16 sm:h-16 lg:w-30 lg:h-30 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-3xl sm:text-xl text-3xl font-semibold text-[#a5b4fc]">
                  {countDownTime?.hours}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-white text-xl sm:text-xs text-center font-medium">
                {countDownTime?.hours == 1 ? "Hour" : "Hours"}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-16 sm:h-16 lg:w-30 lg:h-30 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-3xl sm:text-xl text-3xl font-semibold text-[#a5b4fc]">
                  {countDownTime?.minutes}
                </span>
                <div className="relative h-3 w-2.5 sm:h-2 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-white text-xl sm:text-xs text-center capitalize">
                {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
              </span>
            </div>
            <div className="flex flex-col gap-5 relative">
              <div className="h-16 w-16 sm:w-16 sm:h-16 lg:w-30 lg:h-30 flex justify-between items-center bg-[#343650] rounded-lg">
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                <span className="lg:text-3xl sm:text-xl text-3xl font-semibold text-[#a5b4fc]">
                  {countDownTime?.seconds}
                </span>
                <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
              </div>
              <span className="text-white text-xl sm:text-xs text-center capitalize">
                {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
              </span>
            </div>
          </div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit"
          >
            View Sale Products
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-7 py-5 px-10">
        <div>
          <div>
            <img src={Deal2bg} alt="deal2" />
          </div>
        </div>
        <div
          className="w-full md:w-[45%] text-white bg-cover bg-[#8863BB] bg-right flex items-center rounded-2xl py-2 pr-10 pl-3"
          style={{ backgroundImage: `url(${Deal3bg})` }}
        >
          <div>
            <p className="text-sm">Learn about us</p>
            <h2 className="text-xl ms:text-3xl font-semibold">
              About our Store
            </h2>
            <p className="md:w-3/4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              nisi tempora fugiat exercitationem porro, labore quam? Lorem ipsum
              dolor sit amet.
            </p>
            <button
              type="button"
              class="mt-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              View Deals
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
