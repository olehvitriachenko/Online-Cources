import { useRef, useState } from "react";
import Button from "../../atoms/Button/Button";

function Intro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="intro container">
      <video
        ref={videoRef}
        src="public/videos/sapmle.mp4"
        className="intro__video"
        // width={1280}
        // height={649}
        poster="public/images/hero/poster.jpg"
        onClick={handlePause}
      />
      {!isPlaying && (
        <Button
          onClick={handlePlay}
          className="button button--play intro__button intro__button--play"
          children={
            <>
              <span className="visually-hidden">Play Video</span>
            </>
          }
        />
      )}
      {/* {isPlaying && (
        <Button
          onClick={handlePause}
          className="button button--pause intro__button intro__button--pause"
          children={
            <>
              <span className="visually-hidden">Pause Video</span>
            </>
          }
        />
      )} */}
    </div>
  );
}

export default Intro;
