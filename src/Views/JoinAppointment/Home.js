import { useEffect } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";

import Options from "./components/options/Options";
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
 
 useEffect(()=>{
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
 }, [])
  return (
    <VideoState>
      <div >

      <Card
    
     style={{
         backgroundColor: '#eef1f1',
         borderColor: '#333',
        //  width:"62%",
        // margin:"auto",
        
       }}
     >
      <Card
  
    style={{
        backgroundColor: '#04c0c1',
        borderColor: '#333',
        textAlign: 'center'  
        ,padding:"5px"      
      }}
  >
    <CardTitle tag="h2" style={{ textAlign: 'center',color:"white"}}>
      Join Online Consultation
    </CardTitle>
  </Card>
  <div style={{marginLeft:"0px"}}><Video /></div>
        
        <Options />
  

        </Card>
      </div>
    </VideoState>


  );
};

export default Home;
