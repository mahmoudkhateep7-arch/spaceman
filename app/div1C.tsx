import Image from "next/image";
import PovCoding from '../public/assets/coding-pov.png'

export default function Div1C() {
  return (
    <div className={`bg-bgbakground rounded-2xl overflow-hidden z-0
                   bgcopmuter text-white max-[850px]:h-100 flex p-4 items-end relative`}>
      <Image alt={'pov coding'}

        className={`absolute scale-[3] max-[700px]:top-1 max-[700px]:scale-[1.8] max-[1200px]:scale-[1.6] top-20 -right-10 z-10 `}


        src={PovCoding} width={400} height={400}></Image>
      <div className={`relative z-10`}>
        <h3 className={`text-3xl max-[600px]:text-xl font-semibold`}>Hi, I'm Mahmoud Khateep</h3>
        <p className={`pt-4 tracking-wide max-[600px]:text-sm  pr-10 text-graywhite`}>Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic and software and web applications.</p>

      </div>
    </div>
  )
}