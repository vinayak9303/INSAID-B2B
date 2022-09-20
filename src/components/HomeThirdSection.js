import React, { useState } from "react";
import designthinking from './../images/design-thinking-image.png';
import datascience from './../images/data-science-image.png';
import artificialintelligent from './../images/artificial-intelligent-image.png';
import productmanagement from './../images/product-management-image.png';

const HomeThirdSection = () => {
  return (
    <div>
        <div class="row mb-5">
            <div className="col-md-12 px-5">    
                <h3 className="text-muted"><b>Our Expertise</b></h3>
            </div>
        </div>
        <div class="row mb-5">
                <div class="col-md-3">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={datascience} alt="designthinking" width="100%" height="360px" />
                            <h5 class="card-text p-4 ">Data<br />Science</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={artificialintelligent} alt="designthinking" width="100%" height="360px"/>
                            <h5 class="card-text p-4">Artificial<br />Intelligence</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={designthinking} alt="designthinking" width="100%" height="360px"/>
                            <h5 class="card-text p-4">Design<br />Thinking</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={productmanagement} alt="designthinking" width="100%" height="360px"/>
                            <h5 class="card-text p-4 bg-white">Product<br />Management</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
    </div>
    );
};

export default HomeThirdSection;