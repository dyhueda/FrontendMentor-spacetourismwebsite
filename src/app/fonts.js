import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google'
 
export const bellefair = Bellefair({ subsets: ['latin'], weight : '400' })
 
export const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900']})

export const barlow = Barlow({ subsets: ['latin'], weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900']})