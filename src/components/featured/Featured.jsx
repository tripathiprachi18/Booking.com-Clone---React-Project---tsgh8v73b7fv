import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.hdcROY8lP2SpbhHoeYIpJAHaEo&pid=Api&P=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lucknow</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.adotrip.com/public/images/city/master_images/5e4138e6eb7e8-Jaipur_Sightseeing.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;