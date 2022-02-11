import React from "react";
import golden from "../../../../assets/images/golden.jpg";
import digital_rain from "../../../../assets/gif/digital_rain_transparent.gif";

const HeaderImage = ({ src = golden, gifSrc = digital_rain }) => {
  return (
    <div className='header__profile-left'>
      <img
        className='header__profile-gif'
        src={gifSrc}
        alt='digital rain gif'
      />
      <img className='header__profile-img' src={src} alt='profile' />
    </div>
  );
};

export default HeaderImage;
