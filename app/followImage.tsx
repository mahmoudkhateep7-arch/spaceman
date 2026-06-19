import { AnimatePresence, motion, MotionValue, } from 'motion/react'
import { myProjects } from './data';
import Image from 'next/image';

export default function FollowImage({ top, left, showImage, imgId }:
  { top: MotionValue<number>, left: MotionValue<number>, showImage: boolean, imgId: number }) {
  return (
    <AnimatePresence>
      {showImage && imgId >= 0 &&

        <motion.div
          key={myProjects[imgId].title}
          style={{ top, left }}
          className={`fixed max-[600px]:hidden z-100 pointer-events-none w-80 h-80 `}>
          <Image alt={myProjects[imgId].title} src={myProjects[imgId].image} width={400} height={400}
            className={`w-80 h-80 object-cover border-4 border-white`}
          />

        </motion.div>
      }
    </AnimatePresence>
  )
}
