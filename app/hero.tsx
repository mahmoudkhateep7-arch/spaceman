import { Canvas } from "@react-three/fiber";
import SpaceMan from "./spaceman";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform, } from 'motion/react'
import { useEffect, useState } from "react";
const threeWords = ['Scalable ', `Modern`, 'Secure']

export default function HeroAndCleanup({ scrollMarginTop }: { scrollMarginTop: number }) {
  const [past200, setPaset200] = useState(false)
  const { scrollYProgress, scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 400) {
      setPaset200(true)
    } else {
      setPaset200(false)

    }

  })

  const s = useSpring(scrollYProgress, { damping: 10 })
  const mountain3Y = useTransform(s, [0, .5], ['0%', '70%'])
  const leftMoon = useTransform(s, [0, .5], ['0%', '-20%'])
  const [activeIndex, setactiveIndex] = useState(0)
  useEffect(() => {
    const interv1 = setInterval(() => {
      setactiveIndex((prev) => { return (prev + 1) % threeWords.length })
    }, 3000);
  }, [])

  const [moreThan750px, setmoreThan750px] = useState(true)
  useEffect(() => {
    const resizeFunction = () => {
      if (window.innerWidth > 750) {
        setmoreThan750px(true)
      } else {
        setmoreThan750px(false)
      }
    }
    resizeFunction()
    window.addEventListener('resize', resizeFunction)
    return () => { window.removeEventListener('resize', resizeFunction) }
  }, [])
  console.log(moreThan750px)
  return (
    <>

      <section className={`absolute overflow-hidden   w-full   top-0 h-screen`}>
        {/* container */}
        <div className={`relative h-screen overflow-hidden `}>

          <div className={`w-full   absolute z-4 px-4    overflow-hidden h-screen`}>
            <div className={`h-screen max-[770px]:items-center max-w-7xl mx-auto flex flex-col justify-center 
  `}>
              <div className={`text-white max-[770px]:items-center flex flex-col gap-3`}>
                <h2 className={`text-4xl max-[570px]:text-3xl`}>Hi I'm Mahmoud</h2>
                <div className={`text-5xl max-[770px]:items-center max-[770px]:text-3xl max-[770px]:text-center flex flex-col gap-1`}>
                  <span className={``}>A Developer</span>
                  <span>Dedicated to Crafting</span>
                </div>

                <div className={`relative h-13 w-full  flex items-center font-semibold`}>
                  <AnimatePresence mode={'wait'}>
                    <motion.div key={activeIndex} className={`absolute max-[770px]:justify-center  max-[770px]:w-full  flex items-center  max-[770px]:text-2xl  text-6xl`}
                      animate={{ opacity: [0, 0, 0, 1], x: 0, transition: { duration: .5 } }}
                      initial={{ opacity: 0, x: -200 }}
                      exit={{
                        scale: 3, opacity: [1, 1, 1, 1, 0],

                        transition: { duration: .4 },
                      }}
                    >
                      {threeWords[activeIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className={`text-3xl`}>Web Solutions</span>
              </div>

            </div>
          </div>
          <div className={`inset-0  sky1 top-0 absolute  `}></div>
          <motion.div style={{ y: mountain3Y }} className={`m3 absolute inset-0`}></motion.div>
          <motion.div style={{ x: leftMoon }} className={`absolute inset-0 plantsbg`}></motion.div>
          <motion.div className={`m2 absolute inset-0`}></motion.div>
          <motion.div className={`m1 absolute inset-0`}></motion.div>
          {past200 == false &&
            <motion.figure

              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
              className={`absolute  inset-0 `}>
              <Canvas >
                <ambientLight intensity={1332}></ambientLight>
                <SpaceMan position={moreThan750px ? [2, -1, 1] : [0, -1, 1]} ></SpaceMan>
              </Canvas>
            </motion.figure>
          }


        </div>
      </section>






      {/* this div makes sure all the content below the hero section get below it not under it */}
      <div style={{ height: `calc(100vh - ${scrollMarginTop}px)` }} className={` w-full relative `}></div >
    </>
  )
}