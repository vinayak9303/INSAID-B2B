import React, { useState } from "react";
import bankingfinance from './../images/banking-finance-image.png';
import retail from './../images/retail-image.png';
import telecommunication from './../images/telecommunication-image.png';
import reliancelogo from './../images/Reliance_Industries_Limited_Logo-removebg-preview.png';
import adplogo from './../images/download-removebg-preview.png';
import criflogo from './../images/CRIF-removebg-preview.png';
import eylogo from './../images/EY_logo_2019.svg-removebg-preview (2).png';
import ibmlogo from './../images/ibm-logo.png';
import hcllogo from './../images/hcl-logo.png';
import Carousel from 'react-bootstrap/Carousel';

const HomeEightthSectionMobile = () => {
  return (
    <div className="container-fluid mb-1">
        <div class="row">
            <div className="col-md-12 px-5">    
                <h3 className="text-muted pt-3" >Trusted by</h3>
            </div>
        </div>
        <div className="py-3">
        <Carousel indicators={false} variant="dark">
      <Carousel.Item>
        
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={reliancelogo} alt="reliance logo" width="80%" height="80%"/>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={adplogo} alt="adp logo" width="45%" height="45%"/>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={criflogo} alt="crif logo" width="80%" height="80%"/>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={eylogo} alt="ey logo" width="28%" height="28%"/>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={ibmlogo} alt="ibm logo" width="50%" height="50%"/>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div class="col-md-2">
                    <div className="px-4">
                            <img src={hcllogo} alt="hcl logo" width="50%" height="50%"/>
                    </div>
                </div>
                </Carousel.Item>
           
    </Carousel>
    </div>
    </div>
    );
};

export default HomeEightthSectionMobile;