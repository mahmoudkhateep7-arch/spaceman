import { AnimatePresence, motion, useScroll, useTransform, } from 'motion/react'
import Image from 'next/image';
import charp from '../public/assets/logos/csharp-pink.png'
import blazerPink from '../public/assets/logos/blazor-pink.png'
import dotnet from '../public/assets/logos/dotnet-pink.png'
import { useRef } from 'react';


const imagesArray = [
  { id: 1, imgUrl: charp },
  { id: 2, imgUrl: blazerPink },
  { id: 3, imgUrl: dotnet },
]
const wordsArray = [
  { id: 1, text: 'SRP' },
  { id: 2, text: 'Design Principles' },
  { id: 3, text: 'Design Patterns' },
  { id: 4, text: 'GRA' },
  { id: 5, text: 'Solid' },

]
const MotionImage = motion.create(Image)

export default function Div2C() {
  const parentDiv = useRef<HTMLDivElement>(null)

  return (
    <div ref={parentDiv} className={`bg-bgbakground overflow-hidden relative flex justify-center items-center rounded-2xl flex-1`}>
      <span className={`text-3xl text-graywhite`}>CODE IS CRAFT</span>

      {/* 3 images and 5 divs all absolute */}
      {imagesArray.map(({ id, imgUrl }) => {
        const rotate = Math.floor(Math.random() * 360) + 'deg'
        const left = Math.floor(Math.random() * 70) + 10 + '%'
        const top = Math.floor(Math.random() * 70) + 10 + '%'

        return (
          <MotionImage key={id} draggable={false} src={imgUrl}
            drag
            whileHover={{ scale: 1.1 }}
            dragElastic={.1}
            whileDrag={{ zIndex: 2, rotate: 0, }}
            dragConstraints={parentDiv}
            className={`w-15 cursor-grab max-[700px]:w-10   absolute h-auto `}
            alt={`image with`}
            style={{ left, top, rotate }}
            width={45} height={45}></MotionImage>
        )
      })}

      {wordsArray.map(({ id, text }) => {
        const rotate = Math.floor(Math.random() * 360) + 'deg'
        const left = Math.floor(Math.random() * 70) + 10 + '%'
        const top = Math.floor(Math.random() * 70) + 10 + '%'

        return (
          <motion.div key={id} draggable={false}
            drag
            whileHover={{ scale: 1.1 }}
            dragElastic={4}
            whileDrag={{ zIndex: 2, rotate: 0 }}
            dragConstraints={parentDiv}
            className={`cursor-grab whitespace-nowrap max-[700px]:px-4   px-8 py-2 bg-gray-600 text-white rounded-full max-[700px]:text-xl  text-2xl absolute h-auto `}

            style={{ left, top, rotate }}
          >
            {text}
          </motion.div>
        )
      })}
    </div>
  )
}