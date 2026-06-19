import Globe from "./globe";

export default function Div3C() {

  return (
    <div className={`bg-bgbakground overflow-hidden max-[850px]:h-1/2 relative  flex-1`}>
      <div className={` w-1/2 max-[500px]:w-full p-6 relative z-3`}>
        <h4 className={`text-3xl max-[600px]:text-xl pb-3`}>Time Zone </h4>
        <p className={`max-[600px]:text-sm`}>I'm based in Mars, and open to remote work worldwide</p>
      </div>
      <Globe></Globe>

    </div>
  )
}