import React, { useState } from "react";

const HomeSecondSection = () => {
    const cards = {
        backgroundColor: "#F2F9FF",
      };
  return (
    <div>
        <div class="row mb-5">
            <div className="col-md-12 px-5">    
                <h4 className="text-center px-5 py-4">“Employee learning & development is one of the most impactful ways of building a workforce that can help your business sail through any ocean”</h4>
                <h5 className="text-center px-5"><b>-Manvender Singh, CEO, INSAID</b></h5>
            </div>
            </div>
            
            <div class="row mb-5">
                <div class="col-md-4 pe-5" >
                    <div className="px-3">
                    <div class="card" style={cards}>
                        <div class="card-body">
                            <h3 class="card-title text-muted mb-3"><b>Who we are?</b></h3>
                            <h4 class="card-text px-1">INSIAD Business is one of India’s online learning solution providers. Our goal is to help organizations transform their workforce to achieve excellence</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-4 pe-5">
                    <div className="px-4">
                    <div class="card" style={cards}>
                        <div class="card-body">
                            <h3 class="card-title text-muted mb-3"><b>What do we do?</b></h3>
                            <h4 class="card-text px-1">We focus on delivering cutting edge learning solutions to organizations. These learning solutions increaase employee productivity</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-4 pe-5">
                    <div className="px-4">
                    <div class="card" style={cards}>
                        <div class="card-body">
                            <h3 class="card-title text-muted mb-3"><b>How do we do it?</b></h3>
                            <h4 class="card-text px-1">With the help of our proprietary learning framework. We ensure the learning focusses on concepts, it’s application & tools</h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeSecondSection;