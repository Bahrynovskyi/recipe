import loadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
