import React, { Component } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import Cards from './Cards'
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



export default class PatientDashboard extends React.Component {
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
				fontSize: 18,
			},
			axisX: {
				valueFormatString: "####",
				labelFontSize: 18,
			},
			axisY: {
				prefix: "",
				labelFontSize: 18,
				title: "Appointment Count",
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
				type: "stackedColumn",
				name: "Total",
				showInLegend: "true",
				xValueFormatString: "####",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 2015, y: 21 },
					{ x: 2016, y: 20 },
					{ x: 2017, y: 22 },
					{ x: 2018, y: 16 },
					{ x: 2019, y: 16 },
					{ x: 2020, y: 21 },
					{ x: 2021, y: 19 },
				]
			},
				
				
			{
				//stackedColumn
				type: "stackedColumn",
				name: "Attended",
				showInLegend: "true",
				xValueFormatString: "####",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 2015, y: 20 },
					{ x: 2016, y: 15 },
					{ x: 2017, y: 21 },
					{ x: 2018, y: 11 },
					{ x: 2019, y: 10 },
					{ x: 2020, y: 18 },
					{ x: 2021, y: 18 },

				]
			},
			{
				type: "stackedColumn",
				name: "Cancelled",
				showInLegend: "true",
				xValueFormatString: "####",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 2015, y: 1 },
					{ x: 2016, y: 5 },
					{ x: 2017, y: 1 },
					{ x: 2018, y: 5 },
					{ x: 2019, y: 6 },
					{ x: 2020, y: 3 },
					{ x: 2021, y: 1 },
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
		<Cards/>
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
	
	componentDidMount(){


	}


}