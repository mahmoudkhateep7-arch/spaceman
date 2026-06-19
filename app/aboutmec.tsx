import Div3C from './div3C';
import Div2C from './div2C';
import Div1C from './div1C';
import Div4C from './div4';
import TextC from './textC';
import TwoCircles from './circles';

export default function AboutMeC({ scrollMarginTop }: { scrollMarginTop: number }) {

  return (
    <section id={`about`} style={{ scrollMarginTop }}
      className={`px-4  py-30`}>
      <div className={`max-w-7xl flex flex-col gap-5  mx-auto p-2 `}>
        <h2 className={`text-4xl max-[600px]:text-2xl text-white font-semibold`}>About Me</h2>
        <div className={`grid max-[850px]:flex max-[850px]:flex-col max-[850px]:h-auto grid-cols-2 gap-5  h-150`}>
          {/* div 1 */}
          <Div1C></Div1C>


          {/* div 2 and 3 */}
          <div className={` flex max-[850px]:h-200 bg-camber-300 flex-col gap-5 text-white`}>
            {/* div 2 */}
            <Div2C></Div2C>

            {/* div 3 */}
            <Div3C></Div3C>
          </div>
        </div>
        <div className={`grid  max-[850px]:flex max-[850px]:flex-col  gap-5 grid-cols-12`}>
          {/* div 4 */}
          <Div4C></Div4C>

          {/* div 5 */}
          <div className={`bg-bgbakground overflow-hidden max-[850PX]:H-100 h-72 relative p-4 col-span-8`}>

            <TextC></TextC>
            <div className={`absolute inset-0 bg-[#33333335] z-1 `}></div>
            <TwoCircles></TwoCircles>






          </div>
        </div>

      </div>
    </section>
  )
}