import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.ej_JCRnMMC6R_H4xrC7Q1AHaFj&pid=Api&P=0"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel Grand Lotus Inn</h1>
        <span className="siDistance">13.5 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">1700 ₹</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
      {/* <img
        src="https://tse2.mm.bing.net/th?id=OIP.AstFmF4JWsLpFmc5Ey0QKgHaE8&pid=Api&P=0"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Stay Vista at Mayur Villa</h1>
        <span className="siDistance">11 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">1500 ₹</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div> */}
    </div>
  );
};

export default SearchItem;