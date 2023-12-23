"use client";
import Image from "next/image";
import Header from "../components/Header";
import data from "../utils/data.json";
import { useState } from "react";
import { bellefair, barlow } from "../fonts.js";
export default function crewPage() {
  const [technology, setTechnology] = useState(data.technology[0]);
  console.log(data.technology);

  return (
    <>
      <Header />
      <div className="pb-20 gap-5  lg:text-left pt-32 lg:items-start lg:justify-between sm:pt-40 lg:pt-52 flex flex-col lg:flex-row items-center min-h-screen w-full bg-no-repeat bg-cover bg-center bg-[url(/assets/technology/background-technology-mobile.jpg)] sm:bg-[url(/assets/technology/background-technology-tablet.jpg)] lg:bg-[url(/assets/technology/background-technology-desktop.jpg)]">
        <div className="gap-5 flex flex-col w-full items-center lg:w-1/2">
          <h1 className="flex justify-center gap-2 text-base sm:text-xl lg:text-3xl sm:justify-start w-full lg:pb-40 px-6 sm:px-9 lg:pl-52">
            <p className=" opacity-50">03</p>SPACE LAUNCH 101
          </h1>
          <div className="w-full flex flex-col gap-6">
            <div className="h-48 sm:mt-7 sm:mb-12 sm:h-[310px] lg:hidden w-full flex items-center">
              <Image
                src={technology.images.landscape}
                width={768}
                height={310}
                style={{height: '100%', width: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:pl-52 items-center w-full gap-6 sm:gap-10 lg:items-start px-6 sm:px-9">
              <ul className="flex gap-6 sm:text-lg lg:text-xl lg:flex-col ">
                <li>
                  <button
                    onClick={(e) => {
                      setTechnology(data.technology[0]);
                    }}
                    className={`size-10 sm:size-14 lg:size-20 rounded-full  border ${
                      technology.name === "Launch vehicle" ? "bg-white text-backgroundColor" : "bg-transparent"
                    }`}
                  >1</button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      setTechnology(data.technology[1]);
                    }}
                    className={`size-10 sm:size-14 lg:size-20 rounded-full  border ${
                      technology.name === "Spaceport" ? "bg-white text-backgroundColor" : "bg-transparent"
                    }`}
                  >2</button>
                </li>
                <li>
                  <button
                    onClick={(e) => {
                      setTechnology(data.technology[2]);
                    }}
                    className={`size-10 sm:size-14 lg:size-20 rounded-full  border ${
                      technology.name === "Space capsule" ? "bg-white text-backgroundColor" : "bg-transparent"
                    }`}
                  >3</button>
                </li>
              </ul>
              <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-4">
                <h2
                  className={`${bellefair.className} uppercase text-base sm:text-2xl lg:text-3xl opacity-50 `}
                >
                  The therminology...
                </h2>
                <h1 className={`${bellefair.className} uppercase text-2xl sm:text-5xl lg:text-6xl `}>
                  {technology.name}
                </h1>
                <p
                  className={`${barlow.className} text-center sm:text-lg lg:text-xl lg:text-left  lg:m-0 text-textColor pb-6 sm:mx-32`}
                >
                  {technology.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 justify-end flex mt-20">
        <div className="hidden lg:flex items-center">
              <Image
                src={technology.images.portrait}
                width={515}
                height={527}
                style={{ height: "100%", width: "auto", objectFit: "cover" }}
              />
            </div>
        </div>
      </div>
    </>
  );
}
