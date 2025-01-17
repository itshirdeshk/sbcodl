import video from "../assets/videos/introVideo.mp4"
const IntroVideo = () => {
  return (
    <div className="relative w-[100vw] h-[50vw] md:h-[55vw] overflow-hidden  md:mt-[0vw] lg:mt-[-5vw]">
      {/* Video container with overlay */}
      <div className="absolute z-4  ">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Text overlay centered */}
      <div className="relative z-6 h-full flex items-center justify-center bg-black/50">
        <div className="text-center text-white font-serif font-bold tracking-tight ">
          <h1 className="text-2xl md:text-6xl font-sans tracking-wider ">
            SOLANKI BROTHER BOARDS
          </h1>
          <p className="text-lg md:text-xl mt-4">
            DISCOVER TALENT
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;