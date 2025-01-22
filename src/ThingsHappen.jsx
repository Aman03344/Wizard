import React from "react";
import hero  from './assets/emoji.svg'

const ThingsHappen = () => {
  return (
    <div className="thingsCard-con">
      <div className="thingCard">

        <div className="thingCardLeft">
          <h1>Let's make things happen</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            doloremque porro magni aperiam laboriosam adipisci ratione atque
            libero nihil. Sit.
          </p>
          <button>Get a consultation </button>
        </div>

        <div className="thingCardRight">
            <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThingsHappen;
