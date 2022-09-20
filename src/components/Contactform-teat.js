import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactFormteat = () => {
  const [data, setData] = useState(false);
//   const handleSubmit = () => {
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };

//   const [data, setData]= useState({
//     firstname:"",
//     lastname:"",
//     mobile:"",
//     email:"",
//     company:"",
//     designation:"",
//     domain:""
//   })

  const handleChange=(e)=>{
    setData({ ...data,[e.target.name]: e.target.value})
    console.log(data)
  }

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
            <div class="card p-3">
                <form>
                <div class="form-group">
                    <input type="text" placeholder="First Name" name="firstname" required class="form-control my-3" onChange={handleChange()} value={data.firstname}/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Last Name" name="lastname" required class="form-control my-3" onChange={handleChange()} value={data.lastname}/>
                </div>
                <div class="form-group">
                    <input type="tel" placeholder="Mobile Number" name="mobile" required class="form-control my-3" onChange={handleChange()} value={data.mobile}/>
                </div>
                <div class="form-group">
                    <input type="email" placeholder="Bussiness Email" name="email" required class="form-control my-3" onChange={handleChange()} value={data.email}/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Company" name="company" required class="form-control my-3" onChange={handleChange()} value={data.company}/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Designation" name="designation" required class="form-control my-3" onChange={handleChange()} value={data.designation}/>
                </div>
                <div class="form-group">
                    <select class="form-select my-3 " name="domain" onChange={handleChange()} value={data.domain}>
                        <option value="" selected disabled>Domain</option>
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
  );
};

export default ContactFormteat;