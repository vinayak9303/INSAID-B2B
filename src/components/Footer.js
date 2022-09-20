import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 bg-dark text-white">
    <div className="container-fluid text-start">
        <div className="row px-5">
            <div className="col-md-4 mt-md-0 mt-3">
                <a className="" href="#"><img src='./../insaid-white-logo.webp'/></a>
                <h6 className=''>International school of Data Science & AI</h6>
            </div>
            <div className='col-md-8'>
                <a href="#" class="btn btn-dark btn-lg border-light text white float-end" data-bs-toggle="modal" data-bs-target="#contactusmodal">Schedule Call</a>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0 white"/>

            {/* <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div> */}
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 INSAID. All Rights Reserved.
    </div>

</footer>
  )
}

export default Footer
