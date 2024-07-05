import React from 'react';
import { Typewriter } from './Typewriter.jsx';
import atomic_habits_quote from '../assets/atomic_habits_quote.png';

export function About() {
  return (
    <div className="container mx-auto my-32">
        <div className="flex inline mt-20 grid grid-cols-2 ml-12">
            <div className="grid-rows-2">
                <h1 className="flex-inline text-3xl font-bold"> <Typewriter text="A little more about me :)" delay={30} /></h1>
                <div className="mt-12 text-slate-600 leading-8">
                    Throughout my entire college career I have been incredibly blessed to be in an environment surrounded by amazing sources and intelligent people that continually push me to be the best version of myself that I can be.
                    The courses and life lessons that the University of Michigan has taught me has provided me with the necessary skills and confidence to pursue my interests and passions.
                    Although there is a vast sea of knowledge ahead of me, I am excited to see what the future has in store for me!
                </div>
            </div>
            <div className="ml-48">
                <img src={atomic_habits_quote} alt="Quote from Atomic Habits" className="rounded-3xl overflow-hidden"/>
            </div>
        </div>
    </div>
  )
}

export default About;