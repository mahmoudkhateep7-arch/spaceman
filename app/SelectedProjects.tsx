import { useState } from "react";
import FollowImage from "./followImage";
import PopupC from "./popup";
import ProjectArrayDiplay from "./projectsArrayDisplay";
import { useSpring } from "motion/react";

export default function SelectedProjects() {
  const [showImage, setShowImage] = useState(false)
  const cords: { left: number; top: number } = ({ left: 0, top: 0 })
  const [popupId, setPopupId] = useState(-4)
  const left = useSpring(cords.left, { damping: 10, stiffness: 100 })
  const top = useSpring(cords.top, { damping: 10, stiffness: 100 })


  const [showPopup, setShwoPopu] = useState(false)
  const [imgId, setImgId] = useState(-2)
  const handlemousemove = (e: React.MouseEvent<HTMLDivElement>) => {


    left.set(e.clientX + 20)
    top.set(e.clientY + 20)
  }

  return (
    <section id={`projects`} className={`py-10  px-2`}>

      {/* popup */}
      <PopupC setShwoPopu={setShwoPopu} showPopup={showPopup} popupId={popupId}></PopupC>

      {/* followImage */}
      <FollowImage imgId={imgId} left={left} showImage={showImage} top={top} ></FollowImage>

      <div className={`max-w-7xl p-2   mx-auto  `}>


        <h2 className={`text-3xl max-[600px]:text-2xl font-bold text-white pb-10`}>My Selected Projects</h2>

        <div onMouseMove={handlemousemove} className={`flex overflow-hidden relative p-1 flex-col gap-10`}>
          <ProjectArrayDiplay setImgId={setImgId} setPopupId={setPopupId} setShowImage={setShowImage}
            setShwoPopu={setShwoPopu}
          ></ProjectArrayDiplay>

        </div>
      </div>
    </section>
  )
}