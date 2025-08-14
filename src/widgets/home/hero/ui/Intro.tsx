import { useRef, useState } from "react";
import Button from "../../../../shared/ui/Button";

type VideoProps = Partial<{
  linkToPoster: string;
  linkToVideo: string;
  className: string;
}>;

const Intro: React.FC<VideoProps> = ({
  linkToPoster,
  linkToVideo,
  className,
}: VideoProps) => {
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
    <div className={`intro`}>
      <video
        ref={videoRef}
        src={linkToVideo}
        className={`intro__video ${className}`}
        // width={1280}
        // height={649}
        poster={linkToPoster}
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
};

export default Intro;
