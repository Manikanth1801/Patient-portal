import React, { Component } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
//INSTALL - npm install canvasjs
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import {Row,Col} from 'reactstrap'
import CountUp from 'react-countup';

export default class Cards extends React.Component{


    render(){

        return(
                <div>
                <Row style={{padding:'10px', textAlign:"center",position:"relative"}}>
                    <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h5">
                            Physicians
                            </CardTitle>
                            <CountUp style={{fontSize:"30px", color:"#008688", fontWeight:'bold'}} end ={26} duration={1.5}/>
                        </Card>
                        </Col>
                        <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h5">
                            Specializations
                            </CardTitle>
                            <CountUp style={{fontSize:"30px",color:"#008688", fontWeight:'bold'}} end ={12} duration={1.5}/>
                        </Card>
                        </Col>
                        <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h5">
                            Patients
                            </CardTitle >
                            <CountUp style={{fontSize:"30px",color:"#008688", fontWeight:'bold'}} end ={50} duration={1.5}/>
                        </Card>
                        </Col>
                        <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h5">
                            Appointments
                            </CardTitle>
                            <CountUp style={{fontSize:"30px",color:"#008688", fontWeight:'bold'}} end ={81} duration={1.5}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}