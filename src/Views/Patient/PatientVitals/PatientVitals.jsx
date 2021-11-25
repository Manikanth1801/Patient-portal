import React, { Component } from 'react'
import {TextField,Typography, Button} from '@material-ui/core'
import Box from '@mui/material/Box';
import axios from 'axios';

class PatientVitals extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            bloodPressure:'',
            respiration:'',
            height:'',
            weight:'',
            temperature:'',
            pulse:'',
            sugarLevel:''
            
        }
    }

    handleChange = (e) => {
        // console.log('eee', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault()
        let vitalData = {
            bloodPressure : this.state.bloodPressure,
            respiration : this.state.respiration,
            height:this.state.height,
            weight:this.state.weight,
            temperature:this.state.temperature,
            pulse:this.state.pulse,
            sugarLevel:this.state.sugarLevel

        }
        let token = localStorage.getItem('accessToken')
        if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
       
        axios.post("http://localhost:8000/patientVitals",vitalData)
            .then(res => {
                console.log('res', res.data)
                if (res.data) {
                    alert("Vitals updated")
                }
            })
            .catch(err => {
                if (err) {
                    alert("something went wrong.Please try after some time")
                    console.log(err);
                }
            })
    }

    render() {
        return (
            <div style ={{paddingLeft:'10%'}}>
            <Box
                     // component="form"
                     sx={{
                         '& .MuiTextField-root': { m: 1, width: '80%' },
     
                     }}
                     noValidate
                     autoComplete="off"
                 >
           <Typography variant="h6">Vitals</Typography>
           <form onSubmit={this.handleSubmit}>
               <TextField style={{width:'25%'}}
                              
                                     variant="outlined"
                                     label="weight in kg"
                                     placeholder="weight in kg"
                                     name = 'weight'
                                     type="number"
                                     value={this.state.weight}
                                     onChange={this.handleChange}
                                     required
                                 />
                                 
                                 <TextField style={{width:'25%'}}
                                     variant="outlined"
                                     label="height in cms"
                                     placeholder="height in cms"
                                     name = 'height'
                                     type="number"
                                     value={this.state.height}
                                     onChange={this.handleChange}
                                     required
                                 />
                                  <TextField style={{width:'25%'}}
                                     variant="outlined"
                                     label="BP in mm/Hg"
                                     placeholder="BP in mm/Hg"
                                     name = "bloodPressure"
                                     type="number"
                                     value={this.state.bloodPressure}
                                     onChange={this.handleChange}
                                     required
                                 />
                                   <TextField style={{width:'25%'}}
                                     variant="outlined"
                                     label="pulse in per min"
                                     placeholder="pulse in per min"
                                     name = "pulse"
                                     type="number"
                                     value={this.state.pulse}
                                     onChange={this.handleChange}
                                     required
                                 />
     
                                    <TextField style={{width:'25%'}}
                                     variant="outlined"
                                     label="Respiration in per min"
                                     placeholder="Respiration in per min"
                                     name = "respiration"
                                     type="number"
                                     value={this.state.respiration}
                                     onChange={this.handleChange}
                                     required
                                 /> 
                                   <TextField style={{width:'25%'}}
                                     variant="outlined"
                                     label="Temperature F"
                                     placeholder="Temperature F"
                                     type="number"
                                     name ="temperature"
                                     value={this.state.temperature}
                                     onChange={this.handleChange}
                                     required
                                 /> 
                                    <TextField style={{width:'25%'}}
                                     variant="outlined"
                                     label="sugar level mmol/L"
                                     placeholder="sugar level mmol/L"
                                     type="number"
                                     name= "sugarLevel"
                                     value={this.state.sugarLevel}
                                     onChange={this.handleChange}
                                     required
                                 /> 
                                  <center>
                             <Button variant="contained" type="submit">Submit</Button>
                         </center>
     
           </form>
           </Box>
           </div>
        )
    }
}

export default PatientVitals