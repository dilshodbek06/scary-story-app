import ScaryButton from "./buttons/scary-button";

const Main = () => {
  return (
    <div
      style={{ backgroundImage: "url('./images/back.jpg')" }}
      className="h-[32.7rem] bg-no-repeat bg-cover bg-center bg-opacity-30"
    >
      <div className="container px-2 mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-4xl animate-bounce text-center">
          Generate a <span className="text-red-600 ">scary</span> story using AI
        </h1>
        <p className="font-medium max-w-3xl mt-5 text-center text-lg">
          Create chilling tales and viral videos for YouTube, TikTok, and social
          media with AI-generated images, voiceovers, and captions
        </p>
        <div className="mt-7">
          <ScaryButton>Create your scary story</ScaryButton>
        </div>
        <div className="mt-16 max-w-lg w-full flex items-center justify-between">
          <div className="text-center">
            <h1 className="text-red-700 text-7xl font-bold">170</h1>
            <p className="text-2xl font-medium mt-3 text-center">Stories</p>
          </div>
          <div>
            <h1 className="text-red-700 text-7xl font-bold">24</h1>
            <p className="text-2xl font-medium mt-3 text-center">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
