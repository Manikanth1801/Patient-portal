import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  const {page, properties} = props.sidebar;
  return (
    <div>
      
            {page}
            
            {properties.map((property, i) =>{
                return <div key = {i} >
                    {property.dashboard}
                </div>
            })}

      {/* <ul>
        {props.sidebar.map((item, index) => {
          return <ul key={index}>
              <h1>
              {item.page}
              </h1>
                  {item.properties.map((c,i)=>{
                      return <h4 key={i}>
                          {c.dashboard}
                      </h4>
                  })}
              
          </ul>
              ;
        })}
      </ul> */}
    </div>
  );
}
