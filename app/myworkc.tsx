import { experiences } from "./data"

export default function MyWorkC({ scrollMarginTop }: { scrollMarginTop: number }) {
  return (
    <section style={{ scrollMarginTop }} id={'work'} className={`py-10 px-4 `}>

      <div className={`max-w-7xl mx-auto p-2 `}>
        <h3 className={`text-3xl text-white pb-15 font-semibold`}>My Work Experience</h3>

        <div className={` flex flex-col gap-20`}>
          {experiences.map(({ contents, date, job, title }, idx) => {
            return (
              <div
                className={`grid  max-[900px]:flex max-[900px]:flex-col childitem gap-10  border-graywhite border-l relative   grid-cols-12 `}
                key={title + job}>
                <div className={`absolute w-10 h-10 bg-black flex  left-0 -translate-x-1/2 justify-center items-center rounded-full`}>
                  <div className={`bg-graywhite flex justify-center items-center  w-6 rounded-full h-6`}>
                    {idx + 1}
                  </div>
                </div>
                <div className={`  col-span-4 flex flex-col pl-6  gap-2`}>
                  <span className={`text-4xl max-[450px]:text-2xl text-white`}>{date}</span>
                  <span className={`text-3xl max-[450px]:text-2xl text-graywhite`}>{title}</span>
                  <span className={`text-graywhite max-[450px]:text-xl text-3xl`}>{job}</span>
                </div>

                <div className={`col-span-8 max-[450px]:text-sm max-[900px]:pl-6 flex-col flex gap-4 text-graywhite`}>
                  {contents.map((d, idx) => {
                    return (
                      <p className={`max-[500px]:line-clamp-2`} key={d + idx}>
                        {d}
                      </p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}