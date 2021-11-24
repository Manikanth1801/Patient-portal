import React, { useState } from "react";
import "./Prescription.css";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function Prescription(props) {

    const patientPres = { patientName: "", patientEmailId: "", phoneNo: "", patientHistory: "", physicianName:"", registered:"",pratientAge:"", problemDuration:""}
    
    const [prescription, setPrescription] = useState(patientPres)
    const submit = (e) => {
        e.preventDefault()
        // props.handleSubmit(prescription)
        console.log(prescription)
    }
    const handleChange = (e) => {
        setPrescription({
            ...prescription, 
            [e.target.name]:e.target.value
        })
    }


  return (
    <div className="container">
      <div class="container">  
		<form class="contact" action="" onSubmit={submit}>
			<h3>Prescription</h3>
			
			<div class="col50 colleft">
				<div class="col50 colleft">
					<div class="wd50">
						<label name="">Patient name</label>
						<input name ="patientName" placeholder="Patient name" type="text" required autofocus />
					</div>
					<div class="wd50">
						<label name="">Patient Email ID</label>
						<input placeholder="Patient Email ID" type="text" required/>
					</div>
				</div>
				<div class="col50 colright">
					<div class="wd50">
						<label name="">Phone number</label>
						<input placeholder="Phone number" type="tel" required/>
					</div>
					<div class="wd50">
						<label name="">Patient History</label>
						<input placeholder="Patient History" type="url" required/>
					</div>
				</div>
			</div>
			
			<div class="col50 colright">
				<div class="col50 colleft">
					<div class="wd50">
						<label name="">Physician Name</label>
						<input placeholder="Physician Name" type="text" required/>
					</div>
					<div class="wd50">
						<label name="">Registered</label>
						<select>
							<option value=" ">Male</option>
							<option value=" ">Female</option>
							
						</select> 
					</div>
				</div>
				<div class="col50 colright">
					<div class="wd50">
						<label name="">Patient Age</label>
						<input placeholder="Patient Age" type="text" required/>
					</div>
					<div class="wd50">
						<label name="">Problem Duration</label>
						<input placeholder="Duration" type="text" required/>
					</div>
				</div>
			</div>
           
			
			
			<div class="wd100"><hr/></div>
			
			<div class="col50 colleft">
				<div class="wd100">
					<label name="">Symptoms</label>
					<textarea placeholder="Insert text here ..." required></textarea>
				</div>
			</div>

			<div class="col50 colright">
				<div class="wd100">
					<label name="">Medication</label>
					<textarea placeholder="Insert text here ..." required></textarea>
				</div>
			</div>

			<div class="wd100">
				<label name="">Notes</label>
				<textarea placeholder="Insert text here ..." required></textarea>
			</div>
			
			<div class="wd100">
				<button name="submit" type="submit" id="" data-submit="...Sending"  onClick={handleChange}>Submit</button>
			</div>
		</form>
	</div>



    </div>
  );
}
