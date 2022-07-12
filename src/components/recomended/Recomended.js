import React from "react";
import './Recomended.css'

const Recomended = (props) => {
  return (
    <div>
        <h3 style={{paddingLeft: "2.5vw"}}>Recomended for you</h3>
      <div className="allMovies-body">
        <div className="allMovies-card-wrapper">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt='img'  className="allMovies-card-image"/>
        </div>
        <div className="allMovies-card-wrapper">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=''  className="allMovies-card-image"/>
        </div>
        <div className="allMovies-card-wrapper">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=''  className="allMovies-card-image"/>
        </div>
        <div className="allMovies-card-wrapper">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=''  className="allMovies-card-image"/>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
