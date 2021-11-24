import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GooglePayButton from "@google-pay/button-react";
// import ReactScrollbar from 'react-scrollbar-js';
import {Form,FormGroup,Label,Button,Input,FormText} from 'reactstrap';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import {Row,Col} from 'reactstrap'
import {DropDownList} from '@progress/kendo-react-dropdowns'
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
// import PatientBillingHistory from './PatientBillingHistory';

export default function Paybill (){

  const options = [
    "CT Scan",
    "MRI Scan",
    "Vital Check",
    "Vaccination",
    "X-Ray",
    "Others",
  ];

  const [type,setType] =useState();
  const [amount,setAmount] = useState(1);

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
    const reset =()=>{
      document.getElementById("success").style.visibility = "hidden";

    }
    return(
              <div style={{width:"auto"}}>
       <Card
       body
       inverse
       style={{
           backgroundColor: '#eef1f1',
           borderColor: '#333',
          // width:"auto",
        //   margin:"auto",
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
      Manage your Billing Details
      </CardTitle>
    </Card>
    <Card style={{margin:"auto", marginTop:"5px"}}>
    <Card
     body

     style={{
        backgroundColor: '#eef1f1',
      borderColor: 'black',
      }}
       >   

               
 <Card style={{
      backgroundColor: '#ffffff',
      borderColor: 'black',
    //   margin:"auto",
    //   minWidth:'45%',
      // padding:'5px'
      // maxWidth:"650px",
     color:"black",
      }}>

    <Card
    body
    inverse
    style={{
        backgroundColor: '#0a5669',
        textAlign: 'center',
        borderColor: 'black',
        // margin:'-10px',
        padding:"5px"    
      }}
  >
    <CardTitle tag="h4" style={{ textAlign: 'center'}}>
    Pay Here
    </CardTitle>
    </Card  >
    <div >
    <FormGroup style={{marginTop:"15px", textAlign:"center"}} >

    <Label style={{fontSize:"20px"}}>Bill Type :</Label>
    <DropDownList style={{fontSize:"18px", width:"80%"}} 
    data={options} defaultValue="Others" 
    value={type}
    onChange={e=> setType(e.target.value)}
    />


    <Col 
    style={{margin:"auto"}}
    >
    <Label style={{fontSize:"20px",marginTop:"20px"}}>Bill Amount (in <b>&#8377;</b>):</Label>
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
    style={{fontSize:"18px"}}

    />
    </Col>
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
          <div id ="success" style={{fontSize:"21px", textAlign:"center",color:"#72e625",shadowColor:"black"}}></div>
     </Card>
   
       
       
       </Card>
     </Card>
     {/* <PatientBillingHistory/> */}
     
        </div>
    
    )
  
  }

