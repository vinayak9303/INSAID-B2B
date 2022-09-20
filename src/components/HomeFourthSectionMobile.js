import React, { useState } from "react";
import endtoend from './../images/end-to-end-image.png';
import industryspecific from './../images/industry-specific-image.png';
import topicspecific from './../images/topic-specific-image.png';
import levelspecific from './../images/level-specific-image.png';

const HomeFourthSectionMobile = () => {
  return (
    <div>
        <div class="row mb-5">
            <div className="col-md-12 px-5">    
                <h2 className="text-muted"><b>Solutions Offered</b></h2>
            </div>
        </div>
        <div class="row mb-5 px-3">
                <div class="col-md-3 mb-4">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={endtoend} alt="designthinking" width="100%" height="360px" />
                            <h5 class="card-text p-4 ">End-to-End<br />Learning Solutions</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={industryspecific} alt="designthinking" width="100%" height="360px"/>
                            <h5 class="card-text p-4">Industry-Specific<br />Learning Solutions</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={topicspecific} alt="designthinking" width="100%" height="360px"/>
                            <h5 class="card-text p-4">Topic-Specific<br />Learning Solutions</h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div className="px-4">
                    <div class="card">
                        <div class="card-body p-0">
                            <img src={levelspecific} alt="designthinking" width="100%" height="360px"/>
                            <h5 class="card-text p-4 bg-white">Level-Specific<br />Learning Solutions</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#contactusmodal">Customise Programs</button>
            </div>
    </div>
    );
};

export default HomeFourthSectionMobile;