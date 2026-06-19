
import { motion } from 'motion/react'
import Image from 'next/image';
const skills = [
  "auth0",
  "blazor",
  "cplusplus",
  "csharp",
  "css3",
  "dotnet",
  "dotnetcore",
  "git",
  "html5",
  "javascript",
  "microsoft",
  "react",
  "sqlite",
  "tailwindcss",
  "vitejs",
  "wordpress",
];

export default function TwoCircles() {
  return (
    <>

      <div className={`absolute inset-0 flex max-[500px]:pr-15 max-[480px]:pr-3 items-center pr-20 justify-end `}>
        <motion.div

          className={`h-75 max-[650px]:hidden loop bg-ambedr-500 aspect-square   relative`}>
          {skills.map((i, idx) => {
            const src = `../assets/logos/${i}.svg`
            const deg = 360 / skills.length
            return (
              <motion.div style={{ rotate: idx * deg }} className={`bg-admber-200 absolute inset-0`} key={i}>
                <Image

                  alt={i}

                  style={{ rotate: `-${idx * deg}deg` }}
                  src={src} width={30} height={30} className={`h-12 hover:scale-[3.1] relative z-100 w-12`} />
              </motion.div>
            )
          })}



        </motion.div>

      </div>


      <div className={`absolute max-[650px]:pr-10  inset-0 flex items-center pr-37 justify-end `}>
        <motion.div



          className={`h-45 bg-mber-200  loop2 bg-ambedr-500 aspect-square   relative`}>
          {skills.reverse().map((i, idx) => {
            const src = `../assets/logos/${i}.svg`
            const deg = 360 / skills.length
            return (
              <motion.div style={{ rotate: idx * deg }} className={`bg-admber-200 absolute inset-0`} key={i}>
                <Image

                  alt={i}

                  style={{ rotate: `-${idx * deg}deg` }}
                  src={src} width={30} height={30} className={`h-8 hover:scale-[3.1] relative z-100 w-8`} />
              </motion.div>
            )
          })}



        </motion.div>

      </div>
    </>
  )
}