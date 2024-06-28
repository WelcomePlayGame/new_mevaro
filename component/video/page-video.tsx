const VideoHead = () => {
  return (
    <main>
      <video width={'100%'} controls autoPlay muted>
        <source src="/video/mevaro.mp4" type="video/mp4" />
      </video>
    </main>
  );
};
export default VideoHead;
