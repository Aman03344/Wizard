import React from "react";
import Cardimage from './assets/card1image.png'
import Cardimage2 from './assets/cardimage2.png'
import Cardimage3 from './assets/cardimage3.png'
import Cardimage4 from './assets/cardimage4.png'
import CircleArrow from './assets/circleArrow.svg'



const WhiteCard = () => {
  return (
    <div className="cardCon">
      <div className="whiteCard">
        <div className="Cardleft1">
          <h1>Search</h1>
          <h1>optimization</h1>

          <div className="learnSvg">
              <h2><i class="ri-arrow-right-up-line"></i> Learn more</h2>
            </div>
        </div>

        <div className="Cardright1">
            <img src={Cardimage} alt="" />
          
        </div>

      </div>
      <div className="whiteCard">
        <div className="Cardleft2">
          <h1>Pay-click</h1>
          <h1>advertising</h1>

          <div className="learnSvg">
              <h2><i class="ri-arrow-right-up-line"></i> Learn more</h2>
            </div>
        </div>

        <div className="Cardright2">
          <img src={Cardimage2} alt="" />
        </div>
      </div>
      <div className="whiteCard">
        <div className="Cardleft3">
          <h1>Social Media</h1>
          <h1>Marketing</h1>

          <div className="learnSvg">
              <h2><i class="ri-arrow-right-up-line"></i> Learn more</h2>
            </div>
        </div>

        <div className="Cardright3">
            <img src={Cardimage3} alt="" />     
        </div>
      </div>
      <div className="whiteCard">
        <div className="Cardleft4">
          <h1>Email</h1>
          <h1>Marketing</h1>

          <div className="learnSvg">
                   <h2><i class="ri-arrow-right-up-line"></i> Learn more</h2>
            </div>
        </div>

        <div className="Cardright4">
            <img src={Cardimage4} alt="" />     
        </div>
      </div>
    </div>
  );
};

export default WhiteCard;
