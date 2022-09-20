import React, { useState } from "react";
import bankingfinance from './../images/banking-finance-image.png';
import retail from './../images/retail-image.png';
import telecommunication from './../images/telecommunication-image.png';
import healthcare from './../images/healthcare-image.png';
import automative from './../images/automative-image.png';
import informationtechnology from './../images/information-technology-image.png';
import ecommerce from './../images/e-commerce-image.png';
import saas from './../images/saas-image.png';
import cybersecurity from './../images/cyber-security-image.png';

const HomeFifthSectionMobile = () => {
  return (
    <div>
        <div class="row mb-5 pt-5">
            <div className="col-md-12 px-5">    
                <h3 className="text-muted"><b>Industries we cater to</b></h3>
            </div>
        </div>
        <div class="row">
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={bankingfinance} alt="designthinking" width="80%" height="100%"/>
                            <h3 class="card-text p-4 ">Banking & Finance</h3>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={retail} alt="designthinking" width="80%" height="100%" className="rounded-circle"/>
                            <h3 class="card-text p-4 ">Retail</h3>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={telecommunication} alt="designthinking" width="80%" height="100%"/>
                            <h3 class="card-text p-4 ">Telecommunications</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={healthcare} alt="designthinking" width="80%" height="100%"/>
                            <h3 class="card-text p-4 ">Healthcare</h3>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={automative} alt="designthinking" width="80%" height="100%" className="rounded-circle"/>
                            <h3 class="card-text p-4 ">Automotive</h3>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={informationtechnology} alt="designthinking" width="80%" height="100%"/>
                            <h3 class="card-text p-4 ">Information Technology</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={ecommerce} alt="designthinking" width="80%" height="100%"/>
                            <h3 class="card-text p-4 ">E-Commerce</h3>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={saas} alt="designthinking" width="80%" height="100%" className="rounded-circle"/>
                            <h3 class="card-text p-4 ">SaaS</h3>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div className="px-4">
                            <img src={cybersecurity} alt="designthinking" width="80%" height="100%"/>
                            <h3 class="card-text p-4 ">Cyber Security</h3>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default HomeFifthSectionMobile;