
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useSpring, } from 'motion/react'
import { myProjects } from './data';
import arrowUp from '../public/assets/arrow-up.svg'
import X from '../public/assets/close.svg'
import Image from 'next/image';

export default function PopupC({ popupId, showPopup, setShwoPopu }:
  { showPopup: boolean, popupId: number, setShwoPopu: React.Dispatch<SetStateAction<boolean>> }) {

  return (
    <AnimatePresence>
      {showPopup && popupId != -4 &&

        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: .7 }}
          exit={{ x: '100vw' }}
          className={`fixed  overflow-hidden z-2000   flex justify-center h-screen top-0 w-full bg-[#333333c5]`}>
          <div className={`absolute z-2000 top-4 right-4`}>
            <Image onClick={() => { setShwoPopu(false) }}
              alt={'close'} src={X} height={20} width={20} className={`w-8 h-8 bg-red-400 cursor-pointer hover:brightness-75`} />
          </div>
          <div className={`bg-black text-graywhite
               h-full overflow-y-auto w-140 overflow-x-hidden relative p-4`}>

            <div className={` bmorder-white`}>
              <Image width={500}
                className={`w-140 h-auto`}
                height={500} alt={myProjects[popupId - 1].title}
                src={myProjects[popupId - 1].image} />

            </div>
            <h3 className={`text-2xl max-[700px]:text-xl py-3 text-white  `}>
              {myProjects[popupId - 1].title}
            </h3>
            <p className={`max-[700px]:text-sm`}>
              {myProjects[popupId - 1].description}

            </p>
            <div className={`flex  flex-col gap-1 pt-4`}>
              {myProjects[popupId - 1].subDescription.map((d) => {
                return (
                  <p className={`max-[700px]:text-sm`} key={d}>
                    {d}
                  </p>
                )
              })}

            </div>
            <div className={`flex  justify-between items-center pt-10`}>
              <div className={`flex gap-3`}>
                {myProjects[popupId - 1].tags.map(({ id, name, path }) => {
                  return (
                    <motion.div whileHover={{ scale: 1.7 }} className={`cursor-pointer`} key={path}>
                      <Image className={`h-8 max-[370px]:w-6 max-[370px]:h-6 w-8 object-cover`} alt={name} src={path} width={40} height={40} />
                    </motion.div>
                  )
                })}


              </div>

              <motion.a
                whileHover={{ scale: 1.1, y: -10 }}
                href={'https://animatedportifloio.vercel.app/'} target={'_blank'} className={`flex max-[370px]:text-sm items-center gap-3`}>
                <span>View Project</span>
                <Image src={arrowUp} alt={'arrow up'} width={20}
                  className={`h-5 max-[370px]:w-4 max-[370px]:h-4 w-5 object-cover`}
                  height={20} />

              </motion.a>

            </div>
          </div>

        </motion.div>
      }
    </AnimatePresence>
  )
}