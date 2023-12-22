"use client"
import { useRouter } from "next/navigation";
import { barlow, bellefair } from "./fonts";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Header/>
    <main className="pt-32 sm:pt-52 lg:pt-52 px-6 flex flex-col items-center min-h-screen w-full lg:justify-between sm:px-32 lg:px-52 lg:flex-row bg-[url(/assets/home/background-home-mobile.jpg)] bg-no-repeat bg-cover bg-center sm:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)]">
      <div className="flex flex-col items-center gap-4 sm:gap-6 lg:w-4/12">
        <h2 className="text-base sm:text-xl lg:text-3xl text-textColor">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className={`${bellefair.className} text-7xl sm:text-[150px]`}>
          SPACE
        </h1>
        <p
          className={`${barlow.className} text-base sm:text-lg lg:text-xl text-center text-textColor`}
          >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button onClick={(e)=>{router.push("/Destination")}} className="mt-20 sm:mt-40 size-40 sm:size-60 lg:size-64 bg-white rounded-full text-backgroundColor text-xl sm:text-4xl">
        EXPLORE
      </button>
    </main>
          </>
  );
}
