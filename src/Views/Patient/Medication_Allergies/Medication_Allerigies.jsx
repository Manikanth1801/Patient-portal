import React, { Component } from 'react'
import {TextField,Typography, Button} from '@material-ui/core'
import Box from '@mui/material/Box';
import axios from 'axios';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';


class Medication_Allerigies extends Component {
    constructor(){
    super();
    this.state = {
      currentMedication:'',
      OTC:'',
      healthProducts:'',
      socialDrugs:'',
      pastMedication:'',
      drugs:'',
      allergiesReaction:[],
      names : [
               
        'oods', 
        'animals',
         'pollen', 
         'mold', 
         'medications',
          'latex', 
          'insect stings',
          'cockroaches',  'perfumes/household chemicals'
          
    ],





    }
    }

    handleSubmit = (e) => {
      e.preventDefault()
  let medData = {
    currentMedication : this.state.currentMedication,
    OTC : this.state.OTC,
    healthProducts : this.state.healthProducts,
    socialDrugs : this.state.socialDrugs,
    pastMedication : this.state.pastMedication,
    drugs : this.state.drugs,
    allergiesReaction : this.state.allergiesReaction

  }
   
let token = localStorage.getItem('accessToken')
if(token){
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
  axios.post("http://localhost:8000/medicationAndAllergies",medData)
  .then(res => {
      // console.log('res', res)
      if (res.data) {
          alert("medicationAndAllergies is updated.")
      }
  })

    }

    handleChange = (e) => {
      console.log('e',e)
      this.setState({
          [e.target.name]: e.target.value
      })
  };



    render(){
      const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
    return (
      <div style ={{paddingLeft:'10%'}} >
       <Box
                // component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },

                }}
                noValidate
                autoComplete="off"
            >
      <Typography variant="h6">Medication and Allergies</Typography>
      <form  onSubmit={this.handleSubmit}>
          <TextField style={{width:'50%',backgroundColor:'beige'}}
                         
                                variant="outlined"
                               
                              
                                label="Current Medication"
                                placeholder="Current Medication"
                                name = 'currentMedication'
                                type="text"
                                value={this.state.currentMedication}
                                onChange={this.handleChange}
                                
                            />
                            
                            <TextField style={{width:'50%',backgroundColor:'beige'}}
                                variant="outlined"
                                label="OTC  Medication"
                                placeholder="OTC  Medication"
                                name = 'OTC'
                                type="text"
                                value={this.state.OTC}
                                onChange={this.handleChange}
                               
                               
                            />
                             <TextField style={{width:'50%',backgroundColor:'beige'}}
                                variant="outlined"
                                label="Herbs/Vitamin"
                                placeholder="Herbs/Vitamin"
                                name = "healthProducts"
                                type="text"
                                value={this.state.healthProducts}
                                onChange={this.handleChange}
                               
                            />
                              <TextField style={{width:'50%',backgroundColor:'beige'}}
                                variant="outlined"
                                label="Social Drugs"
                                placeholder="Social Drugs"
                                name = "socialDrugs"
                                type="text"
                                value={this.state.socialDrugs}
                                onChange={this.handleChange}
                               
                            />

                               <TextField style={{width:'50%',backgroundColor:'beige'}}
                                variant="outlined"
                                label="Any past prescribed medication"
                                placeholder="Any past prescribed medication"
                                name = "pastMedication"
                                type="text"
                                value={this.state.pastMedication}
                                onChange={this.handleChange}
                               
                            /> 
                              <TextField style={{width:'50%',backgroundColor:'beige'}}
                                variant="outlined"
                                label="Drug -Allergies"
                                placeholder="Drug -Allergies"
                                type="text"
                                name ="drugs"
                                value={this.state.drugs}
                                onChange={this.handleChange}
                               
                            /> 
                             <div className='pl-2'>
                                <FormControl >
                                
                                <label>Allergies/Reaction-Other</label>
                        <Select 
                            style={{backgroundColor:'beige'}}
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            placeholder = "Allergies/Reaction-Other"
                            multiple
                            value={this.state.allergiesReaction}
                            name ='allergiesReaction'
                            onChange={this.handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {this.state.names.map((name) => (
                               
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={this.state.allergiesReaction.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    </div>

                               {/* <TextField style={{width:'50%'}}
                                variant="outlined"
                                label="Allergies/Reaction-Other"
                                placeholder="Allergies/Reaction-Other"
                                type="text"
                                name= "allergiesReaction"
                                value={this.state.allergiesReaction}
                                onChange={this.handleChange}
                               
                            />  */}
                             <center>
                        <Button variant="contained" type="submit">Submit</Button>
                    </center>

      </form>
      </Box>
      </div>
    );
  }
}

export default Medication_Allerigies




