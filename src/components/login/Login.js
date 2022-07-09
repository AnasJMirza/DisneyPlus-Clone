import React from "react";
import "./Login.css";

import ctaLogoOne from "../../assets/images/cta-logo-one.svg";
import ctaLogoTwo from "../../assets/images/cta-logo-two.png";

const Login = (props) => {

    

  return (
    <div className="login-section">
      <div className="content">
        <img src={ctaLogoOne} width="100%" className="cta-logoOne"/>
        <div className="login-button">GET ALL THERE</div>
        <div className="description">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1</div>
        <img src={ctaLogoTwo} width="100%" className="cta-logoTwo" />
      </div>
    </div>
  );
};

export default Login;
