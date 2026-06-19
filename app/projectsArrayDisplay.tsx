import Image from "next/image"
import { myProjects } from "./data"
import { AnimatePresence, motion, useSpring, } from 'motion/react'
import { SetStateAction } from "react"
import arrowright from '../public/assets/arrow-right.svg'

export default function ProjectArrayDiplay({ setShowImage, setImgId, setPopupId, setShwoPopu }: {
  setShowImage: React.Dispatch<SetStateAction<boolean>>,
  setImgId: React.Dispatch<SetStateAction<number>>,
  setPopupId: React.Dispatch<SetStateAction<number>>,
  setShwoPopu: React.Dispatch<SetStateAction<boolean>>,

}) {
  const handleLeave = () => {
    setShowImage(false)

  }
  const handleEnter = (id: number) => {
    setShowImage(true)
    setImgId(id - 1)


  }
  const shomore = (id: number) => {
    setPopupId(id)
    setShwoPopu(true)

  }
  return (
    <>
      {
        myProjects.map(({ description, href, id, image, logo, subDescription, tags, title }) => {
          return (
            <motion.div onMouseLeave={handleLeave}
              onMouseEnter={() => { handleEnter(id) }} className={`flex gap-4 border-b pb-4  border-[#ffffff5c] max-[550px]:flex-col max-[550px]:items-start justify-between items-center`} key={id}>
              <div className={` flex gap-3  flex-col`}>
                <h3 className={`text-2xl max-[650px]:text-xl text-white `}>
                  {title}
                </h3>
                <div className={`flex  max-[650px]:text-sm gap-2 text-yellow-400`}>
                  {tags.map(({ id, name, path }) => {
                    return (
                      <span key={`${id}${name}`}>{name}</span>
                    )
                  })}
                </div>

              </div>
              <motion.div
                onClick={() => { shomore(id) }}
                whileHover={{ y: -5 }}
                className={`flex cursor-pointer gap-1 bg-black px-4 py-1 rounded-full text-white items-center `}>
                <span className={`max-[650px]:text-sm whitespace-nowrap`}>Read More</span>
                <Image alt={title} src={arrowright} width={18} height={18}
                  className={`w-5 max-[650px]:size-4 h-auto object-cover`}
                />
              </motion.div>
            </motion.div>
          )
        })
      }

    </>
  )
}