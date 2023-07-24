import Download from "./video/Download.mp4";
import { useRef, forwardRef, useImperativeHandle } from "react";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return <video ref={videoRef} width={250} src={Download} />;
}
export default forwardRef(Video);
