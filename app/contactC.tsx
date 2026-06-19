import { useEffect, useRef, useState } from "react"
import { motion, } from 'motion/react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function ContactC({ scrollMarginTop }: { scrollMarginTop: number }) {
  const [uName, setname] = useState('')
  const [uEmail, setEmail] = useState('')
  const [uMessage, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMesssage] = useState(false)
  const [popUp, setpoPup] = useState(false)
  const clodeRef = useRef<HTMLDivElement>(null)
  const handelSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {

    e.preventDefault()
    if (loading) { return }
    const vName = uName.trim().length > 0
    const vEmail = uEmail.trim().length > 0

    const vMessage = uMessage.trim().length > 0
    if (vEmail && vMessage && vName) {
      // set a timer for 1 second
      setLoading(true)


    }
    else {
      setpoPup(true)

    }



  }
  const closeGsap = () => {
    gsap.to(clodeRef.current, { x: '100%', duration: .8, onComplete: () => { setpoPup(false) } })
  }

  useEffect(() => {
    if (loading == false) { return }
    const timout = setTimeout(() => {
      setLoading(false)
      setShowMesssage(true)
      setMessage('')
      setname('')
      setEmail('')

    }, 1000);
    return () => { clearTimeout(timout) }


  }, [loading])

  useEffect(() => {
    if (showMessage == false) { return }
    const timout = setTimeout(() => {

      setShowMesssage(false)

    }, 3000);
    return () => { clearTimeout(timout) }

  }, [showMessage])

  useGSAP(() => {
    if (popUp == false) { return }
    gsap.fromTo(clodeRef.current, { xPercent: -100 }, { xPercent: 0, duration: 1.2 })

  }, { dependencies: [popUp] })
  const btnRef = useRef<HTMLButtonElement>(null)
  const hadnelMouseEnter = () => {
    gsap.to(btnRef.current, { background: 'white', color: 'black', duration: .6, })
  }
  const hadnelMouseLeave = () => {
    gsap.to(btnRef.current, { background: 'green', color: 'white', duration: .6, })
  }
  return (
    <section style={{ scrollMarginTop }}
      id={`contact`} className={`  text-white [&_placeholder]:text-graywhite  px-2`}>
      {/* popup */}
      {popUp &&
        <div
          onClick={(e) => {
            if (e.target == e.currentTarget) {
              closeGsap()
            }
          }}
          ref={clodeRef}
          className={`fixed top-0 h-screen w-full flex justify-center items-center p-4 text-xl z-3000  bg-[#644d499b] text-white`}>
          <div className={`bg-white px-4 py-2 flex items-center gap-30 justify-between`}>
            <h5 className={` text-black `}>Fill all fields</h5>
            <span onClick={closeGsap} className={`bg-red-500 px-4 py-2 cursor-pointer`}>X</span>

          </div>

        </div>
      }

      {/* message */}
      {showMessage &&
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0, transition: { duration: 1 } }}
          className={`fixed p-4 text-xl bottom-4 z-100 right-4 bg-green-500 text-white`}>
          <h5>Message Recived will check it soon</h5>

        </motion.div>
      }
      <div className={`max-w-7xl mx-auto  h-screen flex-col flex justify-center items-center`}>
        <div className={`w-100 max-[450px]:w-full `}>
          <div>
            <h3 className={`text-4xl max-[600px]:text-2xl pb-2`}>Let's Talk</h3>
            <p className={`text-graywhite max-[500px]:text-sm pr-4 line-clamp-3`}>Whether you're loking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
          </div>
          <form className={`flex pt-5 flex-col gap-3`} onSubmit={handelSubmit}>
            <div className={`flex flex-col gap-1  `}>
              <label className={`cursor-pointer `} htmlFor="in1">Full Name</label>
              <input value={uName} onChange={((e) => { setname(e.target.value) })} className={`outline-0 border border-graywhite px-6 py-3 `} id={`in1`} type="text" placeholder={`John Doe`} />
            </div>
            <div className={`flex flex-col gap-1  `}>
              <label className={`cursor-pointer `} htmlFor="in2">Email</label>
              <input value={uEmail} onChange={((e) => { setEmail(e.target.value) })} className={`outline-0 border border-graywhite px-6 py-3  `} id={`in2`} type="text" placeholder={`JohnDoe@email.com`} />
            </div>
            <div className={`flex flex-col gap-1  `}>
              <label className={`cursor-pointer `} htmlFor="in3">Message</label>
              <textarea value={uMessage} onChange={((e) => { setMessage(e.target.value) })} className={`outline-0 border-graywhite border px-6 py-3  resize-none`} placeholder={`share your thoughts`} name="" id="in3"></textarea>
            </div>
            <div className={`flex flex-col `}>
              <button onMouseLeave={hadnelMouseLeave} ref={btnRef} onMouseEnter={hadnelMouseEnter} className={`bg-amber-600 cursor-pointer  py-3`} type={'submit'}>
                {loading ? 'Sending...' : 'Send'}

              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}