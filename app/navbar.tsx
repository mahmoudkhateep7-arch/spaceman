import { Menu, X } from "lucide-react";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from 'motion/react'
const navLinks = ['home', 'about', 'work', 'contact']

export default function NavbarC({ setscrollMarginTop }:
  { setscrollMarginTop: React.Dispatch<SetStateAction<number>> }) {
  const [show, setShow] = useState(false)
  // i wanna get the h of the sticky div and if ths screen is resized i also wanna know it is h
  useEffect(() => {
    const getH = () => {
      if (ref.current) {
        const el = ref.current
        const exactH = el.getBoundingClientRect().height
        setscrollMarginTop(exactH)
        console.log(exactH)
      }
    }
    getH()
    window.addEventListener('resize', getH)
    return () => { window.removeEventListener('resize', getH) }
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  // remember to add bg or blur backdrop
  return (
    <div ref={ref} className={` sticky backdrop-blur-2xl overflow-hidden
      z-1000 px-4  text-graywhite top-0  w-full`}>

      <div className={`max-w-7xl py-2  mx-auto   `}>

        {/* flex container */}
        <div className={`flex justify-between  items-center `}>
          <a className={`hover:text-white`} href="#home">Mahmoud</a>

          {/* dsiplay icon appear on lg devices */}
          {show ?
            <div className={`sm:hidden`}>
              <X onClick={() => { setShow(false) }} className={`size-6 text-[#a1a1a1] hover:text-white`}></X>
            </div> :
            <div className={`sm:hidden`}>
              <Menu onClick={() => { setShow(true) }} className={`size-6 text-[#a1a1a1] hover:text-white`}></Menu>
            </div>


          }

          <div className={`hidden capitalize sm:flex gap-3`}>
            {navLinks.map((navItem) => {
              return (
                <a className={`hover:text-white`} key={navItem} href={`#${navItem}`}>
                  {navItem}
                </a>
              )
            })}
          </div>
        </div>

      </div>

      <AnimatePresence>
        {show &&
          <motion.div
            exit={{ opacity: 0, y: '-100%', height: 0 }}
            key={'b1'} initial={{ y: '-100%' }} animate={{ y: 0, }}
            className={`flex  py-4 flex-col capitalize sm:hidden items-center   gap-3`}>
            {navLinks.map((navItem, idx) => {

              return (
                <motion.a onClick={() => { setShow(false) }} animate={{ opacity: 1, x: 0, transition: { duration: (idx * 0.3) + .1 } }}
                  initial={{ opacity: 0, x: -100 }} className={`hover:text-white`} key={navItem}
                  href={`#${navItem}`}>
                  {navItem}
                </motion.a>
              )
            })}
          </motion.div>
        }
      </AnimatePresence>


    </div>
  )
}