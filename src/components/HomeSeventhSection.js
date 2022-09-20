import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2';
import lms from './../images/lms.png';
import programcustomization from './../images/program-customization.png';
import applicationoriented from './../images/application-oriented.png';
import mentorship from './../images/1-1-mentorship.png';
import domainspecific from './../images/domain-specific.png';
import projectmanagers from './../images/project-managers.png';
import widevariety from './../images/wide-variety.png';
import liveinstructorled from './../images/live-instructor-led.png';
import mentors from './../images/mentors.png';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const FORM_ENDPOINT = "http://localhost/React-backend/insert.php"; // TODO - fill on the later step

const HomeSeventhSection = () => {
    //   const [submitted, setSubmitted] = useState(false);
    const [open, setOpen] = React.useState(false);
        const LoaderClose = () => {
            setOpen(false);
        };
        const LoaderOpen = () => {
            setOpen(true);
        };
      const handleSubmitcontactus=(e)=> {
        // console.log('hii');
        e.preventDefault();
        
        var data = {
            type:"contact_with_us",
            firstname:$('#cfirstname').val(),
            lastname:$("#clastname").val(),
            mobile: $("#cmobile").val(),
            email:$("#cemail").val(),
            company:$("#ccompany").val(),
            designation:$("#cdesignation").val(),
            domain:$("#cdomain").val()
        }
        $('#contactusmodal .btn-close').click();
        LoaderOpen();
        console.log(data)
        axios.post('https://www.insaid.co/B2B-Backend/data.php',data)
        .then((result)=>{
            console.log(result);
            LoaderClose();
            if(result.data.status == 'success')
            {
            // alert('success');
            
            Swal.fire({
                title: "Success",
                text: "Your request submitted successfully. Our expert will call you soon.",
                icon: "success",
                confirmButtonText: "OK",
              });
              $("#contactusform")[0].reset();
            }
            else
            Swal.fire({
                title: "Warning",
                text: "Something went wrong. Please try again!",
                icon: "success",
                confirmButtonText: "OK",
              });
        })
    
      };
    
   
    return (
        <div className="mb-5">
            <div class="row mb-5 pt-5">
                <div className="col-md-12 px-5">    
                    <h3 className="text-muted"><b>Our USPs</b></h3>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={lms} alt="lms image" width="30%"/>
                            <h5 class="card-text p-4 ">State-of-the-art LMS</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={programcustomization} alt="program customization image" width="30%"/>
                            <h5 class="card-text p-4 ">Program Customization</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={applicationoriented} alt="application orienterd image" width="30%"/>
                            <h5 class="card-text p-4 ">Application-Oriented</h5>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={mentorship} alt="1-1 mentorship image" width="30%" />
                            <h5 class="card-text p-4 ">1:1 Mentorship from C-Suite</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={domainspecific} alt="domain specific image" width="30%"/>
                            <h5 class="card-text p-4 ">Domain-Specific Projects</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={projectmanagers} alt="project managers image" width="30%"/>
                            <h5 class="card-text p-4 ">Dedicated Project Managers</h5>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={widevariety} alt="wide variety image" width="30%"/>
                            <h5 class="card-text p-4 ">Wide-Variety of Programs</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={liveinstructorled} alt="live instructor led image" width="30%"/>
                            <h5 class="card-text p-4 ">100% Live Instructor-Led</h5>
                    </div>
                </div>
                <div class="col-md-4">
                    <div className="px-4">
                            <img src={mentors} alt="mentors image" width="30%"/>
                            <h5 class="card-text p-4 ">Industry Leaders as Mentors</h5>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#contactusmodal">Connect with us</button>
        
            <div class="modal fade" id="contactusmodal" tabindex="-1" aria-labelledby="contactusmodalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                     {/* <div class="modal-header"> */}
                        {/* <h5 class="modal-title" id="contactusmodaltitle">Contact Us</h5> */}
                        
                    {/* </div>  */}
                    <div class="modal-body">
                    <button type="button" class="btn-close float-end mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        <form
                        onSubmit={handleSubmitcontactus}
                        id="contactusform">
                        <div class="form-group">
                            <input type="text" placeholder="First Name" name="cfirstname" id="cfirstname" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Last Name" name="clastname" id="clastname" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="Mobile Number" name="cmobile" id="cmobile" pattern="[789][0-9]{9}" required class="form-control my-3"  />
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Bussiness Email" name="cemail"  id="cemail" pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Company" name="ccompany" id="ccompany" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Designation" name="cdesignation" id="cdesignation" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <select class="form-select my-3" id="cdomain">
                                <option value=""disabled selected>Domain</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Product Management">Product Management</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary" value='Schedule a Call' />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
      );
    };
    
    export default HomeSeventhSection;