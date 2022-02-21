import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setInputRedux1} from '../Redux/actionCreators'



export const FormComponent=(props)=>{
    const [input1,setInput1]=useState('')
    const dispatch=useDispatch()

    return (
        <div style={{width:'50vw',height:'calc(100vh - 200px)',display:'flex',flexDirection:"column",justifyContent:'center',alignItems:"center",backgroundColor:'#D0C0DFCC'}}>
            <div style={{display:'flex',flexDirection:"column",gap:10}}> 
                <label for="input1">Input1</label>
                <input type="text" id="input1" name="input1" onChange={(ev)=>setInput1(ev.target.value)} />
                <button type="button" onClick={(ev)=>dispatch(setInputRedux1(input1))}>Submit</button>
            </div>  
        </div>
    )
}
