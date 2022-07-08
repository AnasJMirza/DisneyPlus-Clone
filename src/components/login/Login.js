import React from "react";
import "./Login.css";

import ctaLogoOne from "../../assets/images/cta-logo-one.svg";
import ctaLogoTwo from "../../assets/images/cta-logo-two.png";

const Login = (props) => {
  return (
    <div className="login-section">
      <div className="content">
        <img src={ctaLogoOne} width="50%" className="cta-logoOne"/>
        <div className="login-button">GET ALL THERE</div>
        <img src={ctaLogoTwo} width="50%" className="cta-logoTwo" />
      </div>
    </div>
  );
};

export default Login;
