import React from  'react'
import {FormComponent} from '../components/FormComponent'

export const FormParent=(props)=>{

    console.log('formparent renders')

    return (
        <div style={{backgroundColor:'#D0C0DFCC'}}>
        <p style={{fontSize:60}}>Form Parent</p>
        <FormComponent />
        </div>
    )
}