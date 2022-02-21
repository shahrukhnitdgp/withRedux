import React from 'react'
import { useSelector } from 'react-redux'



export const ViewComponent=(props)=>{
    const input1=useSelector(state=>state.input1)

    return (
        <div style={{width:'50vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#FFBC61CC'}}>
            <p style={{fontSize:40}}>{input1}</p>
        </div>        
    )
}