import React from 'react'
import { Typewriter } from './Typewriter.jsx';
import { LinkBelt } from './LinkBelt.jsx';

export function Contacts() {
  return (
    <div className="container mx-auto my-32">
    <div className="w-full flex inline mt-20 w-96">
        <div className="grid-rows-3">
            <h1 className="flex-inline text-3xl font-bold"> <Typewriter text="Let's Get in Touch: Ways to Connect With Me" delay={30} /></h1>
            <div className="my-12 text-slate-600 leading-8">
                Thank you for taking the time to look through my portfolio and get to know me! I welcome any feedback, questions, and suggestions.
                if you have a specific question or comment for me, please feel free to email me directly at <a className="underline hover:text-sky-500" href="mailto:kylejlee@umich.edu">kylejlee@umich.edu</a>.
                I make an effort to respond within 24 hours, although it may take me longer during busy periods. 
                Finally, if you prefer to connect on social media, you can find me on <a className="underline hover:text-sky-500" target="_blank" rel="noopener" href="https://www.linkedin.com/in/kylelee1027">LinkedIn</a>, 
                but otherwise, my other links will be down below. Thank you again for your interest and I look forward to hearing from you!
            </div>
        </div>
    </div>
    <LinkBelt />
</div>
  )
}

export default Contacts