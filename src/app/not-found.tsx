export default function NotFound() {
  return (
    // absolute top-[10rem] left-[25rem] -mt-[18rem]
    <div className="flex justify-center flex-col items-center     w-[75rem]     h-[100vh]">
      <div
        className="flex  -mt-[19rem] items-center justify-center mr-[5rem]   w-full  
       "
      >
        <h1 className="text-5xl font-black text-center  text-black ">
          404 - Page Not Found
        </h1>
      </div>
      <div className="  flex  ">
        <div className="vader   ">
          <div className="shadow"></div>
          <div className="head">
            <div className="helmet">
              <span className="left"></span>
              <span className="right"></span>
            </div>
            <div className="eyes">
              <span className="left"></span>
              <span className="right"></span>
            </div>
            <span className="grill">
              <span className="left"></span>
              <span className="center"></span>
              <span className="right"></span>
            </span>
            <span className="mask">
              <span className="top"></span>
              <span className="left"></span>
              <span className="center"></span>
              <span className="right"></span>
            </span>
            <span className="line"></span>
          </div>
          <div className="torso">
            <span className="neck">
              <span className="left"></span>
              <span className="center"></span>
              <span className="right"></span>
              <span className="bottom"></span>
            </span>
            <span className="belt">
              <span className="center"></span>
            </span>
            <div className="plate">
              <span className="red_top"></span>
              <span className="red_center"></span>
              <span className="red_bottom"></span>
              <span className="blue"></span>
              <span className="gray"></span>
            </div>
          </div>
          <div className="hand left">
            <span className="hand"></span>
          </div>
          <div className="hand right animation-right">
            <span className="hand"></span>
          </div>
          <div className="legs">
            <span className="left"></span>
            <span className="right"></span>
          </div>
          <div className="boots">
            <span className="left"></span>
            <span className="right"></span>
          </div>
          <div className="sword animation-left">
            <span className="handle"></span>
            <span className="light"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
