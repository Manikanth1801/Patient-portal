import React from 'react'
import JoinAppointment from '../../JoinAppointment/JoinAppointment'

import {Button,Input,InputGroup} from 'reactstrap'
import MenuDivider from 'antd/lib/menu/MenuDivider'
export default function PhysicianJoinAppointment() {
    return (
        <div>
        <JoinAppointment/>
  <InputGroup size="lg" style={{width:"600px",margin:"auto"}}>
    <Input placeholder="Enter Prescriptions/Comments" />
    <Button color="success" >
      Submit
    </Button>
  </InputGroup>


        </div>
    )
}
