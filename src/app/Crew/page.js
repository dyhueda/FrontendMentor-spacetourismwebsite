"use client";
import Image from "next/image";
import Header from "../components/Header";
import data from "../utils/data.json";
import { useState } from "react";
import { bellefair, barlow } from "../fonts.js";
export default function crewPage() {
  const [crew, setCrew] = useState(data.crew[0]);
  console.log(data.crew);

  return (
    <>
      <Header />
      <div className="pb-20 gap-5 lg:gap-32 lg:text-left pt-32 lg:items-start sm:pt-36 lg:pt-52  flex flex-col lg:flex-row items-center min-h-screen w-full px-6 sm:px-9 lg:px-52 bg-no-repeat bg-cover bg-center bg-[url(/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/assets/crew/background-crew-tablet.jpg)] lg:bg-[url(/assets/crew/background-crew-desktop.jpg)]">
        <div className="gap-5 flex flex-col w-full items-center lg:w-1/2">
          <h1 className="flex justify-center gap-2 text-base sm:text-xl lg:text-3xl sm:justify-start w-full lg:pb-40">
            <p className=" opacity-50">02</p>MEET YOUR CREW
          </h1>
          <div className="w-full flex flex-col sm:flex-col-reverse gap-6">
            <div className="h-48 sm:mt-16 sm:mb-12 sm:h-[532px] lg:hidden w-full border-b justify-center flex border-textColor sm:border-none">
              <Image
                src={crew.images.png}
                width={572}
                height={572}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col sm:flex-col-reverse items-center w-full gap-6 lg:items-start">
              <ul className="flex gap-6 sm:text-lg lg:text-xl">
                <li>
                  <button
                    onClick={(e) => {
                      setCrew(data.crew[0]);
                    }}
                    className={`size-3 rounded-full bg-white ${
                      crew.name === "Douglas Hurley" ? "" : "opacity-50"
                    }`}
                  ></button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      setCrew(data.crew[1]);
                    }}
                    className={`size-3 rounded-full bg-white ${
                      crew.name === "Mark Shuttleworth" ? "" : "opacity-50"
                    }`}
                  ></button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      setCrew(data.crew[2]);
                    }}
                    className={`size-3 rounded-full bg-white ${
                      crew.name === "Victor Glover" ? "" : "opacity-50"
                    }`}
                  ></button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      setCrew(data.crew[3]);
                    }}
                    className={`size-3 rounded-full bg-white ${
                      crew.name === "Anousheh Ansari" ? "" : "opacity-50"
                    }`}
                  ></button>
                </li>
              </ul>
              <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-4">
                <h2
                  className={`${bellefair.className} uppercase text-base sm:text-2xl lg:text-3xl opacity-50 `}
                >
                  {crew.role}
                </h2>
                <h1 className={`${bellefair.className} uppercase text-2xl sm:text-5xl lg:text-6xl `}>
                  {crew.name}
                </h1>
                <p
                  className={`${barlow.className} text-center sm:text-lg lg:text-left  lg:m-0 text-textColor pb-6 sm:mx-32`}
                >
                  {crew.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="hidden lg:flex items-center w-full">
              <Image
                src={crew.images.png}
                width={572}
                height={572}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
        </div>
      </div>
    </>
  );
}
