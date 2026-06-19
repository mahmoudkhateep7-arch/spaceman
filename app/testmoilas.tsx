import { reviews } from "./data";
import OneLineTest from "./oneTestLine";
const arr1 = reviews.slice(0, 4)
const arr2 = reviews.slice(4, reviews.length)
export default function Testmoinals({ }: {}) {
  return (
    <section className={`py-10 px-4  `}>
      <div className={`max-w-7xl mx-auto`}>
        <OneLineTest animationName={'rtl'} cSeconds={'5s'} arr={arr1}></OneLineTest>
        <OneLineTest animationName='ltr' cSeconds={'15s'} arr={arr2}></OneLineTest>



      </div>
    </section>
  )
}