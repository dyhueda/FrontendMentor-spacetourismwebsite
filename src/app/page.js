import Image from 'next/image'
import { barlow , bellefair } from './fonts';

export default function Home() {
  return (
    <main className="pt-32 sm:pt-52 lg:pt-96 px-6 flex flex-col items-center gap-4 h-full w-full bg-[url(/assets/home/background-home-mobile.jpg)] bg-no-repeat bg-cover bg-center sm:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)]">
      <h2 className="text-base text-textColor">SO, YOU WANT TO TRAVEL TO</h2>
      <h1 className={`${bellefair.className} text-7xl sm:text-[150px]`}>SPACE</h1>
      <p className={`${barlow.className} text-base text-center text-textColor`}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      <button className="mt-20 size-40 bg-white rounded-full text-backgroundColor text-xl">EXPLORE</button>
    </main>
  )
}
