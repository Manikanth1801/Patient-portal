import React, { Component } from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { TextField, Typography } from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import axios  from 'axios';






class Immunization extends Component {
    constructor(props) {
        super(props)

        this.state = {
            COVID_Vaccine: 'No',
            personName: [],
            names : [
               
                'Hepatitis A/B', 
                'Influenza', 
                'HIB', 
                'IPV', 
                'MMR', 
                'Rotavirus', 
                'DTap'
            ],
            VaccineDate:'',
            dose:'',
            otherVaccnes:''
    
        }

       

       
    }


    handleChange = (e) => {
       console.log(' e.target.value', e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        })
    
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
       let immunData = {
        VaccineDate: this.state.VaccineDate,
        dose: this.state.dose,
        COVID_Vaccine:this.state.COVID_Vaccine,
        otherVaccnes:this.state.personName

       }
       console.log('otherVaccnes',immunData.otherVaccnes)
   
    let token = localStorage.getItem('accessToken')
    if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    axios.post("http://localhost:8000/patientImmunization",immunData)
        .then(res => {
            console.log('res', res.data)
            if (res.data) {
                alert("immunData updated")
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
        let { COVID_Vaccine } = this.state;
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        console.log('COVID_Vaccine', COVID_Vaccine);
        let MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250,
                },
            },
        };
        return (
            <div  style ={{paddingLeft:'10%'}} className = ''>
                <form onSubmit={this.handleSubmit}>
                <Typography variant="h6">Patient Immunization</Typography>
                <div className='pl-5 mb-5 border ' style = {{display : 'inline-block',paddingTop:'10px',paddingRight:'40px'}}>
             
               
                <div>
                 <label>COVID19 Vaccine</label>
                 </div>
                  
                    <FormControl component="fieldset">
                  
                        {/* <FormLabel component="legend">COVID19 Vaccine</FormLabel> */}
                        <RadioGroup style ={{margin:'10px'}}
                            aria-label="COVID_Vaccine"
                            name="COVID_Vaccine"
                            value={this.state.COVID_Vaccine}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />

                        </RadioGroup>
                        
                    </FormControl>
                    {COVID_Vaccine === 'Yes' &&
                            <div className = 'm-5'>

                                <TextField style= {{backgroundColor:'beige'}}
                                    variant="outlined"
                                    label="Number of Doses"
                                    placeholder="Number of Doses"
                                    name="dose"
                                    type="number"
                                     value={this.state.dose}
                                    onChange={this.handleChange}

                                />
                                <div>
                                <h5 style = {{marginTop:'10px'}}>Vaccinated Date</h5>
                                <input style={{width:'100%'}} type='date'name="VaccineDate" value={this.state.VaccineDate} onChange={this.handleChange} className="form-control" />
                                </div>
                            </div>



                        }


                </div>
                <div>

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Other</InputLabel>
                        <Select style= {{backgroundColor:'beige'}}
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={this.state.personName}
                            name ='personName'
                            onChange={this.handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {this.state.names.map((name) => (
                               
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={this.state.personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    
                 
                </div>
                <center>
                        <Button variant="contained" type="submit">Submit</Button>
                    </center>
                </form>
            </div>
        )
    }
}

export default Immunization