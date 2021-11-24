import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "./Footer.css";
import logo from "../../Assets/Images/logo.png";
import { Icon } from "@mui/material";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

<<<<<<< HEAD
    render() {
        return (
            <footer style={{clear:"both"}}>
                <Card>
                    <CardBody className="text-center">
                        {/* <CardTitle tag="h5">
                            <img src={logo} id="CT-logo"></img>
                        </CardTitle> */}
                        {/* <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle> */}
                        {/* <CardText className="footer-descp">
                        At CitiusTech, we play a deep and meaningful role in powering the future of healthcare worldwide. We accelerate digital innovation in healthcare through specialized solutions, scalable platforms and out-of-the-box accelerators.
                        </CardText> */}
                        <CardText
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-youtube-square"></i>
                        </CardText>
                        <CardText className="mb-2 text-left footer-text3">
                            © 2021 CitiusTech. All rights reserved.
                        </CardText>
                    </CardBody>
                </Card>
            </footer>
        )
    }
=======
  render() {
    return (
      <footer className="sticky-bottom">
        <div className="text-center">
            <p className="text-white"> © 2021 CitiusTech. All rights reserved.</p>
            
                  <a href="#"><FacebookOutlined/></a>
              
                  <a href="#"><Instagram/></a>
              
                  <a href="#"><Twitter/></a>
              
        </div>
        
        {/* <div className="row container offset-md-1 ">
          <div className="col-sm-12 col-md-5 my-3 mx-2">
            <div className="img">
              <img
                alt="Ct-Logo"
                style={{width:'200px'}}
                src="https://www.citiustech.com/hubfs/assets/Logos/CT%20logo_whiteFinal.svg"
                className="img-responsive"
              />
              <div className="text-white my-2">
                <p className= "text-justify" style={{fontSize:'12px'}}>
                  CitiusTech is a specialist provider of healthcare technology
                  and consulting enabled business solutions, with strong
                  presence across the payer, provider, MedTech and life sciences
                  markets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex">
          <div className="col-sm-12 col-md-12 my-3 mx-2 text-sm-center text-md-right">
              <i> <a href="https://www.citiustech.com/aboutus" className=" text-white" target="_blank" style={{textDecoration:'none'}}>About Us</a> </i>
          </div>
          <div className="col-sm-12 col-md-12 my-3 mx-2">
          <div className="row">
          <i> <a href="https://www.citiustech.com/contact-us" className=" text-white" target="_blank" style={{textDecoration:'none'}}>Contact Us</a> </i>
          </div>
          <div className="row">
          <div className="footer-social-link">
          <p>Follow Us</p>
          <ul>
              <li>
                  <a href="#"><FacebookOutlined/></a>
              </li>
              <li>
                  <a href="#"><Instagram/></a>
              </li>
              <li>
                  <a href="#"><Twitter/></a>
              </li>
          </ul>    
          </div>
          </div>
          
          </div>
          </div>
          
        </div> */}
      </footer>
    );
  }
>>>>>>> 731a528a9386fd0b014ebc2d9a5245228d9d03b8
}

export default Footer;

//sushma's footer
// <footer className="bg-primary" style={{clear:"both",}}>
//                 <Card>
//                     <CardBody className="text-center">
//                         <CardTitle tag="h5">
//                             <img src="https://www.citiustech.com/hubfs/assets/Logos/CT%20logo_whiteFinal.svg" id="CT-logo"></img>
//                         </CardTitle>
//                         {/* <CardSubtitle
//                             className="mb-2 text-muted"
//                             tag="h6"
//                         >
//                             Card subtitle
//                         </CardSubtitle> */}
//                         <CardText className="footer-descp">
//                         At CitiusTech, we play a deep and meaningful role in powering the future of healthcare worldwide. We accelerate digital innovation in healthcare through specialized solutions, scalable platforms and out-of-the-box accelerators.
//                         </CardText>
//                         <CardText
//                             className="mb-2 text-muted"
//                             tag="h6"
//                         >
//                             <i className="fab fa-facebook-square"></i>
//                             <i class="fab fa-instagram-square"></i>
//                             <i class="fab fa-youtube-square"></i>
//                         </CardText>
//                         <CardText className="mb-2 text-left footer-text3">
//                             © 2021 CitiusTech. All rights reserved.
//                         </CardText>
//                     </CardBody>
//                 </Card>
//             </footer>
