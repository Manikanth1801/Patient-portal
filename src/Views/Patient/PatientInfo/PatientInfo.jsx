import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Demographics } from "../Demographics";
import { Profile } from "../Profile";
import {BrowserRouter as Router, Link, Switch, Route  } from 'react-router-dom'
import {Component} from 'react'





class TabPanel extends Component{
  constructor(props){
    super(props);  
 }
  

render(){
  return (
    <div
      role="tabpanel"
      hidden={this.props.value !== this.props.index}
      id={`simple-tabpanel-${this.props.index}`}
      aria-labelledby={`simple-tab-${this.props.index}`}
    >
      {this.props.value === this.props.index && (
        <Box sx={{ p: 3 }}>
          <Typography>{this.props.children}</Typography>
        </Box>
      )}
    </div>
  );
}
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};


class PatientInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : 0
    }
  }

   a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  
  handleChange = (event, newValue) => {
    console.log('new',newValue)
    this.setState({
      value : newValue
    });
  };
render(){
  console.log('render',this.state.value)
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          aria-label="basic tabs example"
        >
       <Tab label="Profile" {...this.a11yProps(0)} />
       <Tab label="Demographics" {...this.a11yProps(1)} /> 
        
        </Tabs>
      </Box>
  
      <TabPanel value={this.state.value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={this.state.value} index={1}>
      <Demographics />
      </TabPanel>
      </Box>
  );
}
}
export default PatientInfo