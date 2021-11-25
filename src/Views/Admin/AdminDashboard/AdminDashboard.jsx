import React, { Component } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import Cards1 from './Cards'
import {dataPoints} from './DashboardData.js'
//INSTALL - npm install canvasjs
// const dataPoints =[];

// const dataPoints =[{ x: 2015, y: 156 },
// 	{ x: 2016, y: 150 },
// 	{ x: 2017, y: 190 },
// 	{ x: 2018, y: 110 },
// 	{ x: 2019, y: 119 },
// 	{ x: 2020, y: 154 },
// 	{ x: 2021, y: 132 }]



export default class AdminDashboard extends React.Component {
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
			// width:1000,
			// height:450,
			zoomEnabled: true,
			dataPointMaxWidth: 80,
			title: {

			},
			axisY: {
				// prefix: "",
				labelFontSize: 18,
				labelTextAlign: "right",
				title: "Patient Count",
			},
			axisX: {
				labelFontSize: 18,
				showInLegend: "true",
				valueFormatString: "####",
				title: "Year",
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
				color:"#21de82",
				name: "Bar View",
				showInLegend: "true",
				xValueFormatString: "####",
				// yValueFormatString: "####",
				dataPoints: dataPoints,
				xValueSize:30,
			},
			{
			type: "line",
			color:"#f54248",
			name: "Line View",
			showInLegend: "true",
			xValueFormatString: "####",
			// yValueFormatString: "####",
			dataPoints: dataPoints,
			xValueSize:30,
		  }
		]
		}
		return (
		<div>


	<Card

style={{
	backgroundColor: '#eef1f1',
	borderColor: '#333',
}}>

<Cards1/>

		<Card
		style={{
		backgroundColor: '#04c0c1',
		borderColor: '#333',
		textAlign: 'center',
		padding:"5px",       
		}}
		>
		<CardTitle tag="h3" style={{ textAlign: 'center',color:"white"}}>
		Patient Appoinment History
		</CardTitle>
		</Card>
		<Card style={{backgroundColor: '#eef1f1',borderColor: '#333'}}>
			<div>
		<CanvasJSChart options = {options}
			onRef={ref => this.chart = ref}
		/>
		</div>
		</Card>
		</Card>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	


}
