import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GooglePayButton from "@google-pay/button-react";
// import ReactScrollbar from 'react-scrollbar-js';
import {Form,FormGroup,Label,Button,Input,FormText} from 'reactstrap';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import {Row,Col} from 'reactstrap'
import {DropDownList} from '@progress/kendo-react-dropdowns'
import {List} from 'reactstrap'
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import PatientBillingHistory from './PatientBillingHistory';

export default function Paybill (){

  const options = [
    "Appointments",
    "CT Scan",
    "MRI Scan",
    "Vital Check",
    "Vaccination",
    "X-Ray",
    "Others",
  ];

  const [type,setType] =useState();
  const [amount,setAmount] = useState(100);

const paymentRequest= {    
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [
  {
  type: "CARD",
  parameters: {
  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
  },
  tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: 'example',
        gatewayMerchantId: 'exampleGatewayMerchantId',
      },
    },
  }
  ],
  merchantInfo: {
  merchantId:"siddhumithra@okhdfcbank",
  merchantName: "CT APPointment"
  
  },
  transactionInfo: {
  totalPriceStatus: "FINAL",
  totalPriceLabel: "Total",
  checkoutOption: "COMPLETE_IMMEDIATE_PURCHASE",
  totalPrice: amount.toString(),
  currencyCode: "INR",
  countryCode: "IN"
  },
  shippingAddressRequired:false,
  callbackIntents:['PAYMENT_AUTHORIZATION']
  }


    const  confirmPayment=()=>{
      // alert("Payment is successfull")

    document.getElementById('success').innerHTML=`Payment of <b>&#8377</b>${amount} is Successful for ${type}!`
    
    }
    // const reset =()=>{
    //   document.getElementById("success").style.visibility = "hidden";

    // }
    return(
              <div >
       <Card
       body
       inverse
       style={{
           backgroundColor: '#eef1f1',
           borderColor: '#333',
          height:"100%"
         }}
       >
         
      <Card
      body
      inverse
      style={{
          backgroundColor: '#04c0c1',
          borderColor: 'black',
          textAlign: 'center'  
          ,padding:"5px"      
        }}
    >
      <CardTitle tag="h2" style={{ textAlign: 'center'}}>
      Manage Your Billing
      </CardTitle>
    </Card>
    <Card style={{ marginTop:"10px",}}>
    <Card
     body

     style={{
        backgroundColor: '#eef1f1',
      borderColor: 'black',
      }}
       >   

               
 <Card style={{
      backgroundColor: '#eef1f1',
      borderColor: 'black',

     color:"black",
      }}>

    <Card
    body
    inverse
    style={{
        backgroundColor: '#0a5669',
        textAlign: 'center',
        borderColor: 'black',
    
        padding:"5px"    
      }}
  >
    <CardTitle tag="h4" style={{ textAlign: 'center'}}>
    Pay Here
    </CardTitle>
    </Card  >

    <Card style={{margin:"auto", borderColor: 'black',
    }}>
    <div >
    <FormGroup style={{marginTop:"10px", textAlign:"center"}} >
      <div>
    <Label style={{fontSize:"20px"}}>Bill Type :</Label>
    </div>
    <DropDownList style={{fontSize:"18px",width:"100%"}} 
    data={options} defaultValue="Others" 
    value={type}
    onChange={e=> setType(e.target.value)}
    />

    
    <FormGroup style={{marginTop:"10px", textAlign:"center"}} >
        <div>
    <Label style={{fontSize:"20px",marginTop:"10px"}}>Bill Amount (in <b>&#8377;</b>):</Label>
    </div>
    <Input
    id="walletAmount"
    name="amount"
    value={amount}
    placeholder="Enter your Amount"
    type="number"
    min="1"
    onChange={
        e => setAmount(e.target.value)
    }
    style={{fontSize:"18px", margin:"auto"}}

    />
    </FormGroup>
    </FormGroup>
 
    <FormGroup style={{color:"black", textAlign: 'center',}}>
    <h6 >Please Click below button to pay</h6>

    <Col
    sm={{
    offset: 0
    }}
    >
        <GooglePayButton
        environment="TEST"
        buttonSizeMode="fill"
        paymentRequest ={paymentRequest}
        buttonType="pay"
        // style={{width: "10%", height: 40}}

        onLoadPaymentData={paymentData =>{

        }}
        onPaymentAuthorized={
            
        paymentData => {
            console.log("Transaction Successful")
            console.log(`Rupees ${amount} is added to wallet `)

            console.log(paymentData.paymentMethodData)
            console.log(paymentData)
            confirmPayment()
            

        }
        }
        
    />
    </Col>
    </FormGroup>
   
    </div>
    </Card>
    <div id ="success" style={{color: "green",fontsize:"20px", textAlign:"center",margin:"5px"}}></div>
          </Card>

          <Card
        body
        
        style={{
        backgroundColor: '#ffffff',
        borderColor: '#333',
        margin:"5px",
        padding:"5px",
        }}
        >
        <CardTitle tag="h3" style={{ textAlign: 'center'}}>
        Note
        </CardTitle>
        <List type="bullet" style={{ textAlign: 'left',fontSize:"18px" ,color:"black"}}>
        <li>
        1. Consultation fee is <b>&#8377;500</b>.
        </li>
        <li>
        2. Amount once Paid will not be refunded.
        </li>
        <li>
        3. For payment related queries kindly connect with <b>admin@ctustech.com</b>
        </li>
        </List>
        </Card>
 

     </Card>
  
       
       </Card>

  
     </Card>
     {/* <PatientBillingHistory/> */}
     
        </div>
    
    )
  
  }

