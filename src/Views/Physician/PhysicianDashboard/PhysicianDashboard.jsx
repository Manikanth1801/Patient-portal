import React, { Component } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
//INSTALL - npm install canvasjs
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import {Row,Col} from 'reactstrap'
import CountUp from 'react-countup';
import Cards3 from './Cards'
const dataPoints =[];



export default class PhysicianDashboard extends React.Component {

	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
            exportEnabled: true,
			animationEnabled: true,
			animationDuration:3000,
			colorSet:"colorSet2",
			theme: "light1",
			// height:600,
			// width:1800,
			zoomEnabled: true,
			dataPointMaxWidth: 80,
			title:{
				//text: "Patient Appoinment History",
				fontSize: 15,
			},
			axisX: {
				valueFormatString: "####",
				labelFontSize: 18,
			},
			axisY: {
				prefix: "",
				labelFontSize: 18,
				// title: "Appointment Count",
				titleFontSize:23,
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
				
				{
					type: "column",
					name: "Total",
					showInLegend: "true",
					xValueFormatString: "####",
					yValueFormatString: "#,##0",
					dataPoints: [
						{ x: 2015, y: 210 },
						{ x: 2016, y: 200 },
						{ x: 2017, y: 220 },
						{ x: 2018, y: 160 },
						{ x: 2019, y: 160 },
						{ x: 2020, y: 210 },
						{ x: 2021, y: 190 },
					]
				},
					
					
				{
					//stackedColumn
					type: "column",
					name: "Attended",
					showInLegend: "true",
					xValueFormatString: "####",
					yValueFormatString: "#,##0",
					dataPoints: [
						{ x: 2015, y: 200 },
						{ x: 2016, y: 150 },
						{ x: 2017, y: 210 },
						{ x: 2018, y: 110 },
						{ x: 2019, y: 100 },
						{ x: 2020, y: 180 },
						{ x: 2021, y: 180 },
						// { x: new Date(2018, 8), y: 15 },
						// { x: new Date(2018, 9), y: 22 },
						// { x: new Date(2018, 10), y: 20 },
						// { x: new Date(2018, 11), y: 19 },
						// { x: new Date(2018, 12), y: 18 },
					]
				},
				{
					type: "column",
					name: "Cancelled",
					showInLegend: "true",
					xValueFormatString: "####",
					yValueFormatString: "#,##0",
					dataPoints: [
						{ x: 2015, y: 10 },
						{ x: 2016, y: 50 },
						{ x: 2017, y: 10 },
						{ x: 2018, y: 50 },
						{ x: 2019, y: 60 },
						{ x: 2020, y: 30 },
						{ x: 2021, y: 10 },
						// { x: new Date(2015), y: 0 },
						// { x: new Date(2015), y: 2 },
						// { x: new Date(2015), y: 3 },
						// { x: new Date(2015), y: 2 },
						// { x: new Date(2015), y: 4 },
					]
				}
			
			]
		}
		return (
			<div>
		<div >
			
			<Card
			 style={{
				 backgroundColor: '#eef1f1',
				 borderColor: '#333',
				
				// margin:"auto",
			   }}>
		<Cards3/>
			<Card
			
			style={{
			backgroundColor: '#04c0c1',
			borderColor: '#333',
			textAlign: 'center' ,
			padding:"5px",     
			
			}}
			>
			<CardTitle tag="h2" style={{ textAlign: 'center',color:"white"  }}>
			My Appointment History
			</CardTitle>
			</Card>
			<Card style={{backgroundColor: '#eef1f1',borderColor: '#333',
			
			}}>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			</Card>
			</Card>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		</div>
		);
	}
	


}