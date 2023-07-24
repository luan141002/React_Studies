import { useImperativeHandle, useRef, useEffect } from "react";
import Video from "./video";

function UseImperativeHandle() {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>PLAY</button>
      <button onClick={handlePause}>PAUSE</button>
    </div>
  );
}
export default UseImperativeHandle;
