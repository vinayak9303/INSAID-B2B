import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import Swal from 'sweetalert2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const FORM_ENDPOINT = "http://localhost/React-backend/insert.php"; // TODO - fill on the later step

const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);
const [open, setOpen] = React.useState(false);
  const LoaderClose = () => {
    setOpen(false);
  };
  const LoaderOpen = () => {
    setOpen(true);
  };
  

  const handleSubmit=(e)=> {
    // console.log('hii');
    LoaderOpen();
   
    e.preventDefault();
    var data = {
        type:"schedule_call",
        firstname:$('#firstname').val(),
        lastname:$('#lastname').val(),
        mobile: $("#mobile").val(),
        email:$("#email").val(),
        company:$("#company").val(),
        designation:$("#designation").val(),
        domain:$("#domain").val(),
        training_for:$('input[name="training_for"]:checked').val()
    }
    
    console.log(data)
    
    axios.post('https://www.insaid.co/B2B-Backend/data.php',data)
    .then((result)=>{
        LoaderClose();
        console.log(result);
        if(result.data.status == 'success')
        {
        // alert('success');
        Swal.fire({
            title: "Success",
            text: "Your request submitted successfully. Our expert will call you soon.",
            icon: "success",
            confirmButtonText: "OK",
          });
        $("#schedulcall_form")[0].reset();
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
//  const CheckEmail = (e)=>{

//  }
//   const [data, setData]= useState({
//     firstname:"",
//     last_name:"",
//     mobile:"",
//     email:"",
//     comopany:"",
//     designation:"",
//     domain:""
//   })

//   const handleChange=(e)=>{
//     setData({...data,[e.target.name]:e.target.value})
//   }

//   if (submitted) {
//     return (
//       <>
//         <h2>Thank you!</h2>
//         <div>We'll be in touch soon.</div>
//       </>
//     );
//   }



  return (
        
        <div class="my-3 px-3 col-md-4">
            <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            <div class="card p-3">
                <form
                onSubmit={handleSubmit}
                id="schedulcall_form">
                <div class="form-group">
                    <input type="text" placeholder="First Name" name="firstname" id="firstname" required class="form-control my-3" />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Last Name" name="lastname" id="lastname" required class="form-control my-3" />
                </div>
                <div class="form-group">
                    <input type="tel" placeholder="Mobile Number" name="mobile" id="mobile" pattern="[789][0-9]{9}" required class="form-control my-3" />
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Bussiness Email" name="email"  id="email" required class="form-control my-3"  pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Company" name="company" id="company" required class="form-control my-3" />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Designation" name="designation" id="designation" required class="form-control my-3" />
                </div>
                <div class="form-group">
                    <select class="form-select my-3" id="domain" required>
                        <option value=""disabled selected>Domain</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Product Management">Product Management</option>
                    </select>
                </div>
                <div className="form-check text-start px-0">
                        <label for="training_for" className="mb-2">Training for</label><br />
                    <div className="d-flex">
                        <div className="d-block me-5">
                            <input type="radio" id="self" name="training_for" value="self" className="mb-2" required/>
                            <label for="self">&nbsp; Self</label>
                        </div>
                        <div className="d-block">
                            <input type="radio" id="team" name="training_for" value="team" className="mb-2" required/>
                            <label for="team">&nbsp; Team</label>
                        </div>
                    </div>
                </div>
                <div className="form-check text-start mt-3">
                    <input type="checkbox" id="condition1" name="condition1" value="c1" className="form-check-input" required/>
                    <label className="mb-2 form-check-label">I agree to receive phone calls from INSAID counselors for program/course details</label><br />
                </div>
                <div className="form-check text-start">
                    <input type="checkbox" id="condition2" name="condition2" value="c2" className="form-check-input" required/>
                    <label className="mb-2 form-check-label">I agree to receive offers and promotions from INSAID</label><br />
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value='Schedule a Call' />
                </div>
                </form>
            </div>
        </div>
  );
};

export default ContactForm;