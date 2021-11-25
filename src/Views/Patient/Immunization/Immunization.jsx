import React, { PureComponent } from 'react'
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







class Immunization extends PureComponent {
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
            dob:'',
            Dose:''
    
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
        dob: this.state.dob,
        Dose: this.state.Dose,
        COVID_Vaccine:this.state.COVID_Vaccine,
        personName:this.state.personName

       }
    //    console.log('immundata',immunData)
   
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
            <div  style ={{paddingLeft:'10%'}}>
                <form onSubmit={this.handleSubmit}>
                <div className='pl-5 mb-5'>
                <Typography variant="h6">Patient Immunization</Typography>
               
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

                                <TextField  
                                    variant="outlined"
                                    label="Number of Doses"
                                    placeholder="Number of Doses"
                                    name="Dose"
                                    type="number"
                                     value={this.state.Dose}
                                    onChange={this.handleChange}

                                />
                                <div>
                                <h5>Vaccinated Date</h5>
                                <input style={{width:'25%'}} type='date'name="dob" value={this.state.dob} onChange={this.handleChange} className="form-control" />
                                </div>
                            </div>



                        }


                </div>
                <div>

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Other</InputLabel>
                        <Select
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