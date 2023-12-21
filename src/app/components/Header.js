"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [pageSelected, setPageSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <header className="w-full absolute  flex justify-between">
      <div className="w-full flex justify-between items-center lg:mt-10">
        <button className="p-6">
          <Image src={"/assets/shared/logo.svg"} height={48} width={48} />
        </button>
        <button
          className={`${isOpen ? "hidden" : "block sm:hidden p-6"}`}
          onClick={(e) => {
            setIsOpen(true);
          }}
        >
          <Image
            src={"/assets/shared/icon-hamburger.svg"}
            height={24}
            width={21}
          />
        </button>
        <menu
          className={`${
            isOpen
              ? "absolute flex-col justify-center right-0 top-0 h-screen backdrop-blur-lg"
              : "hidden"
          } sm:flex w-8/12 justify-around text-base bg-white/5 px-10 z-10`}
        >
          {isOpen && (
            <div className="flex flex-row-reverse w-full my-6">
              <button
                onClick={(e) => {
                  setIsOpen(false);
                }}
                className={` ${isOpen ? "block" : "hidden"}`}
              >
                <Image
                  src={"/assets/shared/icon-close.svg"}
                  height={24}
                  width={24}
                />
              </button>
            </div>
          )}
          <li>
            <button
              value={"Home"}
              onClick={(e) => {
                setPageSelected(e.target.value);
              }}
              className={`flex py-5 sm:py-10  ${
                pageSelected === "Home" ? "sm:border-b-2" : ""
              }`}
            >
              <p className="font-bold block sm:hidden lg:block">01</p>
              &nbsp;&nbsp;HOME
            </button>
          </li>
          <li>
            <button
              value={"Destination"}
              onClick={(e) => {
                setPageSelected(e.target.value);
              }}
              className={`flex py-5 sm:py-10  ${
                pageSelected === "Destination" ? "border-b-2" : ""
              }`}
            >
              <p className="font-bold block sm:hidden lg:block">02</p>
              &nbsp;&nbsp;DESTINATION
            </button>
          </li>
          <li>
            <button
              value={"Crew"}
              onClick={(e) => {
                setPageSelected(e.target.value);
              }}
              className={`flex py-5 sm:py-10  ${
                pageSelected === "Crew" ? "border-b-2" : ""
              }`}
            >
              <p className="font-bold block sm:hidden lg:block">03</p>
              &nbsp;&nbsp;CREW
            </button>
          </li>
          <li>
            <button
              value={"Technology"}
              onClick={(e) => {
                setPageSelected(e.target.value);
              }}
              className={`flex py-5 sm:py-10  ${
                pageSelected === "Technology" ? "border-b-2" : ""
              }`}
            >
              <p className="font-bold block sm:hidden lg:block">04</p>
              &nbsp;&nbsp;TECHNOLOGY
            </button>
          </li>
        </menu>
      </div>
    </header>
  );
}
