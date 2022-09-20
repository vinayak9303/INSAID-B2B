import React, { useState } from "react";
import contactbackground from '../images/contact-bg-mob.png';
import ContactForm from '../components/Contactform';
const HomeLastSectionMobile = () => {
    return (
 <div className='row container-fluid mx-0 py-5' style={{backgroundImage: `url(${contactbackground})`}}>
<div class="col-md-8 my-auto">
  <div class="">
    <h1 class="text-white" style={{lineHeight:`4rem`}}>Let’s Transform Your Workforce Together</h1>
    
  </div>
</div>
<ContactForm />
</div>
    );
};

export default HomeLastSectionMobile;