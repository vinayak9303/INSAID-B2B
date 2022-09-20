import React, { useState } from "react";
import manavimg from './../images/manav.png';
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const HomeHeaderSection = () => {
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
            type:"talk_to_us",
            firstname:$('#tfirstname').val(),
            lastname:$("#tlastname").val(),
            mobile: $("#tmobile").val(),
            email:$("#temail").val(),
            company:$("#tcompany").val(),
            designation:$("#tdesignation").val(),
            domain:$("#tdomain").val()
        }
        $('#talktousmodal .btn-close').click();
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
              $("#talktousform")[0].reset();
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
    <div>
        <div class="row">
            <div class="my-3 px-3 col-md-7 my-auto">
                <div className="mx-5 px-5">
                    <h2 className="px-3">Transforming your Workforce to Achieve Excellence</h2>
                    <a className="btn btn-primary btn-lg px-5 my-3" data-bs-toggle="modal" data-bs-target="#talktousmodal">Talk to us</a>
                </div>
            </div>
            <div class="px-5 col-md-5">
                <img src={manavimg} alt="CEO image" width="80%"/>
            </div>
        </div> 
        <div class="modal fade" id="talktousmodal" tabindex="-1" aria-labelledby="talktousmodalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body">
                    <button type="button" class="btn-close float-end mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        <form
                        onSubmit={handleSubmitcontactus}
                        id="talktousform">
                        <div class="form-group">
                            <input type="text" placeholder="First Name" name="tfirstname" id="tfirstname" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Last Name" name="tlastname" id="tlastname" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="Mobile Number" name="tmobile" id="tmobile" pattern="[789][0-9]{9}" required class="form-control my-3"  />
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Bussiness Email" name="temail"  id="temail" pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Company" name="tcompany" id="tcompany" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Designation" name="tdesignation" id="tdesignation" required class="form-control my-3" />
                        </div>
                        <div class="form-group">
                            <select class="form-select my-3" id="tdomain">
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

export default HomeHeaderSection;