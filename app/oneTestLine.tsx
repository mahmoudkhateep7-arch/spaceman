import Image from "next/image"
import { reviews } from "./data"

export default function OneLineTest({
  cSeconds, arr, animationName }: {
    cSeconds: string,
    animationName: string

    arr: {

      name: string,
      username: string,
      body: string,
      img: string,

    }[]
  }) {
  return (
    <div className={`overflow-hidden `}>
      <div
        // whileHover={{ background: '#fff', }}

        // animate={{ x: '-50%', transition: { duration: 10, repeat: Infinity, ease: 'linear' } }}

        style={{ animationDuration: cSeconds, animationName: animationName }}

        className={`flex flex-nowrap   w-max ${animationName == 'ltr' ? 'ltr' : 'rtl'}  gap-10 overflow-hidden    p-4`}>



        {[1, 2].map((n) => {
          return (
            <div key={n} className={`flex border-r  border-l gap-10`}>
              {arr.map(({ body, img, name, username }) => {
                return (
                  <div className={`p-4 max-[500px]:w-80 w-100 bg-black text-white rounded-2xl shadow shadow-white`} key={name + username}>
                    {/* upper div */}
                    <div className={`flex items-start  gap-3`}>
                      <div className={``}>
                        <Image alt={name} src={img} width={40} height={40}
                          className={`w-10 h-10  object-cover  rounded-full`} />
                      </div>
                      <div className={`flex text-white flex-col`}>
                        <span className={`text-xl`}>{name}</span>
                        <span>{username}</span>
                      </div>
                    </div>
                    <p className={`pt-2 pl-2`}>
                      {body}
                    </p>
                  </div>
                )
              })}

            </div>
          )
        })}
      </div>


    </div>
  )
}