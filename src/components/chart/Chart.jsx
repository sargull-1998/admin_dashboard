import React from 'react'
import "./chart.css"
import { LineChart,  XAxis, ResponsiveContainer, Line, Tooltip, CartesianGrid} from 'recharts';


export default function chart({title,data,dataKey,grid}) {
  return (
      
    <div className="chartcontainer">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
            <Tooltip/>
            {grid && <CartesianGrid stroke="lightgrey" strokeDasharray="5 5"/>}
        </LineChart>

        
        </ResponsiveContainer>
    </div>
  )
}
