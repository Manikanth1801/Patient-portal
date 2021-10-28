import React from 'react'
import { Link } from 'react-router-dom'

export default function Display(props) {
    return (
        <div>
           <ul>
        {props.sidebar.map((item, index) => {
          return <ul key={index}>
              <h1>
              {item.page}
              </h1>
                  {item.properties.map((c,i)=>{
                      return <h4 key={i}>
                          {c.myProfile}
                      </h4>
                  })}
              
          </ul>
              ;
        })}
      </ul>
        </div>
    )
}
