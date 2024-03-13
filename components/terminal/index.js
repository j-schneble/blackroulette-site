"use client"
import { Keyframes, Frame } from './react-keyframes.ts'
import styles from './terminal.module.css'
import { useState } from 'react'
import { BiLogoVisualStudio } from "react-icons/bi";
import { Button} from "@nextui-org/react";
import React from "react";
import { Link } from "@nextui-org/link";

const sleepDuration = 500
const getTypingDuration = () => 80 + 80 * (Math.random() - 0.5)

const Line = ({ text, noPrompt = false, noCaret = false }) => (
  <>
    {!noPrompt && <span className='text-zinc-600'>  </span>}
    {text}
    {!noCaret && <span className={styles.caret} />}
  </>
)

const Terminal = () => {
  const [lineCount, setLineCount] = useState(0)

  const renderLine = (text) => {
    const frames = []

    // starting frame
    frames.push(
      <Frame duration={sleepDuration} key={`${text}-first`}>
        <Line />
      </Frame>
    )

    // typing out the line
    for (let i = 0; i < text.length; i++) {
      const isLastLetter = i === text.length - 1
      const duration = isLastLetter ? sleepDuration : getTypingDuration()
      frames.push(
        <Frame duration={duration} key={`${text}-${i}`}>
          <Line text={text.slice(0, i + 1)} />
        </Frame>
      )
    }

    // ending frame
    frames.push(
      <Frame key={`${text}-last`}>
        <Line text={text} noCaret />
      </Frame>
    )


    return (
      <Keyframes component="p" onEnd={() => setLineCount((c) => c + 1)}>
        {frames}
      </Keyframes>
    )
  }

  return (
    <div className={styles.root}>
      <div
        className={`${styles.inner}${lineCount >= 5 ? ' ' + styles.rose : ''}`}
      >
        <div className={styles.header}>

       
        </div>
    
        <div className={styles.body}>
          {renderLine('BlackRoulette ')}
          {lineCount >= 1 &&
            renderLine('A minimal, dark extension for VS code.')}

          {lineCount >= 2 &&
            renderLine('v0.0.2 coming soon for iTerm2 + Sublime.')}

            {lineCount >= 3 &&
              renderLine(
            <div className='  pb-2 '>
      <div className="flex  text-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-md rounded-lg shadow-small ml-1 z-10">
{/*     
        <CircularProgress
            className="px-2"
            size="md"
            value={100}
            color="success"
//   formatOptions={{ style: "unit", unit: "kilometer" }}
            showValueLabel={true}
        /> */}
        <Button 
            isExternal
            href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
            as={Link}
            className=" text-center text-white bg-black/20" 
            variant="flat" color="default" radius="lg" size="sm"
        >
          <div className='flex justify-center max-w-full items-center text-center '>

            <h1 className='px-2 text-center text-base font-medium text-zinc-200'>v0.0.1</h1>
            <h1 className=' border-l text-base  border-white/20 px-2  text-blue-500'>
            <BiLogoVisualStudio size={25} />
            </h1>
          
          </div>
        </Button>
      </div> 
      </div>  
      )}
      <>  
             
            </>
  
        </div>
      </div>
    </div>
  )
}

export default Terminal
