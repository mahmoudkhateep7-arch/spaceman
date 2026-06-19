'use client'


import { useEffect, useRef, useState } from 'react';
import { motion, } from 'motion/react'
import NavbarC from './navbar';
import HeroAndCleanup from './hero';
import AboutMeC from './aboutmec';
import SelectedProjects from './SelectedProjects';
import { experiences, mySocials, reviews } from './data';
import MyWorkC from './myworkc';
import Image from 'next/image';
import OneLineTest from './oneTestLine';
import Testmoinals from './testmoilas';
import ContactC from './contactC';
const year = new Date().getFullYear()
export default function App() {
  const [scrollMarginTop, setscrollMarginTop] = useState(50)
  const [isCopied, setIsCopied] = useState(false)
  const [mounted, setMounted] = useState(1)


  useEffect(() => {
    if (isCopied == false) { return }
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 3000);
  }, [isCopied])

  useEffect(() => {
    setMounted(3)
  }, [])
  if (mounted != 3) { return }

  return (
    <motion.div id={`home`} className={`bg-black  relative  `}>
      <NavbarC setscrollMarginTop={setscrollMarginTop}></NavbarC>
      {/* hero section with images bg and faaling astraunt and it is cleanup */}
      <HeroAndCleanup scrollMarginTop={scrollMarginTop}></HeroAndCleanup>


      {/* about me section */}
      <AboutMeC scrollMarginTop={scrollMarginTop}></AboutMeC>





      {/* My Selected Projects */}

      <SelectedProjects></SelectedProjects>


      {/* <div className={`h-screen`}></div> */}
      {/* My Work Experience */}
      <MyWorkC scrollMarginTop={scrollMarginTop}></MyWorkC>

      {/* testmonials row */}
      <Testmoinals></Testmoinals>


      {/* contact */}
      <ContactC scrollMarginTop={scrollMarginTop}></ContactC>

      {/* footer */}
      <footer className={`px-6 text-white py-10`}>
        <div className={`max-w-7xl mx-auto`}>
          <div className={`flex max-[700px]:grid max-[700px]:grid-cols-2 max-[610px]:grid-cols-1 justify-between gap-10 items-center`}>
            <span>Terms & Conditions | Privacy Policy</span>
            <div className={`flex gap-4`}>
              {mySocials.map(({ href, icon, name }) => {
                return (
                  <Image alt={name} src={icon} width={20} height={20} key={name} />
                )
              })}
            </div>
            <span>
              © {new Date().getFullYear()} Ali. All rights reserved.
            </span>
          </div>
        </div>
      </footer>


    </motion.div >
  );
}


