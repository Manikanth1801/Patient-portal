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
                            <CardTitle tag="h4">
                            Appointments
                            </CardTitle>
                            <CountUp style={{fontSize:"35px", color:"#008688", fontWeight:'bold'}} end ={18} duration={1.5}/>
                        </Card>
                        </Col>
                        <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h4">
                            Attended
                            </CardTitle>
                            <CountUp style={{fontSize:"35px",color:"#008688", fontWeight:'bold'}} end ={11} duration={1.5}/>
                        </Card>
                        </Col>
                        <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h4">
                            Pending
                            </CardTitle >
                            <CountUp style={{fontSize:"35px",color:"#008688", fontWeight:'bold'}} end ={5} duration={1.5}/>
                        </Card>
                        </Col>
                        <Col >
                        <Card body style={{padding:'2px', minWidth:"150px"}}>
                            <CardTitle tag="h4">
                            Cancelled
                            </CardTitle>
                            <CountUp style={{fontSize:"35px",color:"#008688", fontWeight:'bold'}} end ={2} duration={1.5}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}