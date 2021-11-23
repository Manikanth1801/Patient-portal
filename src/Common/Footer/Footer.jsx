import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './Footer.css';
import logo from '../../Assets/Images/logo.png';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

    render() {
        return (
            <footer>
                <Card>
                    <CardBody className="text-center">
                        <CardTitle tag="h5">
                            <img src={logo} id="CT-logo"></img>
                        </CardTitle>
                        {/* <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle> */}
                        <CardText className="footer-descp">
                        At CitiusTech, we play a deep and meaningful role in powering the future of healthcare worldwide. We accelerate digital innovation in healthcare through specialized solutions, scalable platforms and out-of-the-box accelerators.
                        </CardText>
                        <CardText
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <i className="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram-square"></i>
                            <i class="fab fa-youtube-square"></i>
                        </CardText>
                        <CardText className="mb-2 text-left footer-text3">
                            © 2021 CitiusTech. All rights reserved.
                        </CardText>
                    </CardBody>
                </Card>
            </footer>
        )
    }
}

export default Footer;
