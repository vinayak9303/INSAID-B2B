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

const HomeFifthSection = () => {
  return (
    <div>
        <div class="row mb-5 pt-5">
            <div className="col-md-12 px-5">    
                <h3 className="text-muted"><b>Industries we cater to</b></h3>
            </div>
        </div>
        <div class="row mb-5">
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={bankingfinance} alt="designthinking" width="60%" height="100%"/>
                            <h5 class="card-text p-4 ">Banking & Finance</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={retail} alt="designthinking" width="60%" height="100%" className="rounded-circle"/>
                            <h5 class="card-text p-4 ">Retail</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={telecommunication} alt="designthinking" width="60%" height="100%"/>
                            <h5 class="card-text p-4 ">Telecommunications</h5>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={healthcare} alt="designthinking" width="60%" height="100%"/>
                            <h5 class="card-text p-4 ">Healthcare</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={automative} alt="designthinking" width="60%" height="100%" className="rounded-circle"/>
                            <h5 class="card-text p-4 ">Automotive</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={informationtechnology} alt="designthinking" width="60%" height="100%"/>
                            <h5 class="card-text p-4 ">Information Technology</h5>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={ecommerce} alt="designthinking" width="60%" height="100%"/>
                            <h5 class="card-text p-4 ">E-Commerce</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={saas} alt="designthinking" width="60%" height="100%" className="rounded-circle"/>
                            <h5 class="card-text p-4 ">SaaS</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={cybersecurity} alt="designthinking" width="60%" height="100%"/>
                            <h5 class="card-text p-4 ">Cyber Security</h5>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default HomeFifthSection;