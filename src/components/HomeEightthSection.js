import React, { useState } from "react";
import bankingfinance from './../images/banking-finance-image.png';
import retail from './../images/retail-image.png';
import telecommunication from './../images/telecommunication-image.png';
import reliancelogo from './../images/reliance-logo.png';
import adplogo from './../images/adp-logo.png';
import criflogo from './../images/crif-logo.png';
import eylogo from './../images/ey-logo.png';
import ibmlogo from './../images/ibm-logo.png';
import hcllogo from './../images/hcl-logo.png';

const HomeEightthSection = () => {
  return (
    <div className="container-fluid">
        <div class="row mb-5 pt-3">
            <div className="col-md-12 px-5">    
                <h3 className="text-muted">Trusted by</h3>
            </div>
        </div>
        <div class="row pb-4">
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={reliancelogo} alt="reliance logo" width="80%" height="70px"/>
                    </div>
                </div>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={adplogo} alt="adp logo" width="80%" height="80px"/>
                    </div>
                </div>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={criflogo} alt="crif logo" width="80%" height="80px"/>
                    </div>
                </div>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={eylogo} alt="ey logo" width="80%" height="60px"/>
                    </div>
                </div>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={ibmlogo} alt="ibm logo" width="80%" height="60px"/>
                    </div>
                </div>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={hcllogo} alt="hcl logo" width="80%" height="80px"/>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default HomeEightthSection;