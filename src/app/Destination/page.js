"use client";
import Image from "next/image";
import Header from "../components/Header";
import data from "../utils/data.json";
import { useState } from "react";
import { bellefair, barlow } from "../fonts.js";
export default function destinationPage() {
  const [destination, setDestination] = useState(data.destinations[0]);
  console.log(destination);
  return (
    <>
      <Header />
      <div className="pb-20 gap-5 lg:gap-32 lg:text-left pt-32 sm:pt-36 lg:pt-52 px-6 flex flex-col lg:flex-row items-center min-h-screen w-full sm:px-9 lg:px-52 bg-no-repeat bg-cover bg-center bg-[url(/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)]">
        <div className="gap-5 flex flex-col w-full items-center">

        <h1 className="flex justify-center gap-2 font-medium text-base sm:text-xl lg:text-3xl sm:justify-start w-full">
          <p className=" font-extralight">01</p>PICK YOUR DESTINATION
        </h1>
        <div className="size-44 sm:mt-16 sm:mb-12 sm:size-80 lg:size-[445px]">
          <Image src={destination.images.png} width={720} height={720} />
        </div>
        </div>
        <div className="flex flex-col items-center w-full gap-5 lg:items-start">
          <ul className="flex gap-6 sm:text-lg lg:text-xl">
            <li>
              <button
                onClick={(e) => {
                  setDestination(data.destinations[0]);
                }}
                className={`py-2 ${
                  destination.name === "Moon"
                    ? "border-b-2 text-white"
                    : "text-textColor"
                }`}
              >
                MOON
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setDestination(data.destinations[1]);
                }}
                className={`py-2 ${
                  destination.name === "Mars"
                    ? "border-b-2 text-white"
                    : "text-textColor"
                }`}
              >
                MARS
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setDestination(data.destinations[2]);
                }}
                className={`py-2 ${
                  destination.name === "Europa"
                    ? "border-b-2 text-white"
                    : "text-textColor"
                }`}
              >
                EUROPA
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setDestination(data.destinations[3]);
                }}
                className={`py-2 ${
                  destination.name === "Titan"
                    ? "border-b-2 text-white"
                    : "text-textColor"
                }`}
              >
                TITAN
              </button>
            </li>
          </ul>
          <h1 className={`${bellefair.className} uppercase text-6xl`}>
            {destination.name}
          </h1>
          <p
            className={`${barlow.className} text-center lg:text-left lg:m-0 text-textColor pb-6 border-b border-textColor sm:mx-32`}
          >
            {destination.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
            <div className="flex flex-col gap-3">
              <h2 className="text-textColor uppercase text-center lg:text-left">
                AVG. DISTANCE
              </h2>
              <p
                className={`${bellefair.className} uppercase text-xl text-center lg:text-left`}
              >
                {destination.distance}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-textColor uppercase text-center lg:text-left">
                EST. TRAVEL TIME
              </h2>
              <p
                className={`${bellefair.className} uppercase text-xl text-center lg:text-left`}
              >
                {destination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
