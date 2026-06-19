import { AnimatePresence, motion } from "motion/react"
import Image from "next/image";
import { useEffect, useState } from "react";
import copy from '../public/assets/copy.svg'
import donecopy from '../public/assets/copy-done.svg'


export default function Div4C() {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied == false) { return }
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 3000);
  }, [isCopied])
  const handelcopyEmaild = async () => {
    setIsCopied(true)
    await window.navigator.clipboard.writeText('mahoudkhateep7@gmail.com')
  }
  return (
    <div className={`bg-purple-500 max-[850px]:h-100 text-white  gap-4 overflow-hidden flex flex-col justify-center items-center col-span-4`}>
      <h4 className={`text-center`}>Do you want to start a project together?</h4>
      <motion.div
        className={`  text-white   `}
        whileHover={{ y: 10 }}>
        <AnimatePresence mode={'wait'}>
          {isCopied == false ?

            <motion.div
              key={'firstb'}

              whileTap={{ scaleX: 1.1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: .5 }}
              animate={{ opacity: 1 }}
              exit={{ scaleX: 2, opacity: [1, 1, 1, 1, 0], transition: { duration: .3 } }}

              onClick={() => { handelcopyEmaild() }}
              className={`flex gap-1 h-full px-4 bg-black cursor-pointer  rounded-full py-3 items-center`}>
              <Image alt={'copy'} src={copy} width={30} height={30}></Image>
              <span>Copy Email Address</span>


            </motion.div> :
            <motion.div
              key={'secondb'}
              exit={{ scaleX: 2, opacity: [1, 1, 1, 0], transition: { duration: .3 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: .5 }}
              animate={{ opacity: 1 }}
              whileTap={{ scaleX: 1.1 }}
              // onClick={() => { setIsCopied(false) }}
              className={`flex gap-1 h-full px-4 bg-black rounded-full py-3 items-center`}>
              <Image alt={'copy'} src={donecopy} width={30} height={30}></Image>
              <span>Email has Copied</span>


            </motion.div>


          }
        </AnimatePresence>
      </motion.div>

    </div>
  )
}